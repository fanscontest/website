export default function Cta() {
  return (
    <section className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-brand-primary -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20">
          {/* Top row: eyebrow + pill on the same line */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-12">
            <p className="text-xl text-white font-[550]">Real rewards. Real recognition.</p>
            <a
              href="https://qaragon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm uppercase tracking-[0.2em] text-brand-accent font-bold px-6 py-3 rounded-full bg-purple-900/40 ring-1 ring-purple-400/30 hover:bg-purple-900/60 hover:ring-purple-400/50 transition shrink-0"
            >
              Powered by Qaragon
            </a>
          </div>
          {/* Headline takes full width below */}
          <h2 className="h3 text-white">Fans participate. Brands engage. Champions emerge.</h2>
        </div>
      </div>
    </section>
  )
}