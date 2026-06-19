import Navbar from './components/layout/Navbar'
import CategoryMenu from './components/layout/CategoryMenu'
import HeroBanner from './components/layout/HeroBanner'
import ProfileLayout from './components/layout/ProfileLayout'
import ProfileSidebar from './components/profile/ProfileSidebar'
import AboutSection from './components/about/AboutSection'
import PortfolioSection from './components/portfolio/PortfolioSection'
import XomSection from './components/gigs/XomSection'
import ReviewsSection from './components/reviews/ReviewsSection'

function App() {
  return (
    <div className="min-h-screen bg-page">
      <header className="bg-white">
        <Navbar />
        <CategoryMenu />
      </header>

      <div className="relative">
        <HeroBanner />
        <ProfileLayout
          sidebar={<ProfileSidebar />}
          below={
            <div className="flex flex-col gap-5 md:gap-6">
              <XomSection />
              <ReviewsSection />
            </div>
          }
        >
          <AboutSection />
          <PortfolioSection />
        </ProfileLayout>
      </div>
    </div>
  )
}

export default App
