export interface SkillBadge {
  id: string
  name: string
}

export interface PortfolioItem {
  id: string
  title: string
  subtitle: string
  image: string
}

export interface GigCard {
  id: string
  title: string
  image: string
  rating: number
  reviewCount: number
  price: number
  sellerName: string
  sellerAvatar: string
  badge?: string
}

export interface Review {
  id: string
  userName: string
  userAvatar: string
  country: string
  rating: number
  date: string
  comment: string
  reply?: string
}

export interface SellerStats {
  ordersCompleted: number
  runningOrders: number
  avgRating: number
  reviewCount: number
}
