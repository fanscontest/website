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
            <Link className="inline-flex items-center gap-4 group" href="/" aria-label="Fans Contest">
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
                <a
                  href="https://qaragon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] tracking-[0.2em] text-brand-accent font-bold px-3 py-1.5 rounded-full bg-purple-900/40 ring-1 ring-purple-400/30 hover:bg-purple-900/60 hover:ring-purple-400/50 transition"
                >
                  Powered by QARAGON
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
