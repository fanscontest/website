import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLegalPages } from '@/components/mdx/utils'
import { CustomMDX } from '@/components/mdx/mdx'

const LEGAL_ORDER = ['terms', 'privacy', 'cookies', 'disclaimer', 'imprint'] as const
const LABELS: Record<string, string> = {
  terms: 'Terms',
  privacy: 'Privacy',
  cookies: 'Cookies',
  disclaimer: 'Disclaimer',
  imprint: 'Imprint',
}

export async function generateStaticParams() {
  return getLegalPages().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata | undefined> {
  const { slug } = await props.params
  const page = getLegalPages().find((p) => p.slug === slug)
  if (!page) return
  return {
    title: page.metadata.title,
    description: page.metadata.summary,
  }
}

export default async function LegalPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const page = getLegalPages().find((p) => p.slug === slug)
  if (!page) notFound()

  return (
    <article>
      {/* Hero band */}
      <div className="relative bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-36 pb-12 md:pt-44 md:pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {page.metadata.title}
          </h1>
          {page.metadata.summary && (
            <p className="text-lg text-purple-100/80 mt-4 max-w-2xl">{page.metadata.summary}</p>
          )}
          {page.metadata.updatedAt && (
            <p className="text-sm text-purple-100/60 mt-6">
              Last updated {page.metadata.updatedAt}
            </p>
          )}
        </div>
      </div>

      {/* Tab nav */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 -mb-px overflow-x-auto">
            {LEGAL_ORDER.map((s) => {
              const active = s === slug
              return (
                <li key={s}>
                  <Link
                    href={`/${s}`}
                    className={
                      'inline-block py-4 text-sm font-medium border-b-2 transition ' +
                      (active
                        ? 'text-brand-primary border-brand-primary'
                        : 'text-slate-500 border-transparent hover:text-slate-800 hover:border-slate-300')
                    }
                  >
                    {LABELS[s]}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="prose prose-slate max-w-none prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-p:text-slate-700 prose-li:text-slate-700">
          <CustomMDX source={page.content} />
        </div>
      </div>
    </article>
  )
}
