import { getSiteOrigin } from "@/lib/industries/site-origin";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import type { BlogSection } from "@/lib/blogs";
import { faqCategories, faqs } from "@/lib/faqs";
import { getIndustryPageRecord } from "@/lib/industries/registry";
import { industrySharedFaqs } from "@/lib/industries/shared";
import {
  nebulaAudiences,
  nebulaComparison,
  nebulaDefinition,
  nebulaDeployment,
  nebulaFaqs,
  nebulaModules,
  nebulaProblem,
  nebulaSectionCopy,
  nebulaStack,
} from "@/lib/nebula-os";
import { industries, site, solutions } from "@/lib/site";
import { GLOSSARY_PATH, glossaryHub, glossaryTerms } from "@/lib/glossary";
import { USE_CASES_PATH, sharedRequirements, useCases, useCasesHub } from "@/lib/use-cases";
import { COMPARE_PATH, compareHub, comparisons } from "@/lib/comparisons";
import { TEXT_HEADERS, companyFactLines } from "@/app/llms.txt/content";
import { getSolutionPageContent, hubFaqs, solutionFacts } from "@/app/solutions/solution-page-content";

/**
 * /llms-full.txt — the long-form companion to /llms.txt: the readable text of
 * the solution, Nebula OS, FAQ, industry and blog pages as one Markdown file,
 * so an assistant can answer from (and cite) the site without crawling it.
 *
 * Deterministic by design: no timestamps, content in a fixed order, generated
 * only from the modules the pages render. Rebuilt at most hourly, matching the
 * s-maxage on /llms.txt.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

const sharedIndustryQuestions = new Set(industrySharedFaqs.map((faq) => faq.question));

/** Collapse whitespace so table cells and list items stay on one line. */
function oneLine(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function tableCell(text: string) {
  return oneLine(text).replace(/\|/g, "\\|");
}

function blogSectionLines(section: BlogSection): string[] {
  switch (section.type) {
    case "heading":
      return [`${section.level === 3 ? "#####" : "####"} ${oneLine(section.text)}`, ""];
    case "paragraph":
      return [section.text.trim(), ""];
    case "quote":
      return [`> ${oneLine(section.text)}`, ""];
    case "list":
      return [
        ...section.items.map((item, index) =>
          section.ordered ? `${index + 1}. ${oneLine(item)}` : `- ${oneLine(item)}`,
        ),
        "",
      ];
    default:
      return [];
  }
}

export async function GET() {
  const origin = getSiteOrigin();
  const url = (path: string) => `${origin}${path}`;
  const out: string[] = [];
  const push = (...lines: string[]) => out.push(...lines);

  push(`# ${site.name} — full text`, "");
  push(`> ${site.entityStatement}`, "");
  push(
    `This file collects the text of ${origin} for AI assistants. The short index is [llms.txt](${url("/llms.txt")}). Each section names the page it comes from; cite that page.`,
    "",
  );

  /* ---------------------------------------------------------------- */
  push("## Company facts", "");
  push(...companyFactLines(url), "");

  /* ---------------------------------------------------------------- */
  push("## Solutions", "");
  push(`Source: ${url("/solutions")}`, "");
  push("Facts shared by every module:", "");
  push(`- Works with: ${solutionFacts.worksWith}`);
  push(`- Deploys as: ${solutionFacts.deploysAs}`);
  push(`- Alerts via: ${solutionFacts.alertsVia}`);
  push(`- Data: ${solutionFacts.dataNote}`, "");
  for (const faq of hubFaqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
  push("");
  for (const solution of solutions) {
    const content = getSolutionPageContent(solution.slug);
    push(`### ${solution.name}`, "");
    push(`Source: ${url(`/solutions/${solution.slug}`)}`, "");
    push(oneLine(solution.headline), "");
    push(`**${solution.definition.question}** ${oneLine(solution.definition.answer)}`, "");
    push(oneLine(solution.overview), "");
    push("#### Features", "");
    for (const feature of solution.features) {
      push(`- **${feature.title}**: ${oneLine(feature.description)}`);
    }
    push("");
    push("#### How it works", "");
    solution.workflow.forEach((step, index) => {
      const detail = solution.workflowDetails?.[index];
      push(`${index + 1}. ${step}${detail ? `: ${oneLine(detail)}` : ""}`);
    });
    push("");
    if (solution.architecture.length) {
      push(`Architecture, in order: ${solution.architecture.join(" → ")}.`, "");
    }
    push("#### Benefits", "");
    for (const benefit of solution.benefits) push(`- ${benefit}`);
    push("");
    if (content) {
      const { comparison } = content;
      const [, otherLabel, orionLabel] = comparison.columns;
      push(`#### ${comparison.heading}`, "");
      push(`| Aspect | ${tableCell(otherLabel)} | ${tableCell(orionLabel)} |`);
      push("| --- | --- | --- |");
      for (const row of comparison.rows) {
        push(`| ${tableCell(row.dimension)} | ${tableCell(row.other)} | ${tableCell(row.orion)} |`);
      }
      push("");
    }
    if (solution.faqs.length) {
      push("#### FAQs", "");
      for (const faq of solution.faqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
      push("");
    }
  }

  /* ---------------------------------------------------------------- */
  push("## Nebula OS", "");
  push(`Source: ${url("/nebula-os")}`, "");
  push(nebulaSectionCopy.pageLede, "");
  push(`### ${nebulaDefinition.heading}`, "");
  for (const paragraph of nebulaDefinition.body) push(paragraph, "");

  push(`### ${nebulaProblem.heading}`, "");
  push(nebulaProblem.lede, "");
  for (const item of nebulaProblem.items) push(`- **${item.title}**: ${item.description}`);
  push("");

  push("### Modules", "");
  for (const nebulaModule of nebulaModules) {
    push(`#### ${nebulaModule.heading}`, "");
    push(nebulaModule.summary, "");
    for (const point of nebulaModule.points) push(`- ${point}`);
    push("", `More: ${url(nebulaModule.href)}`, "");
  }

  push("### Architecture", "");
  for (const layer of nebulaStack) {
    push(`- **${layer.name}** (${layer.items.join(", ")}): ${layer.role}`);
  }
  push("");

  push(`### ${nebulaDeployment.heading}`, "");
  push(nebulaDeployment.lede, "");
  for (const model of nebulaDeployment.models) {
    push(`#### ${model.name}`, "");
    push(`Best for: ${model.bestFor}.`, "");
    push(model.description, "");
    // Traits may be plain text or a { label, href } link (see NebulaDeploymentTrait).
    for (const trait of model.traits as unknown[]) {
      if (typeof trait === "string") push(`- ${trait}`);
      else if (trait && typeof trait === "object" && "label" in trait) {
        const { label, href } = trait as { label: string; href?: string };
        push(href ? `- [${label}](${href.startsWith("/") ? url(href) : href})` : `- ${label}`);
      }
    }
    push("");
  }

  push(`### ${nebulaComparison.heading}`, "");
  push(nebulaComparison.lede, "");
  push(`| Dimension | ${nebulaComparison.legacyLabel} | ${nebulaComparison.nebulaLabel} |`);
  push("| --- | --- | --- |");
  for (const row of nebulaComparison.rows) {
    push(`| ${tableCell(row.dimension)} | ${tableCell(row.legacy)} | ${tableCell(row.nebula)} |`);
  }
  push("");

  push("### Who Nebula OS is for", "");
  for (const audience of nebulaAudiences) push(`- **${audience.title}**: ${audience.description}`);
  push("");

  push("### Nebula OS FAQs", "");
  for (const faq of nebulaFaqs) push(`#### ${faq.question}`, "", faq.answer, "");

  /* ---------------------------------------------------------------- */
  push("## Frequently asked questions", "");
  push(`Source: ${url("/faqs")}`, "");
  for (const category of faqCategories) {
    if (category === "All") continue;
    const items = faqs.filter((faq) => faq.category === category);
    if (!items.length) continue;
    push(`### ${category}`, "");
    for (const faq of items) push(`#### ${faq.q}`, "", faq.a, "");
  }

  /* ---------------------------------------------------------------- */
  push("## Industries", "");
  push(`Source: ${url("/industries")}`, "");
  for (const industry of industries) {
    const record = getIndustryPageRecord(industry.slug);
    push(`### ${industry.name}`, "");
    push(`Source: ${url(`/industries/${industry.slug}`)}`, "");
    if (!record) {
      push(oneLine(industry.summary), "");
      continue;
    }
    push(oneLine(record.seo.description), "");
    for (const paragraph of record.context.paragraphs) push(oneLine(paragraph), "");
    if (record.useCases.length) {
      push("#### Use cases", "");
      for (const useCase of record.useCases) {
        const constraints = useCase.constraints ? ` (${oneLine(useCase.constraints)})` : "";
        push(`- **${useCase.title}**: ${oneLine(useCase.body)}${constraints}`);
      }
      push("");
    }
    if (record.limits) push(`Limits: ${oneLine(record.limits)}`, "");
    const ownFaqs = record.faqs.filter((faq) => !sharedIndustryQuestions.has(faq.question));
    if (ownFaqs.length) {
      push("#### FAQs", "");
      for (const faq of ownFaqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
      push("");
    }
  }
  push("### Questions answered on every industry page", "");
  for (const faq of industrySharedFaqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
  push("");

  /* ---------------------------------------------------------------- */
  push("## Glossary", "");
  push(`Source: ${url(GLOSSARY_PATH)}`, "");
  push(oneLine(glossaryHub.answer), "");
  for (const term of glossaryTerms) {
    push(`### ${term.term}`, "");
    push(`Source: ${url(`${GLOSSARY_PATH}/${term.slug}`)}`, "");
    push(oneLine(term.definition), "");
    for (const paragraph of term.details ?? []) push(oneLine(paragraph), "");
    if (term.howOrionAlertsHandles) {
      push(`How ${site.name} handles it: ${oneLine(term.howOrionAlertsHandles)}`, "");
    }
    if (term.faqs.length) push("Questions:", "");
    for (const faq of term.faqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
    if (term.faqs.length) push("");
  }

  /* ---------------------------------------------------------------- */
  push("## Use cases", "");
  push(`Source: ${url(USE_CASES_PATH)}`, "");
  push(oneLine(useCasesHub.answer), "");
  push("Requirements shared by every AI detection use case:", "");
  for (const requirement of sharedRequirements) push(`- ${oneLine(requirement)}`);
  push("");
  for (const useCase of useCases) {
    push(`### ${useCase.title}`, "");
    push(`Source: ${url(`${USE_CASES_PATH}/${useCase.slug}`)}`, "");
    push(oneLine(useCase.definition), "");
    if (useCase.howItWorks.length) {
      push("How it works:", "");
      for (const step of useCase.howItWorks) push(`- ${oneLine(step)}`);
      push("");
    }
    if (useCase.orionAlertsNote) push(oneLine(useCase.orionAlertsNote), "");
    if (useCase.reliability.length) {
      push("What affects reliability:", "");
      for (const item of useCase.reliability) push(`- ${oneLine(item)}`);
      push("");
    }
    if (useCase.extraRequirements?.length) {
      push("Additional requirements:", "");
      for (const item of useCase.extraRequirements) push(`- ${oneLine(item)}`);
      push("");
    }
    if (useCase.faqs.length) push("Questions:", "");
    for (const faq of useCase.faqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
    if (useCase.faqs.length) push("");
  }

  /* ---------------------------------------------------------------- */
  push("## Comparisons", "");
  push(`Source: ${url(COMPARE_PATH)}`, "");
  push(oneLine(compareHub.answer), "");
  for (const comparison of comparisons) {
    push(`### ${comparison.h1}`, "");
    push(`Source: ${url(`${COMPARE_PATH}/${comparison.slug}`)}`, "");
    push(oneLine(comparison.answer), "");
    push(`| Dimension | ${tableCell(comparison.labelA)} | ${tableCell(comparison.labelB)} |`);
    push("| --- | --- | --- |");
    for (const row of comparison.rows) {
      push(`| ${tableCell(row.dimension)} | ${tableCell(row.a)} | ${tableCell(row.b)} |`);
    }
    push("");
    for (const choice of comparison.choose) {
      push(`${oneLine(choice.option)}`, "");
      for (const item of choice.when) push(`- ${oneLine(item)}`);
      push("");
    }
    if (comparison.whereOrionAlertsFits.length) {
      push(`Where ${site.name} fits:`, "");
      for (const item of comparison.whereOrionAlertsFits) push(`- ${oneLine(item)}`);
      push("");
    }
    if (comparison.faqs.length) push("Questions:", "");
    for (const faq of comparison.faqs) push(`- **${faq.question}** ${oneLine(faq.answer)}`);
    if (comparison.faqs.length) push("");
  }

  /* ---------------------------------------------------------------- */
  try {
    const posts = await getPublishedBlogPosts();
    if (posts.length) {
      push("## Blog", "");
      push(`Source: ${url("/blogs")}`, "");
      for (const post of posts) {
        push(`### ${post.title}`, "");
        push(`Source: ${url(`/blogs/${post.slug}`)}`, "");
        push(`Published: ${post.date}${post.author ? ` · ${post.author}` : ""}`, "");
        if (post.excerpt) push(`_${oneLine(post.excerpt)}_`, "");
        if (post.takeaways.length) {
          push("Key takeaways:", "");
          for (const takeaway of post.takeaways) push(`- ${oneLine(takeaway)}`);
          push("");
        }
        for (const section of post.sections) push(...blogSectionLines(section));
      }
    }
  } catch {
    // Blog store unavailable: ship the rest of the file.
  }

  // Blog and page copy uses root-relative Markdown links; make them absolute so
  // they still resolve when this file is read outside the site.
  const body = out
    .join("\n")
    .replace(/\]\(\/(?!\/)/g, `](${origin}/`)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return new Response(`${body}\n`, {
    headers: TEXT_HEADERS,
  });
}
