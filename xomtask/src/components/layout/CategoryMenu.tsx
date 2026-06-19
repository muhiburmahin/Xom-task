import { layout, SITE_CONTAINER } from '../../constants/layout'

const categories = [
  'Design',
  'Development IT',
  'Audio & Video',
  'SEO',
  'Digital Marketing',
  'Writing & Translations',
]

export default function CategoryMenu() {
  return (
    <nav
      className="border-y border-[#EAECF0] bg-white"
      aria-label="Categories"
      style={{ height: layout.menuHeight }}
    >
      <div className={`${SITE_CONTAINER} grid h-full grid-cols-6 items-center`}>
        {categories.map((category, index) => (
          <div key={category} className="relative flex h-full items-center justify-center">
            <a
              href="#"
              className="whitespace-nowrap text-[13px] font-normal leading-none text-[#344054] transition-colors hover:text-[#7C3AED]"
            >
              {category}
            </a>
            {index < categories.length - 1 && (
              <span
                className="absolute -right-px top-1/2 h-4 w-px -translate-y-1/2 bg-[#D0D5DD]"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
