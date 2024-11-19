import GoBack from '~/assets/svgs/go-back.svg?react'
import Setting from '~/assets/svgs/setting.svg?react'

export interface HeaderProps {
  title?: string
  showGoBackButton?: boolean
  showSettingButton?: boolean
  onGoBackClick?: () => void
  onSettingClick?: () => void
}

function Header({
  title,
  showGoBackButton = false,
  showSettingButton = false,
  onGoBackClick,
  onSettingClick,
}: HeaderProps) {
  return (
    <header className="border-gray50 fixed top-0 flex h-16 w-full items-center justify-between border-b px-2.5 py-6">
      <div className="w-10">
        {showGoBackButton && (
          <button
            type="button"
            onClick={onGoBackClick}
            className="flex h-10 w-10 items-center justify-center"
          >
            <GoBack />
          </button>
        )}
      </div>

      <div className="min-w-60 text-center text-xl font-bold">{title}</div>

      <div className="w-10">
        {showSettingButton && (
          <button
            type="button"
            onClick={onSettingClick}
            className="flex h-10 w-10 items-center justify-center"
          >
            <Setting />
          </button>
        )}
      </div>
    </header>
  )
}

export { Header }
