import { Outlet } from 'react-router-dom'
import { BottomNavigationBar } from '~/components/bottom-navigation-bar'
import { Header } from '~/components/header'

function RootLayout() {
  return (
    <div className="mx-auto max-w-screen-sm overflow-hidden bg-background">
      <Header />
      <main className="px-4 pb-36 pt-16">
        <Outlet />
      </main>
      <BottomNavigationBar />
    </div>
  )
}

export { RootLayout }
