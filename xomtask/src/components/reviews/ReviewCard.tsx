import { ShieldCheck, Star } from 'lucide-react'
import type { Review } from '../../types'
import UsFlag from '../ui/UsFlag'

interface ReviewCardProps {
  review: Review
  sellerName: string
  sellerAvatar: string
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-px">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-3.5 w-3.5 ${
            index < rating ? 'fill-[#FBBF24] text-[#FBBF24]' : 'fill-[#E4E7EC] text-[#E4E7EC]'
          }`}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

export default function ReviewCard({ review, sellerName, sellerAvatar }: ReviewCardProps) {
  return (
    <article className="rounded-xl border border-[#E5E7EB] bg-white p-4 sm:p-5">
      <div className="flex gap-3">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#E5E7EB] bg-[#F2F4F7]">
          <img
            src={review.userAvatar}
            alt={review.userName}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="text-[14px] font-semibold leading-none text-[#101828]">{review.userName}</p>
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#7C3AED]" strokeWidth={2} />
              <StarRow rating={review.rating} />
            </div>
            <span className="text-[12px] leading-none text-[#98A2B3] sm:shrink-0">{review.date}</span>
          </div>

          <div className="mt-2 flex items-center gap-1.5">
            <UsFlag className="h-[13px] w-[18px]" />
            <span className="text-[12px] leading-none text-[#667085]">{review.country}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 border-b border-[#EAECF0]" />

      <p className="mt-3 text-[13px] leading-[1.65] text-[#344054]">{review.comment}</p>

      {review.reply ? (
        <div className="mt-4 ml-0 rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-3 sm:ml-[52px] sm:p-4">
          <div className="flex gap-2.5">
            <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[#E5E7EB] bg-white">
              <img
                src={sellerAvatar}
                alt={sellerName}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold leading-none text-[#101828]">Seller Reply</p>
              <p className="mt-2 text-[12px] leading-[1.6] text-[#667085]">{review.reply}</p>
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}
