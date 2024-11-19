import BottomNavigationFloor from '~/assets/svgs/bottom-navigation-floor.svg?react'
import Home from '~/assets/svgs/home.svg?react'

export interface BottomNavigationBarProps {
  onClick?: () => void
}

function BottomNavigationBar({ onClick }: BottomNavigationBarProps) {
  return (
    <div className="fixed bottom-0 flex h-14 w-full">
      <div className="h-14 w-4/12 flex-1 bg-white" />
      <BottomNavigationFloor />
      <div className="h-14 w-4/12 flex-1 bg-white" />
      <button
        type="button"
        onClick={onClick}
        className="absolute bottom-[-5px] left-1/2 flex h-[88px] w-[88px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[50%] bg-primary-500 shadow-1"
      >
        <Home />
      </button>
    </div>
  )
}

export { BottomNavigationBar }
