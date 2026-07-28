import Image from "next/image";

type BrandedVisualProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function BrandedVisual({ src, alt, className = "", priority = false }: BrandedVisualProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={`object-cover object-center ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
    />
  );
}
