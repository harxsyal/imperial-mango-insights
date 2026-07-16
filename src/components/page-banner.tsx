import banner from "@/assets/page-banner.jpg";

export function PageBanner({ title, script }: { title: string; script?: string }) {
  return (
    <section
      className="relative w-full h-[46vh] min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden bg-cream-2"
    >
      <img
        src={banner}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={700}
      />
      <div className="absolute inset-0 bg-cream/55" />
      <div className="relative z-10 px-6">
        {script && (
          <div className="script text-3xl md:text-4xl mb-2">{script}</div>
        )}
        <h1 className="text-5xl md:text-7xl font-extralight text-ink tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}