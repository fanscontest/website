import Image from 'next/image'
import QuoteAuthor from '@/public/images/quote-author-01.jpg'
import CardsIllustration from '@/public/images/cards-illustration.svg'
import AppMockup from '@/public/images/app-1.png'

export default function Section02() {
  return (
    <section data-aos-id-2="">
      <div className="relative max-w-7xl mx-auto">

        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">

            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

              {/* Content */}
              <div className="md:max-w-lg">

                {/* Copy */}
                <h2 className="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">
                  The new way to engage fans
                </h2>
                <p className="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                  Stop interrupting. Start inviting. Branded quiz contests turn passive audiences into active participants — and turn participation into measurable insight you can act on.
                </p>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm inline-flex items-center text-purple-50 bg-brand-primary hover:bg-brand-primary/90 group shadow-xs" href="#">
                      Create a contest
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <Image
                    className="rounded-full self-start shrink-0 mr-3"
                    src={QuoteAuthor}
                    width={32}
                    height={32}
                    alt="Quote author 01"
                  />
                  <div>
                    <blockquote className="text-slate-400 m-0">
                      “ I am recommending this app because of its value-adding contests, swift scoring system, and amazing rewards. ”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 -mb-12 mt-8 md:mt-0 md:mb-0 flex justify-center">
                <div className="relative max-w-[260px] sm:max-w-[300px]">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={CardsIllustration}
                    alt=""
                    aria-hidden="true"
                  />
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                    <Image
                      src={AppMockup}
                      alt="Fans Contest mobile app — home feed"
                      className="w-full h-auto drop-shadow-2xl"
                      sizes="(max-width: 768px) 260px, 300px"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}