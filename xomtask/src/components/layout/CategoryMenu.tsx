import { SITE_CONTAINER } from '../../constants/layout'

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
    >
      <div className={`${SITE_CONTAINER} scrollbar-none overflow-x-auto`}>
        <div className="flex h-10 min-w-max items-stretch sm:h-[40px] lg:min-w-0 lg:justify-between">
          {categories.map((category, index) => (
            <div
              key={category}
              className="relative flex shrink-0 items-center px-3 sm:px-4 lg:flex-1 lg:justify-center lg:px-2"
            >
              <span className="whitespace-nowrap text-[12px] font-normal leading-none text-[#344054] sm:text-[13px]">
                {category}
              </span>
              {index < categories.length - 1 && (
                <span
                  className="absolute right-0 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-[#D0D5DD] lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
