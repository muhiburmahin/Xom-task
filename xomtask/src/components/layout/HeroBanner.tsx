export default function HeroBanner() {
  return (
    <section
      aria-label="Hero banner"
      className="h-[130px] w-full overflow-hidden bg-gradient-to-r from-[#87CEEB] to-[#E0F2FE] sm:h-[170px] md:h-[190px] lg:h-[210px]"
    >
      <img
        src="/images/hero-banner.jpg"
        alt=""
        className="block h-full w-full object-cover object-center"
      />
    </section>
  )
}
