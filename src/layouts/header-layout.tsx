import { Outlet } from 'react-router-dom'

import { Header } from '~/components/header'

function HeaderLayout() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col px-4 pb-12 pt-16">
        <Outlet />
      </main>
    </>
  )
}

export { HeaderLayout }
