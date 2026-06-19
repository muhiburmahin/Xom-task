import { moneyBackGuarantee } from '../../data/mockData'
import MoneyBackSeal from '../ui/MoneyBackSeal'

const guaranteeCardClass =
  'relative w-full overflow-visible rounded-[20px] border-0 bg-white px-5 py-4 shadow-[0_2px_16px_rgba(16,24,40,0.06)]'

function MoneyBackTooltip({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(16,24,40,0.12)] ${className}`}
    >
      <h4 className="text-[14px] font-semibold leading-tight text-[#344054]">
        {moneyBackGuarantee.infoTitle}
      </h4>
      <p className="mt-1 text-[12px] leading-snug text-[#667085]">{moneyBackGuarantee.infoText}</p>
    </div>
  )
}

export default function MoneyBackGuaranteeSection() {
  return (
    <section className={guaranteeCardClass}>
      <div className="flex items-center gap-3">
        <MoneyBackSeal size={54} />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[14px] font-semibold leading-tight text-[#344054]">
              {moneyBackGuarantee.title}
            </h3>
            <span
              aria-hidden="true"
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E4E7EC] text-[10px] font-semibold leading-none text-[#667085]"
            >
              ?
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-snug text-[#667085] lg:max-w-[155px]">
            {moneyBackGuarantee.subtitle}
          </p>
        </div>
      </div>

      {/* Mobile / Tablet — tooltip stacked below */}
      <div className="mt-4 lg:hidden">
        <MoneyBackTooltip className="w-full shadow-[0_2px_12px_rgba(16,24,40,0.08)]" />
      </div>

      {/* Desktop — tooltip overlaps to the right */}
      <div className="absolute right-[-200px] top-3 z-10 hidden lg:block">
        <MoneyBackTooltip className="w-[285px]" />
      </div>
    </section>
  )
}
