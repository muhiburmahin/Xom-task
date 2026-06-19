import { reviews, seller } from '../../data/mockData'
import ReviewCard from './ReviewCard'
import ReviewSummary, { HonestReviewsTooltip } from './ReviewSummary'

export default function ReviewsSection() {
  return (
    <section className="relative overflow-visible rounded-2xl border-0 bg-white p-5 shadow-[0_4px_24px_rgba(16,24,40,0.07)] sm:p-6">
      <ReviewSummary />

      <div className="relative mt-4 space-y-4 sm:mt-5 sm:space-y-5">
        {reviews.map((review, index) => (
          <div key={review.id} className="relative">
            {index === 0 ? (
              <div className="absolute left-20 top-0 z-20 sm:left-28 md:left-36">
                <HonestReviewsTooltip />
              </div>
            ) : null}
            <ReviewCard review={review} sellerName={seller.name} sellerAvatar={seller.avatar} />
          </div>
        ))}
      </div>
    </section>
  )
}
