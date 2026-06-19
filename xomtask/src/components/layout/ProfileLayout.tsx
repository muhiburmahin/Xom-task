import type { ReactNode } from 'react'
import { layout, SITE_CONTAINER } from '../../constants/layout'

interface ProfileLayoutProps {
  sidebar: ReactNode
  children: ReactNode
  below?: ReactNode
}

export default function ProfileLayout({ sidebar, children, below }: ProfileLayoutProps) {
  const { sidebarWidth, contentGap } = layout

  return (
    <div
      className={`${SITE_CONTAINER} relative z-10 -mt-7 pb-6 sm:-mt-11 sm:pb-8 lg:-mt-[58px] lg:pb-10`}
    >
      <div
        className="grid grid-cols-1 items-start gap-5 md:gap-6 lg:grid-cols-[var(--sidebar)_minmax(0,1fr)]"
        style={
          {
            ['--sidebar' as string]: `${sidebarWidth}px`,
            gap: `clamp(1.25rem, 2.5vw, ${contentGap}px)`,
          } as React.CSSProperties
        }
      >
        <aside className="mx-auto w-full overflow-visible lg:mx-0" style={{ maxWidth: sidebarWidth }}>
          {sidebar}
        </aside>
        <main className="flex min-w-0 flex-col gap-5 md:gap-6">{children}</main>
      </div>

      {below ? <div className="mt-5 md:mt-6">{below}</div> : null}
    </div>
  )
}
