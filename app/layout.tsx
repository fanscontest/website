import './css/style.css'

import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Fans Contest — the ultimate app for social contests',
    template: '%s · Fans Contest',
  },
  description: 'A social contest platform powered by communities and brands. Where fans participate, brands engage, and champions emerge. Free to play. Charity-first. Gambling-free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-brand-bg text-slate-800`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
