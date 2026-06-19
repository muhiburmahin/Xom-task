function VisaLogo() {
  return (
    <span className="font-sans text-[15px] font-bold italic leading-none tracking-tight">
      <span className="text-[#F7B600]">V</span>
      <span className="text-[#1A1F71]">ISA</span>
    </span>
  )
}

function MastercardLogo() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" aria-hidden="true" className="shrink-0">
      <circle cx="14" cy="12" r="9" fill="#EB001B" />
      <circle cx="24" cy="12" r="9" fill="#F79E1B" fillOpacity="0.95" />
    </svg>
  )
}

function BinanceLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
        <path
          d="M9 2l1.3 1.3-2.4 2.4 2.4 2.4-1.3 1.3-2.4-2.4-2.4 2.4-1.3-1.3 2.4-2.4-2.4-2.4 1.3-1.3 2.4 2.4 2.4-2.4z"
          fill="#F3BA2F"
        />
      </svg>
      <span className="font-sans text-[11px] font-bold leading-none tracking-wide text-[#F3BA2F]">
        BINANCE
      </span>
    </div>
  )
}

function WebMoneyLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="font-sans text-[11px] font-bold leading-none text-[#006CB5]">WebMoney</span>
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="shrink-0">
        <circle cx="10" cy="10" r="9" fill="#006CB5" />
        <ellipse cx="10" cy="10" rx="9" ry="3.5" fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.45" />
        <ellipse cx="10" cy="10" rx="3.5" ry="9" fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.45" />
      </svg>
    </div>
  )
}

export default function PaymentIcons() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-6">
        <VisaLogo />
        <MastercardLogo />
      </div>
      <div className="flex items-center gap-5">
        <BinanceLogo />
        <WebMoneyLogo />
      </div>
    </div>
  )
}
