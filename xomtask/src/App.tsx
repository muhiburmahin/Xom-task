import Navbar from './components/layout/Navbar'
import CategoryMenu from './components/layout/CategoryMenu'
import HeroBanner from './components/layout/HeroBanner'

function App() {
  return (
    <div className="min-h-screen bg-page">
      <header className="bg-white">
        <Navbar />
        <CategoryMenu />
      </header>
      <HeroBanner />
    </div>
  )
}

export default App
