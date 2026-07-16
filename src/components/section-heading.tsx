import { ImperialCrown } from "@/components/imperial-logo";

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
      <ImperialCrown className="w-10 h-10 mb-4" color="var(--color-orange)" />
      {script && (
        <div className="script text-xs md:text-sm mb-4">{script}</div>
      )}
      <h2 className="text-3xl md:text-5xl font-normal text-ink">
        {title}
      </h2>
      <span className="mt-5 h-px w-16 bg-orange" aria-hidden />
      {subtitle && (
        <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed italic font-light" style={{ fontFamily: "var(--font-sans)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}