import type { ReactNode } from 'react'
import { Bell, Mail, Search, ShoppingCart } from 'lucide-react'
import XomWorkLogo from '../ui/XomWorkLogo'
import { layout, SITE_CONTAINER } from '../../constants/layout'

interface NavActionProps {
  icon: ReactNode
  label: string
  count: number
}

function NavAction({ icon, label, count }: NavActionProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 transition-opacity hover:opacity-80"
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center text-[#667085]">
        {icon}
        <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#7C3AED] px-1 text-[9px] font-bold leading-none text-white">
          {count}
        </span>
      </span>
      <span className="text-[13px] font-normal leading-none text-[#344054]">{label}</span>
    </button>
  )
}

export default function Navbar() {
  const h = layout.searchHeight
  const btn = layout.searchBtnSize

  return (
    <header className="border-0 bg-white">
      <div
        className={`${SITE_CONTAINER} grid items-center gap-x-5`}
        style={{
          height: layout.headerHeight,
          gridTemplateColumns: 'auto 1fr auto',
        }}
      >
        <XomWorkLogo />

        <div className="flex justify-center px-2">
          <div
            className="flex w-full max-w-[580px] items-stretch overflow-hidden rounded-lg border border-[#D0D5DD]"
            style={{ height: h }}
          >
            <input
              type="search"
              placeholder="Search service"
              className="min-w-0 flex-1 border-0 bg-white px-4 text-[13px] text-[#344054] outline-none placeholder:text-[#98A2B3]"
              style={{ height: h }}
            />
            <button
              type="button"
              aria-label="Search"
              className="flex shrink-0 items-center justify-center bg-[#7C3AED] text-white"
              style={{ width: btn, height: h }}
            >
              <Search className="h-4 w-4" strokeWidth={2.75} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-5">
          <NavAction
            icon={<ShoppingCart className="h-[18px] w-[18px]" strokeWidth={1.6} />}
            label="Order"
            count={12}
          />
          <NavAction
            icon={<Bell className="h-[18px] w-[18px]" strokeWidth={1.6} />}
            label="Notification"
            count={12}
          />
          <NavAction
            icon={<Mail className="h-[18px] w-[18px]" strokeWidth={1.6} />}
            label="Chat"
            count={12}
          />

          <button type="button" aria-label="User profile" className="relative shrink-0">
            <span
              className="flex items-center justify-center rounded-full bg-[#7C3AED] text-[17px] font-bold leading-none text-white"
              style={{ width: layout.avatarSize, height: layout.avatarSize }}
            >
              S
            </span>
            <span className="absolute bottom-0 right-0 h-[11px] w-[11px] rounded-full border-2 border-white bg-[#12B76A]" />
          </button>
        </div>
      </div>
    </header>
  )
}

export { SITE_CONTAINER }
