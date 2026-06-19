interface XomWorkLogoProps {
  variant?: 'header' | 'footer'
}

export default function XomWorkLogo({ variant = 'header' }: XomWorkLogoProps) {
  const sizeClass =
    variant === 'footer'
      ? 'h-[42px] w-auto max-w-[158px]'
      : 'h-9 w-auto max-w-[130px] sm:h-10 lg:h-[48px] lg:max-w-[175px]'

  return (
    <a
      href="/"
      className="inline-flex shrink-0 items-center no-underline outline-none"
      aria-label="XomWork"
    >
      <img
        src="/images/logo.png"
        alt="XomWork"
        className={`${sizeClass} select-none object-contain object-left`}
        draggable={false}
      />
    </a>
  )
}
