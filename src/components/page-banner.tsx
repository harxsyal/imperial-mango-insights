import banner from "@/assets/about-section.jpg";

export function PageBanner({ title, script }: { title: string; script?: string }) {
  return (
    <section
      className="relative w-full h-[38vh] md:h-[46vh] min-h-[260px] flex flex-col items-center justify-center text-center overflow-hidden bg-cream-2"
    >
      <img
        src={banner.url}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={700}
      />
      <div className="absolute inset-0 bg-cream/55" />
      <div className="relative z-10 px-5 md:px-6 pt-20 md:pt-0">
        {script && (
          <div className="script text-2xl md:text-4xl mb-1 md:mb-2">{script}</div>
        )}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-ink tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}