import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function IndustryBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-bg">
      <ol className="container flex flex-wrap items-center gap-1.5 py-3 text-[12px] text-muted md:text-[13px]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? <span aria-hidden className="text-muted/60">/</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="font-medium text-muted-strong transition hover:text-blue">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-semibold text-text" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
