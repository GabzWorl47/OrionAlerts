type ArchitectureLayerTone = "input" | "device" | "core" | "cloud";

type ArchitectureLayerProps = {
  title: string;
  items: readonly string[] | string[];
  tone?: ArchitectureLayerTone;
};

const toneStyles: Record<
  ArchitectureLayerTone,
  { label: string; chip: string }
> = {
  input: {
    label: "text-blue",
    chip: "border-blue/20 bg-blue/[0.04] text-text",
  },
  device: {
    label: "text-cyan",
    chip: "border-cyan/25 bg-cyan/5 text-text",
  },
  core: {
    label: "text-blue",
    chip: "border-blue/25 bg-blue/10 text-blue",
  },
  cloud: {
    label: "text-blue",
    chip: "border-line bg-white text-muted-strong",
  },
};

export function ArchitectureLayer({
  title,
  items,
  tone = "input",
}: ArchitectureLayerProps) {
  const styles = toneStyles[tone];

  return (
    <div className="w-full">
      <p
        className={`mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${styles.label}`}
      >
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-medium md:text-xs ${styles.chip}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
