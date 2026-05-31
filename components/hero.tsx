import Link from 'next/link'
import Image from 'next/image'
import AppMockup from '@/public/images/app-1.png'

export default function Hero() {
  return (
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-linear-to-tr from-purple-700 to-purple-600 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-36 md:pt-44 pb-24 md:pb-32">
          <div className="md:grid md:grid-cols-12 md:gap-10 lg:gap-16 items-center">

            {/* Copy column */}
            <div className="md:col-span-7 text-center md:text-left mb-16 md:mb-0">
              {/* Eyebrow */}
              <p
                className="inline-block text-[11px] uppercase tracking-[0.2em] text-brand-accent font-bold mb-6 px-3 py-1.5 rounded-full bg-purple-900/40 ring-1 ring-purple-400/30"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Join the community
              </p>

              {/* Headline */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                The ultimate app for social contests
              </h1>

              {/* Subhead */}
              <p
                className="text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                A social contest platform powered by communities and brands. Free quiz contests, real rewards, charity-first — built for fans who'd rather play than scroll past another ad.
              </p>

              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <Link className="btn-sm w-full inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-xs" href="#">
                    Get the app
                    <span className="tracking-normal text-brand-accent group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn-sm w-full inline-flex items-center text-white bg-linear-to-tr from-purple-400 hover:bg-purple-600 shadow-xs relative before:absolute before:inset-0 before:bg-purple-400/60 before:-z-10 before:rounded-full"
                    href="#how-it-works"
                  >
                    How it works
                  </Link>
                </div>
              </div>

              {/* Trust strip */}
              <div
                className="grid grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0 border-t border-purple-400/20 pt-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none">FREE</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">To play, always</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none">24h</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">Rewards dispatched</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-accent leading-none">0</p>
                  <p className="text-xs md:text-sm text-purple-200 mt-1.5">Tolerance for gambling</p>
                </div>
              </div>
            </div>

            {/* Phone mockup column */}
            <div
              className="md:col-span-5 flex justify-center md:justify-end"
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
