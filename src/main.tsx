import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '~/styles/globals.css'
import { RootLayout } from '~/layouts/root-layout'
import { BaseLayout } from '~/layouts/base-layout'
import { HeaderLayout } from '~/layouts/header-layout'
import { Root } from '~/routes/root'
import { DesignSystem } from '~/routes/design-system'
import { HealthDiary } from '~/routes/health-diary'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', children: [{ index: true, element: <Root /> }] },
      {
        path: '/',
        element: <BaseLayout />,
        children: [{ path: 'design-system', element: <DesignSystem /> }],
      },
      {
        path: '/',
        element: <HeaderLayout />,
        children: [{ path: 'health-diary', element: <HealthDiary /> }],
      },
    ],
  },
])

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
} else {
  console.error('Root element not found')
}
