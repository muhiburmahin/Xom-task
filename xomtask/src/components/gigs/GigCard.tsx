import { BadgeCheck, Crown, Star } from 'lucide-react'
import type { GigCard as GigCardType } from '../../types'

interface GigCardProps {
  gig: GigCardType
}

export default function GigCard({ gig }: GigCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white">
      <div className="relative shrink-0 rounded-t-[14px] border-b border-[#F3F4F6] bg-[#FAFAFA] p-2">
        <div className="overflow-hidden rounded-lg bg-white">
          <img
            src={gig.image}
            alt={gig.title}
            className="block h-[132px] w-full object-contain object-center sm:h-[142px]"
          />
        </div>
        {gig.badge ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#7C3AED] px-2 py-0.5 text-[10px] font-semibold leading-none text-white">
            <BadgeCheck className="h-3 w-3 shrink-0" strokeWidth={2.5} />
            {gig.badge}
          </span>
        ) : null}
      </div>

      <div className="relative z-[1] flex flex-1 flex-col bg-white p-3">
        <p className="line-clamp-2 min-h-[36px] text-[12px] font-normal leading-[1.45] text-[#344054]">
          {gig.title}
        </p>

        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 text-[12px] font-medium leading-none text-[#667085]">
            <Star className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" strokeWidth={0} />
            {gig.rating} ({gig.reviewCount})
          </span>
          <span className="text-[15px] font-bold leading-none text-[#7C3AED]">${gig.price}</span>
        </div>

        <div className="mt-2.5 flex items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-2.5 py-2">
          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#E5E7EB] bg-[#F2F4F7]">
            <img
              src={gig.sellerAvatar}
              alt={gig.sellerName}
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[12px] font-semibold leading-tight text-[#101828]">
              {gig.sellerName}
            </p>
            <span className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium leading-none text-[#667085]">
              <Crown className="h-3 w-3 shrink-0 fill-[#F97316] text-[#F97316]" strokeWidth={0} />
              Top Rated
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
