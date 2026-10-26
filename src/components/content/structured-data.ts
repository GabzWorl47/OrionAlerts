import { absoluteUrl, getSiteOrigin } from "@/lib/industries/site-origin";

/** Page-local JSON-LD builders for the glossary and fact-sheet pages. */

export function glossarySetId(): string {
  return `${absoluteUrl("/glossary")}#defined-term-set`;
}

export function definedTermId(slug: string): string {
  return `${absoluteUrl(`/glossary/${slug}`)}#term`;
}

type TermInput = { slug: string; term: string; definition: string };

export function definedTermSetJsonLd({
  name,
  description,
  terms,
}: {
  name: string;
  description: string;
  terms: TermInput[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": glossarySetId(),
    name,
    description,
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": definedTermId(term.slug),
      name: term.term,
      description: term.definition,
      url: absoluteUrl(`/glossary/${term.slug}`),
    })),
  };
}

export function definedTermJsonLd(term: TermInput) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": definedTermId(term.slug),
    name: term.term,
    description: term.definition,
    url: absoluteUrl(`/glossary/${term.slug}`),
    inDefinedTermSet: { "@id": glossarySetId() },
  };
}

export function aboutPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    mainEntity: { "@id": `${origin}/#organization` },
    isPartOf: { "@id": `${origin}/#website` },
  };
}
