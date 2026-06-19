import { ChevronRight } from 'lucide-react'
import { portfolioItems } from '../../data/mockData'

function PortfolioCard({
  title,
  subtitle,
  image,
}: {
  title: string
  subtitle: string
  image: string
}) {
  return (
    <article className="rounded-[14px] border border-[#E5E7EB] bg-white p-3.5">
      <h3 className="text-[13px] font-semibold leading-snug text-[#101828]">{title}</h3>
      <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1.5] text-[#667085]">{subtitle}</p>
      <div className="mt-3 overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#FAFAFA]">
        <img
          src={image}
          alt={title}
          className="block h-[148px] w-full object-cover object-top sm:h-[156px]"
        />
      </div>
    </article>
  )
}

export default function PortfolioSection() {
  return (
    <section className="rounded-2xl border-0 bg-white p-5 shadow-[0_4px_24px_rgba(16,24,40,0.07)] sm:p-6">
      <div className="mb-4 flex items-center justify-between sm:mb-5">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#101828]">
          Portfolio
        </h2>
        <span className="text-[13px] font-medium text-[#7C3AED]">See All</span>
      </div>

      <div className="relative">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto pb-0.5 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="w-[82vw] shrink-0 snap-start sm:w-[300px] lg:w-auto lg:min-w-0"
            >
              <PortfolioCard title={item.title} subtitle={item.subtitle} image={item.image} />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute -right-2 top-[calc(50%+20px)] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.1)] lg:flex"
        >
          <ChevronRight className="h-[18px] w-[18px] text-[#344054]" strokeWidth={2} />
        </div>
      </div>
    </section>
  )
}
