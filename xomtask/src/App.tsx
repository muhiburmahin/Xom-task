import Navbar from './components/layout/Navbar'
import CategoryMenu from './components/layout/CategoryMenu'
import HeroBanner from './components/layout/HeroBanner'
import ProfileLayout from './components/layout/ProfileLayout'
import ProfileSidebar from './components/profile/ProfileSidebar'
import AboutSection from './components/about/AboutSection'
import PortfolioSection from './components/portfolio/PortfolioSection'
import XomSection from './components/gigs/XomSection'

function App() {
  return (
    <div className="min-h-screen bg-page">
      <header className="bg-white">
        <Navbar />
        <CategoryMenu />
      </header>

      <div className="relative">
        <HeroBanner />
        <ProfileLayout sidebar={<ProfileSidebar />} below={<XomSection />}>
          <AboutSection />
          <PortfolioSection />
        </ProfileLayout>
      </div>
    </div>
  )
}

export default App
