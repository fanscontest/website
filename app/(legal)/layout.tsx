import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="grow bg-white">{children}</main>
      <Footer />
    </>
  )
}
