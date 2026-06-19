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
      aria-label={label}
      className="flex items-center gap-2"
    >
      <span className="relative inline-flex h-5 w-5 items-center justify-center text-[#667085]">
        {icon}
        <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#7C3AED] px-1 text-[9px] font-bold leading-none text-white">
          {count}
        </span>
      </span>
      <span className="hidden text-[13px] font-normal leading-none text-[#344054] xl:inline">
        {label}
      </span>
    </button>
  )
}

function SearchBar({ className = '' }: { className?: string }) {
  const h = layout.searchHeight

  return (
    <div className={`flex w-full items-stretch overflow-hidden rounded-lg border border-[#D0D5DD] ${className}`}>
      <input
        type="search"
        placeholder="Search service"
        className="min-w-0 flex-1 border-0 bg-white px-3 text-[13px] text-[#344054] outline-none placeholder:text-[#98A2B3] sm:px-4"
        style={{ height: h }}
      />
      <button
        type="button"
        aria-label="Search"
        className="flex shrink-0 items-center justify-center bg-[#7C3AED] text-white"
        style={{ width: layout.searchBtnSize, height: h }}
      >
        <Search className="h-4 w-4" strokeWidth={2.75} />
      </button>
    </div>
  )
}

export default function Navbar() {
  return (
    <header className="border-0 bg-white">
      <div className={`${SITE_CONTAINER} py-3 lg:py-0`}>
        <div
          className="hidden items-center gap-x-5 lg:grid"
          style={{
            height: layout.headerHeight,
            gridTemplateColumns: 'auto 1fr auto',
          }}
        >
          <XomWorkLogo />

          <div className="flex justify-center px-2">
            <SearchBar className="max-w-[580px]" />
          </div>

          <div className="flex items-center gap-3 xl:gap-5">
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

        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <XomWorkLogo />
            <div className="flex items-center gap-2 sm:gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C3AED] text-base font-bold leading-none text-white"
                >
                  S
                </span>
                <span className="absolute bottom-0 right-0 h-[10px] w-[10px] rounded-full border-2 border-white bg-[#12B76A]" />
              </button>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

export { SITE_CONTAINER }
