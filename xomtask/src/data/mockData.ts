import type { PortfolioItem, SellerStats, SkillBadge } from '../types'

export const PORTFOLIO_IMAGE = '/images/image.png'

export const seller = {
  name: 'RJ Shuvo',
  title: 'UX/UI Designer',
  avatar: '/images/unnamed.jpg',
  isVerified: true,
  isOnline: true,
  country: 'United States',
  countryFlag: '🇺🇸',
  sellerLevel: 'New seller',
}

export const sellerStats: SellerStats = {
  ordersCompleted: 1234,
  runningOrders: 4,
  avgRating: 4.9,
  reviewCount: 1,
}

export const aboutText =
  "Hello! I'm a passionate UI/UX Designer and digital product strategist with strong hands-on experience creating user-friendly websites, web applications, and SaaS platforms. I specialize in designing intuitive interfaces for web and mobile applications, ensuring seamless user journeys and engaging interactions. My goal is to deliver clean, modern designs that not only look great but also solve real user problems and drive meaningful business results."

export const skills: SkillBadge[] = [
  { id: '1', name: 'UI UX Design' },
  { id: '2', name: 'App Design' },
  { id: '3', name: 'Logo design' },
  { id: '4', name: 'Web design' },
  { id: '5', name: 'Figma' },
  { id: '6', name: 'UI UX Design' },
  { id: '7', name: 'App Design' },
  { id: '8', name: 'Logo design' },
  { id: '9', name: 'Web design' },
  { id: '10', name: 'Figma' },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: '32',
    title: 'Order number 32',
    subtitle: 'Food delivery Landing page UI/UX Design App design landing page',
    image: PORTFOLIO_IMAGE,
  },
  {
    id: '342',
    title: 'Order number 342',
    subtitle: 'Food delivery Landing page UI/UX Design App design landing page',
    image: PORTFOLIO_IMAGE,
  },
  {
    id: '562',
    title: 'Order number 562',
    subtitle: 'Food delivery Landing page UI/UX Design App design landing page',
    image: PORTFOLIO_IMAGE,
  },
]
