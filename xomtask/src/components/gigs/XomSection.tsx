import { ChevronRight } from 'lucide-react'
import { gigItems } from '../../data/mockData'
import GigCard from './GigCard'

export default function XomSection() {
  return (
    <section className="rounded-2xl border-0 bg-white p-5 shadow-[0_4px_24px_rgba(16,24,40,0.07)] sm:p-6">
      <h2 className="text-[22px] font-bold leading-none tracking-tight text-[#101828] sm:text-[24px]">
        XOM
      </h2>

      <div className="relative mt-4 sm:mt-5">
        <div className="scrollbar-none flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-0.5 sm:gap-4 xl:grid xl:grid-cols-4 xl:gap-4 xl:overflow-visible xl:snap-none">
          {gigItems.map((gig) => (
            <div key={gig.id} className="w-[172px] shrink-0 snap-start sm:w-[184px] xl:w-full xl:min-w-0">
              <GigCard gig={gig} />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute -right-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.1)] xl:flex"
        >
          <ChevronRight className="h-[18px] w-[18px] text-[#344054]" strokeWidth={2} />
        </div>
      </div>
    </section>
  )
}
