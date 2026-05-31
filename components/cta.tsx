export default function Cta() {
  return (
    <section className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-brand-primary -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20">
          <div className="sm:flex sm:flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <p className="text-xl text-brand-accent font-[550] mb-3">Real rewards. Real recognition.</p>
              <h2 className="h2 text-white">Fans participate. Brands engage. Champions emerge.</h2>
            </div>

            {/* Buttons */}
            <div className="shrink-0">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0">
                <div>
                  <a className="btn-sm w-full inline-flex items-center justify-center text-slate-900 bg-brand-accent hover:bg-brand-accent/90 font-semibold shadow-xs" href="#">
                    Get the app
                  </a>
                </div>
                <div>
                  <a
                    className="btn-sm w-full inline-flex items-center justify-center text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/30 shadow-xs"
                    href="#"
                  >
                    Create a contest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}