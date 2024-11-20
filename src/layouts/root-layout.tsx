import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="mx-auto min-h-dvh max-w-screen-sm overflow-hidden bg-background">
      <Outlet />
    </div>
  )
}

export { RootLayout }
