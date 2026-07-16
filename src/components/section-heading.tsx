import leaves from "@/assets/mango-leaves.png";

export function SectionHeading({
  script,
  title,
  subtitle,
  align = "center",
}: {
  script?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls}`}>
      <img src={leaves} alt="" aria-hidden className="w-16 h-16 opacity-80" width={128} height={128} />
      {script && (
        <div className="script text-3xl md:text-4xl -mt-2 mb-3">{script}</div>
      )}
      <h2 className="text-4xl md:text-5xl font-extralight text-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}