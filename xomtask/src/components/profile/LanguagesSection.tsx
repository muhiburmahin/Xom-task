import { languages } from '../../data/mockData'
import {
  profileCardClass,
  profileLanguageTagClass,
  profileSectionHeadingClass,
} from './profileSectionStyles'

export default function LanguagesSection() {
  return (
    <section className={profileCardClass}>
      <h2 className={profileSectionHeadingClass}>Languages</h2>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {languages.map((language) => (
          <span key={language} className={profileLanguageTagClass}>
            {language}
          </span>
        ))}
      </div>
    </section>
  )
}
