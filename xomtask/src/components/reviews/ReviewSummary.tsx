import { BadgeCheck, Star } from 'lucide-react'
import { honestReviewsInfo, reviewSummary } from '../../data/mockData'

function HonestReviewsTooltip() {
  return (
    <div className="w-full rounded-[20px] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(16,24,40,0.12)] sm:w-[360px] sm:px-6 sm:py-5">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB]">
          <BadgeCheck className="h-4 w-4 text-white" strokeWidth={2.5} />
        </span>
        <h4 className="text-[15px] font-semibold leading-none text-[#101828]">
          {honestReviewsInfo.title}
        </h4>
      </div>

      <ol className="mt-4 list-none space-y-3 p-0 pl-0 sm:pl-14">
        {honestReviewsInfo.points.map((point, index) => (
          <li key={index} className="text-[12px] font-normal leading-[1.5] text-[#667085]">
            {index + 1}. {point}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function ReviewSummary() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-1.5">
          <h2 className="text-[15px] font-semibold leading-none text-[#101828]">Reviews</h2>
          <span
            aria-hidden="true"
            className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E4E7EC] text-[10px] font-semibold leading-none text-[#667085]"
          >
            i
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#101828]">
          <Star className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" strokeWidth={0} />
          {reviewSummary.avgRating} ({reviewSummary.totalCount})
        </span>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <span className="border-b-2 border-[#7C3AED] pb-1 text-[13px] font-medium leading-none text-[#7C3AED]">
          Positive {reviewSummary.positiveCount}
        </span>
        <span className="pb-1 text-[13px] font-medium leading-none text-[#344054]">
          Negative {reviewSummary.negativeCount}
        </span>
      </div>
    </div>
  )
}

export { HonestReviewsTooltip }
