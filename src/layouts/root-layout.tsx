import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-screen-sm flex-col overflow-hidden bg-background">
      <Outlet />
    </div>
  )
}

export { RootLayout }
