import { layout } from '../../constants/layout'

export default function XomWorkLogo() {
  return (
    <a
      href="/"
      className="inline-flex shrink-0 items-center no-underline outline-none"
      aria-label="XomWork"
    >
      <img
        src="/images/logo.png"
        alt="XomWork"
        style={{ height: layout.logoHeight }}
        className="w-auto max-w-[160px] select-none object-contain object-left"
        draggable={false}
      />
    </a>
  )
}
