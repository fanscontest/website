import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link className="inline-flex items-center gap-2.5 group" href="/" aria-label="Fans Contest">
              <Image
                src={Logo}
                alt=""
                width={36}
                height={36}
                className="rounded-md shadow-sm transition-transform duration-150 group-hover:scale-105"
                priority
              />
              <span className="hidden sm:inline-block font-bold text-white tracking-tight text-lg">
                Fans Contest
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link className="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-xs" href="#">
                  Get the app
                  <span className="tracking-normal text-brand-accent group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
