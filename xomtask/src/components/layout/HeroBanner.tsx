import { layout } from '../../constants/layout'

export default function HeroBanner() {
  return (
    <section
      aria-label="Hero banner"
      className="w-full overflow-hidden bg-gradient-to-r from-[#87CEEB] to-[#E0F2FE]"
      style={{ height: layout.heroHeight }}
    >
      <img
        src="/images/hero-banner.jpg"
        alt=""
        className="block h-full w-full object-cover object-center"
      />
    </section>
  )
}
