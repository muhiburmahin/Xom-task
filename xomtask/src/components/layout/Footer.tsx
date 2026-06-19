import { SITE_CONTAINER } from '../../constants/layout'
import PaymentIcons from '../ui/PaymentIcons'
import XomWorkLogo from '../ui/XomWorkLogo'

const footerColumns = [
  {
    title: 'Categories',
    links: [
      'Design',
      'Development & IT',
      'Writing & Translations',
      'SEO & Web Traffic',
      'Digital Marketing & SMM',
      'Audio & Video',
      'AI Services',
    ],
  },
  {
    title: 'About Us',
    links: ['FAQ', 'Contact Support', 'Terms & Conditions', 'Privacy Policy', 'Commission & Fees'],
  },
  {
    title: 'For Sellers',
    links: ['Create Xom', 'Withdrawal', 'Seller Guidelines', 'Reviews & Ratings'],
  },
  {
    title: 'For Buyers',
    links: ['Post a Project', 'Browse Xoms', 'How It Works', 'Buyer Protection'],
  },
]

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="min-w-0">
      <h3 className="text-[14px] font-semibold leading-none text-[#333333]">{title}</h3>
      <ul className="mt-4 space-y-[10px]">
        {links.map((link) => (
          <li key={link}>
            <span className="text-[13px] font-normal leading-none text-[#777777]">{link}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BrandBlock() {
  return (
    <div className="min-w-0 text-left">
      <XomWorkLogo variant="footer" />
      <div className="mt-4">
        <PaymentIcons />
      </div>
      <p className="mt-4 max-w-[280px] text-[12px] font-normal leading-[1.7] text-[#757575]">
        Hire skilled freelancers, bring your projects to life, and grow your business with
        confidence—all in one trusted platform.
      </p>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#EAECF0] bg-white pt-10 pb-6 md:pt-12 md:pb-7">
      <div className={SITE_CONTAINER}>
        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-8 md:grid-cols-5 md:gap-x-8 lg:gap-x-10">
          <div className="col-span-2 md:col-span-1">
            <BrandBlock />
          </div>
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#EAECF0] pt-5 sm:flex-row sm:items-center sm:justify-between md:mt-10">
          <p className="text-[12px] font-normal leading-none text-[#98A2B3]">
            Your trusted platform to hire and grow with top freelancers.
          </p>
          <p className="shrink-0 text-[12px] font-normal leading-none text-[#98A2B3] sm:text-right">
            © 2026 XomWork. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
