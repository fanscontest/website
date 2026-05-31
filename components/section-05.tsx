import Image from 'next/image'
import LogosIllustration from '@/public/images/logos-illustration.svg'
import Logos from '@/public/images/logos.png'

export default function Section05() {
  return (
    <section className="mt-16 md:mt-28">
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tr-[100px] bg-linear-to-tr from-brand-primary to-brand-secondary pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Section header */}
              <div className="md:max-w-3xl mb-12 md:mb-20" data-aos="fade-up">
                <h2 className="h2 text-white mb-4">Participation is FREE. Always.</h2>
                <p className="text-lg text-purple-200 mb-8">
                  Please report anyone asking you to pay to join a channel or enter a contest. Fans don't pay to play — brands sponsor the rewards. Here's how participation works.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center mb-6" data-aos="fade-up" data-aos-delay="100">
                <div className="relative">
                  <Image
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={LogosIllustration}
                    alt="Logos illustration"
                    aria-hidden="true"
                  />
                  <Image src={Logos} width={720} height={283} alt="Logos" />
                </div>
              </div>

              {/* Items */}
              <div
                className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:-mx-9 md:gap-0 items-start md:max-w-none text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* 1st item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-purple-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-slate-900 bg-white h-11 w-11 rounded-full">1</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Enrol before the deadline</h4>
                  <p className="text-purple-200">
                    Find a contest, join solo or on behalf of an NPO. Subscribe to channels to be auto-enrolled in future contests.
                  </p>
                </div>

                {/* 2nd item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-purple-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-slate-900 bg-white h-11 w-11 rounded-full">2</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Compete at start time</h4>
                  <p className="text-purple-200">
                    Everyone begins together. Winners are decided on highest score AND quickest time — accuracy under pressure.
                  </p>
                </div>

                {/* 3rd item */}
                <div className="relative md:px-9 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-16 after:bg-purple-400 last:after:hidden">
                  <div className="mb-3">
                    <div className="flex items-center justify-center font-bold text-slate-900 bg-white h-11 w-11 rounded-full">3</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-1">Win and get rewarded</h4>
                  <p className="text-purple-200">
                    Results publish at the end of the contest. Rewards dispatched within 24 hours. No catch, no fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}