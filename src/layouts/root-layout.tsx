import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="mx-auto max-w-screen-sm overflow-hidden bg-background">
      <Outlet />
    </div>
  )
}

export { RootLayout }
