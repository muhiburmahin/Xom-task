interface XomWorkLogoProps {
  variant?: 'header' | 'footer'
}

export default function XomWorkLogo({ variant = 'header' }: XomWorkLogoProps) {
  const sizeClass =
    variant === 'footer'
      ? 'h-[42px] w-auto max-w-[158px]'
      : 'h-8 w-auto max-w-[120px] sm:h-9 lg:h-[42px] lg:max-w-[160px]'

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
