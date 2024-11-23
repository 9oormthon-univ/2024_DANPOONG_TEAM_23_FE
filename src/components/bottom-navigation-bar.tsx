import { useNavigate } from 'react-router-dom'
import BottomNavigationFloor from '~/assets/svgs/bottom-navigation-floor.svg?react'
import Home from '~/assets/svgs/home.svg?react'

function BottomNavigationBar() {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 flex h-14 w-full max-w-screen-sm">
      <div className="h-14 w-4/12 flex-1 bg-white" />
      <BottomNavigationFloor />
      <div className="h-14 w-4/12 flex-1 bg-white" />
      <button
        type="button"
        onClick={() => {
          navigate('/')
        }}
        className="absolute -bottom-1 left-1/2 flex size-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-primary-500 shadow-1"
      >
        <Home className="size-12 text-white" />
      </button>
    </div>
  )
}

export { BottomNavigationBar }
