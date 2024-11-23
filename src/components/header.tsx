import { useNavigate } from 'react-router-dom'

import ChevronLeft from '~/assets/svgs/chevron-left.svg?react'
import Setting from '~/assets/svgs/setting.svg?react'

export interface HeaderProps {
  title?: string
  showGoBackButton?: boolean
  showSettingButton?: boolean
}

function Header({
  title,
  showGoBackButton = false,
  showSettingButton = false,
}: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full max-w-screen-sm items-center justify-between border-b border-gray-50 bg-white px-2.5 py-6">
      <div className="w-10">
        {showGoBackButton && (
          <button
            type="button"
            onClick={() => {
              navigate(-1)
            }}
            className="flex h-10 w-10 items-center justify-center"
          >
            <ChevronLeft />
          </button>
        )}
      </div>

      <div className="min-w-60 text-center text-xl font-bold">{title}</div>

      <div className="w-10">
        {showSettingButton && (
          <button
            type="button"
            onClick={() => {
              navigate('/settings')
            }}
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
