import { aboutText, skills } from '../../data/mockData'

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#F4EBFF] px-3 py-1.5 text-[12px] font-medium leading-none text-[#7C3AED]">
      {label}
    </span>
  )
}

export default function AboutSection() {
  return (
    <section className="w-full rounded-b-2xl rounded-t-[24px] border-0 bg-white p-5 shadow-[0_4px_24px_rgba(16,24,40,0.07)] sm:p-6 lg:p-7">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#101828]">
        About Me
      </h2>

      <p className="mt-3 text-[13px] leading-[1.65] text-[#667085]">{aboutText}</p>

      <h3 className="mt-6 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#101828]">
        Skills
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill.id} label={skill.name} />
        ))}
      </div>
    </section>
  )
}
