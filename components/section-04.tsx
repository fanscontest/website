import Image from 'next/image'
import AppMockup from '@/public/images/app-1.png'

export default function Section04() {
  return (
    <section className="mt-6" data-aos-id-4>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 border-2 border-slate-100 pointer-events-none -z-10" aria-hidden="true" />
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-linear-to-t from-white pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="100">
                  Built for fans, by fans. Loved by brands.
                </h2>
                <p className="text-lg text-slate-500 mb-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="200">
                  A community formed to promote love, fun, knowledge, cultures and values. Free for fans to play, sponsored by brands that want to actually be remembered.
                </p>

                {/* Lists */}
                <div className="sm:columns-2 mb-8 space-y-8 sm:space-y-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="300">
                  {/* Column #1 */}
                  <div>
                    <h5 className="font-bold mb-5">For fans</h5>
                    <ul className="inline-flex flex-col text-slate-500 space-y-2.5">
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Free to play, always</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Subscribe to channels you care about</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Auto-enrol in new contests</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Compete on score AND speed</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Win rewards in your region</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Play solo or for a charity (NPO)</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Real-time results when contests close</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>iOS and Android, no waitlist</span>
                      </li>
                    </ul>
                  </div>
                  {/* Column #2 */}
                  <div>
                    <h5 className="font-bold mb-5">For brands</h5>
                    <ul className="inline-flex flex-col text-slate-500 space-y-2.5">
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Run branded quiz contests</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Spin up channels for your audience</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>See live participation insight</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Identify your true superfans</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Charitable contests welcomed</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Dashboard for results &amp; rewards</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>No fees taken from prizes</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <circle className="fill-purple-100" cx="10" cy="10" r="10" />
                          <path
                            className="fill-purple-600"
                            d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"
                          />
                        </svg>
                        <span>Manage everything in the web app</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm inline-flex items-center text-purple-50 bg-brand-primary hover:bg-brand-primary/90 group shadow-xs" href="#">
                      Get the app
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:ml-8 mt-8 md:mt-0 flex justify-center md:justify-end">
                <div className="relative max-w-[260px] sm:max-w-[300px]">
                  <Image
                    src={AppMockup}
                    alt="Fans Contest mobile app — home feed"
                    className="w-full h-auto drop-shadow-2xl"
                    sizes="(max-width: 768px) 260px, 300px"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}