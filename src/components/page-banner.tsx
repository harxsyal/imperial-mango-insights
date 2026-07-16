import banner from "@/assets/page-banner.jpg";
import { ImperialCrown } from "@/components/imperial-logo";

export function PageBanner({ title, script }: { title: string; script?: string }) {
  return (
    <section className="relative w-full h-[46vh] min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden bg-cream">
      <img
        src={banner}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={700}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/70 to-cream" />
      <div className="relative z-10 px-6 flex flex-col items-center">
        <ImperialCrown className="w-12 h-12 mb-4" color="var(--color-orange)" />
        {script && (
          <div className="script text-xs md:text-sm mb-4">{script}</div>
        )}
        <h1 className="text-4xl md:text-6xl font-normal text-ink">
          {title}
        </h1>
        <span className="mt-6 h-px w-20 bg-orange" aria-hidden />
      </div>
    </section>
  );
}