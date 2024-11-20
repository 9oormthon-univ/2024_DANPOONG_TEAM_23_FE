import { Outlet } from 'react-router-dom'
import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Header } from '~/components/header'

function BaseLayout() {
  return (
    <>
      <Header />
      <main className="px-4 pb-36 pt-16">
        <Outlet />
      </main>
      <BottomNavigationBar />
    </>
  )
}

export { BaseLayout }
