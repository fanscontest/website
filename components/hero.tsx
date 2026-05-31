import Image from 'next/image'
import AppMockup from '@/public/images/app-1.png'

export default function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 mb-28 md:mb-0 bg-linear-to-tr from-brand-primary to-brand-secondary pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-[10rem] md:pt-[11rem] pb-16 md:pb-24">
          <div className="md:grid md:grid-cols-12 md:gap-10 lg:gap-16 items-center">

            {/* Copy column */}
            <div className="md:col-span-8 text-center md:text-left mb-16 md:mb-0">
              {/* Headline */}
              <h1
                id="hero-title"
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                The ultimate app<br />for social contests
              </h1>

              {/* Subhead */}
              <p
                className="text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                A social contest platform powered by communities and brands. Free quiz contests, real rewards, charity-first — built for fans who'd rather compete than scroll past another ad.
              </p>

              {/* App store badges */}
              <div
                className="flex flex-wrap justify-center md:justify-start gap-3 mb-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="https://apps.apple.com/us/app/fans-contest/id1660521129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 shadow-sm transition"
                  aria-label="Download Fans Contest on the App Store"
                >
                  <svg className="w-7 h-7 fill-slate-900" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wide">Download on the</div>
                    <div className="text-sm font-semibold text-slate-900">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.fanscontest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 shadow-sm transition"
                  aria-label="Get Fans Contest on Google Play"
                >
                  <svg className="w-7 h-7 fill-slate-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256.5L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wide">Get it on</div>
                    <div className="text-sm font-semibold text-slate-900">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Trust strip */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto md:mx-0 border-t border-purple-400/20 pt-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none tabular-nums">3,272+</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">Participants</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none tabular-nums">555+</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">Contests</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none tabular-nums">204+</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">Channels</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none tabular-nums">35+</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">Creators</p>
                </div>
              </div>

              {/* Powered by Soucher */}
              <a
                href="https://soucher.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-[4.5rem] text-[11px] uppercase tracking-[0.2em] text-brand-accent font-bold px-3 py-1.5 rounded-full bg-purple-900/40 ring-1 ring-purple-400/30 hover:bg-purple-900/60 hover:ring-purple-400/50 transition"
                data-aos="fade-up"
                data-aos-anchor="#hero-title"
                data-aos-delay="500"
              >
                Powered by Soucher
              </a>
            </div>

            {/* Phone mockup column */}
            <div
              className="md:col-span-4 flex justify-center md:justify-end"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                <Image
                  src={AppMockup}
                  alt="Fans Contest mobile app — home screen"
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
