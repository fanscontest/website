import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link className="inline-flex items-center gap-3 group" href="/" aria-label="Fans Contest">
              <Image
                src={Logo}
                alt=""
                width={56}
                height={56}
                className="rounded-xl ring-2 ring-white/40 shadow-lg transition-transform duration-150 group-hover:scale-105"
                priority
              />
              <span className="hidden sm:inline-block font-extrabold text-white tracking-tight text-xl md:text-2xl">
                Fans Contest
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link className="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 shadow-xs" href="#">
                  Get the app
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
