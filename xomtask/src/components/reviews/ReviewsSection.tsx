import { reviews, seller } from '../../data/mockData'
import ReviewCard from './ReviewCard'
import ReviewSummary, { HonestReviewsTooltip } from './ReviewSummary'

export default function ReviewsSection() {
  return (
    <section className="relative overflow-x-hidden rounded-2xl border-0 bg-white p-4 shadow-[0_4px_24px_rgba(16,24,40,0.07)] sm:overflow-visible sm:p-6">
      <ReviewSummary />

      <div className="relative mt-4 sm:mt-5">
        <div className="mb-4 sm:hidden">
          <HonestReviewsTooltip />
        </div>

        <div className="space-y-4 sm:space-y-5">
          {reviews.map((review, index) => (
            <div key={review.id} className="relative">
              {index === 0 ? (
                <div className="absolute left-20 top-0 z-20 hidden sm:block sm:left-28 md:left-36">
                  <HonestReviewsTooltip />
                </div>
              ) : null}
              <ReviewCard review={review} sellerName={seller.name} sellerAvatar={seller.avatar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
