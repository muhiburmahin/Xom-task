import ProfileCard from './ProfileCard'
import SellerLevelBadge from './SellerLevelBadge'
import SellerDetails from './SellerDetails'
import LanguagesSection from './LanguagesSection'
import MoneyBackGuaranteeSection from './MoneyBackGuaranteeSection'

export default function ProfileSidebar() {
  return (
    <div className="flex w-full flex-col gap-5 overflow-visible">
      <ProfileCard />
      <SellerLevelBadge />
      <SellerDetails />
      <LanguagesSection />
      <MoneyBackGuaranteeSection />
    </div>
  )
}
