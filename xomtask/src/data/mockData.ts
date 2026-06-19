import type { GigCard, PortfolioItem, Review, SellerDetailItem, SellerStats, SkillBadge } from '../types'

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

export const sellerBadges = [
  { id: '1', emoji: '🏆', bg: '#FEF3C7' },
  { id: '2', emoji: '🎖️', bg: '#F4EBFF' },
  { id: '3', emoji: '🎓', bg: '#ECFDF3' },
  { id: '4', emoji: '⭐', bg: '#FEF9C3' },
]

export const sellerDetails: SellerDetailItem[] = [
  { id: '1', icon: 'flag', label: 'United States', flag: '🇺🇸' },
  { id: '2', icon: 'clock', label: 'Response in 1 hour' },
  { id: '3', icon: 'shield', label: 'Member since 2024' },
  { id: '4', icon: 'cart', label: 'Order successfully Submitted 96%' },
  { id: '5', icon: 'package', label: 'Order delivered on time 98%' },
]

export const languages = ['English', 'Francie']

export const moneyBackGuarantee = {
  title: '100% Money-Back Guarantee',
  subtitle: "If you're not satisfied with the result, we'll refund your money",
  infoTitle: '100% Money-Back',
  infoText:
    'If the seller is unable to complete the order, the XomWork team will refund the payment.',
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

export const gigItems: GigCard[] = [
  {
    id: '1',
    title: 'Landing page UI UX Design Mobile app UI UX Design website Figma',
    image: PORTFOLIO_IMAGE,
    rating: 4.9,
    reviewCount: 1234,
    price: 100,
    sellerName: seller.name,
    sellerAvatar: seller.avatar,
    badge: 'ZomWork Choice',
  },
  {
    id: '2',
    title: 'Landing page UI UX Design Mobile app UI UX Design website Figma',
    image: PORTFOLIO_IMAGE,
    rating: 4.9,
    reviewCount: 1234,
    price: 50,
    sellerName: seller.name,
    sellerAvatar: seller.avatar,
  },
  {
    id: '3',
    title: 'Landing page UI UX Design Mobile app UI UX Design website Figma',
    image: PORTFOLIO_IMAGE,
    rating: 4.9,
    reviewCount: 1234,
    price: 250,
    sellerName: seller.name,
    sellerAvatar: seller.avatar,
    badge: 'ZomWork Choice',
  },
  {
    id: '4',
    title: 'Landing page UI UX Design Mobile app UI UX Design website Figma',
    image: PORTFOLIO_IMAGE,
    rating: 4.9,
    reviewCount: 1234,
    price: 80,
    sellerName: seller.name,
    sellerAvatar: seller.avatar,
    badge: 'ZomWork Choice',
  },
]

export const reviewSummary = {
  avgRating: 4.9,
  totalCount: 1234,
  positiveCount: 1221,
  negativeCount: 13,
}

export const honestReviewsInfo = {
  title: 'Honest Reviews',
  points: [
    'Only buyers who have completed payment for an order on XomWork can leave a review.',
    "The numbers on buyers' avatars represent their levels. A buyer's level is a nearly 100% guarantee that their review is genuine.",
    'Sellers on XomWork do not rate buyers, allowing buyers to leave honest feedback freely.',
  ],
}

export const reviews: Review[] = [
  {
    id: '1',
    userName: 'RJ_Shuvo',
    userAvatar: seller.avatar,
    country: 'United States',
    rating: 5,
    date: '2 Months ago',
    comment:
      "I'm very happy with my purchase on XomWork! The seller delivered exactly what I needed, on time and with great quality. I highly recommend working with them and will definitely place more orders in the future.",
    reply:
      'Thank you so much for the kind words. It was a pleasure working with you, and I truly appreciate your trust.',
  },
  {
    id: '2',
    userName: 'RJ_Shuvo',
    userAvatar: seller.avatar,
    country: 'United States',
    rating: 4,
    date: '2 Months ago',
    comment:
      "I'm very happy with my purchase on XomWork! The seller delivered exactly what I needed, on time and with great quality. I highly recommend working with them and will definitely place more orders in the future.",
  },
]
