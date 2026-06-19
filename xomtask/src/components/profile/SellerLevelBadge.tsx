import { seller } from '../../data/mockData'
import { profileCardClass, profileSectionHeadingClass } from './profileSectionStyles'

const badgeEmojis = ['🏆', '🎖️', '🎓', '⭐']

export default function SellerLevelBadge() {
  return (
    <section className={profileCardClass}>
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className={profileSectionHeadingClass}>Seller Level &amp; Badge</h2>
        <span className="shrink-0 rounded-full bg-[#F4EBFF] px-3 py-1 text-[11px] font-medium leading-none text-[#7C3AED]">
          {seller.sellerLevel}
        </span>
      </div>

      <div className="flex items-center justify-between px-0.5">
        {badgeEmojis.map((emoji, index) => (
          <span
            key={index}
            className="text-[38px] leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          >
            {emoji}
          </span>
        ))}
      </div>
    </section>
  )
}
