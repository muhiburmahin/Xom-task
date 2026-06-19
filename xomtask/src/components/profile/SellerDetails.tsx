import { Clock, Package, ShieldCheck, ShoppingCart } from 'lucide-react'
import type { SellerDetailItem } from '../../types'
import UsFlag from '../ui/UsFlag'
import { sellerDetails } from '../../data/mockData'
import {
  profileCardClass,
  profileDetailIconWrapClass,
  profileDetailTextClass,
  profileSectionHeadingClass,
} from './profileSectionStyles'

function DetailIcon({ item }: { item: SellerDetailItem }) {
  const iconClass = 'h-[17px] w-[17px] shrink-0 text-[#7C3AED]'

  if (item.icon === 'flag') {
    return (
      <span className={profileDetailIconWrapClass}>
        <UsFlag />
      </span>
    )
  }

  if (item.icon === 'clock') {
    return (
      <span className={profileDetailIconWrapClass}>
        <Clock className={iconClass} strokeWidth={1.8} />
      </span>
    )
  }
  if (item.icon === 'shield') {
    return (
      <span className={profileDetailIconWrapClass}>
        <ShieldCheck className={iconClass} strokeWidth={1.8} />
      </span>
    )
  }
  if (item.icon === 'cart') {
    return (
      <span className={profileDetailIconWrapClass}>
        <ShoppingCart className={iconClass} strokeWidth={1.8} />
      </span>
    )
  }
  return (
    <span className={profileDetailIconWrapClass}>
      <Package className={iconClass} strokeWidth={1.8} />
    </span>
  )
}

export default function SellerDetails() {
  return (
    <section className={profileCardClass}>
      <h2 className={profileSectionHeadingClass}>Details</h2>

      <ul className="mt-4 space-y-[15px]">
        {sellerDetails.map((item) => (
          <li key={item.id} className="flex items-center gap-2.5">
            <DetailIcon item={item} />
            <span className={profileDetailTextClass}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
