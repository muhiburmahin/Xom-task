import type { ReactNode } from 'react'
import { BadgeCheck, Heart, MessageSquare, Share2, Star } from 'lucide-react'
import { seller, sellerStats } from '../../data/mockData'

const AVATAR_SIZE = 92

function StatBox({
  value,
  label,
  children,
}: {
  value: string
  label?: string
  children?: ReactNode
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl bg-[#F2F4F7] px-1.5 py-3">
      <span className="text-[15px] font-semibold leading-none text-[#101828]">{value}</span>
      {children ?? (
        <span className="mt-2 text-center text-[10px] leading-tight text-[#667085]">{label}</span>
      )}
    </div>
  )
}

export default function ProfileCard() {
  return (
    <div className="w-full overflow-hidden rounded-b-[20px] rounded-t-none border-0 bg-white shadow-[0_4px_24px_rgba(16,24,40,0.07)]">
      <div className="relative h-[78px] bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#EC4899]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <img
              src={seller.avatar}
              alt={seller.name}
              className="rounded-full border-[4px] border-white object-cover"
              style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
            />
            {seller.isOnline && (
              <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#12B76A]" />
            )}
          </div>
        </div>
      </div>

      <div className="px-6 pb-7 pt-[54px] text-center">
        <div className="flex items-center justify-center gap-1.5">
          <h1 className="text-[17px] font-semibold leading-none text-[#101828]">{seller.name}</h1>
          {seller.isVerified && (
            <BadgeCheck className="h-[18px] w-[18px] fill-[#2E90FA] text-white" />
          )}
        </div>
        <p className="mt-1.5 text-[13px] font-medium text-[#7C3AED]">{seller.title}</p>

        <div className="mt-4 flex gap-2.5">
          <StatBox value={String(sellerStats.ordersCompleted)} label="Order Completed" />
          <StatBox
            value={String(sellerStats.runningOrders).padStart(2, '0')}
            label="Running Order"
          />
          <StatBox value={`Avg ${sellerStats.avgRating}`}>
            <div className="mt-2 flex items-center gap-1">
              <div className="flex items-center gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-[10px] w-[10px] fill-[#FBBF24] text-[#FBBF24]"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-[10px] leading-none text-[#667085]">
                5.0 ({sellerStats.reviewCount})
              </span>
            </div>
          </StatBox>
        </div>

        <button
          type="button"
          className="mt-4 flex h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#7C3AED] text-[13px] font-medium text-white"
        >
          <MessageSquare className="h-4 w-4" strokeWidth={2} />
          Contact Me
        </button>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex h-[38px] items-center justify-center gap-1.5 rounded-xl border border-[#E4E7EC] bg-white text-[12px] font-medium text-[#667085]"
          >
            <Heart className="h-3.5 w-3.5" strokeWidth={2} />
            Save
          </button>
          <button
            type="button"
            className="flex h-[38px] items-center justify-center gap-1.5 rounded-xl border border-[#E4E7EC] bg-white text-[12px] font-medium text-[#667085]"
          >
            <Share2 className="h-3.5 w-3.5" strokeWidth={2} />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}
