export default function MoneyBackSeal({ size = 60 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
    >
      <circle cx="30" cy="30" r="29" fill="#D4A017" />
      <circle cx="30" cy="30" r="26" fill="#F5C542" />
      <circle cx="30" cy="30" r="22" fill="#EAB308" />
      <circle cx="30" cy="30" r="18" fill="#7C3AED" />
      <circle cx="30" cy="30" r="16" fill="#6D28D9" />
      <text x="30" y="18" textAnchor="middle" fill="#fff" fontSize="4.2" fontWeight="600">
        MONEY BACK
      </text>
      <text x="30" y="31" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="700">
        100%
      </text>
      <text x="30" y="44" textAnchor="middle" fill="#fff" fontSize="4" fontWeight="600">
        GUARANTEE
      </text>
    </svg>
  )
}
