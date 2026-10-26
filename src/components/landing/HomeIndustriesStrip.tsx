import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIndustry, industries, type Industry } from "@/lib/site";

/** Industries featured on the homepage; the full list lives on /industries. */
const FEATURED_INDUSTRY_SLUGS = [
  "banking",
  "retail-shopping",
  "manufacturing",
  "logistics",
  "pharma",
  "healthcare",
  "data-centres",
  "government",
];

export function HomeIndustriesStrip() {
  const featured = FEATURED_INDUSTRY_SLUGS.map((slug) => getIndustry(slug)).filter(
    (industry): industry is Industry => Boolean(industry),
  );

  if (!featured.length) return null;

  return (
    <section aria-labelledby="home-industries-heading" className="bg-surface py-14 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries</p>
            <h2
              id="home-industries-heading"
              className="mt-2 text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
            >
              AI video analytics for {industries.length} industries
            </h2>
            <p className="description mt-3 text-base">
              See the risks, detections and modules that matter in your sector.
            </p>
          </div>
          <Link
            href="/industries"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue transition"
          >
            All industries
            <ArrowRight size={16} aria-hidden className="arrow-nudge" />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {featured.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group card-lift focus-ring relative block overflow-hidden rounded-[18px] border border-line bg-[#0b1220]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 card-media group-hover:opacity-95 group-focus-visible:opacity-95"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold leading-snug text-white sm:p-4 sm:text-base">
                    {industry.cardLabel ?? industry.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
