import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '~/styles/globals.css'
import { RootLayout } from '~/layouts/root-layout'
import { Root } from '~/routes/root'
import { DesignSystem } from '~/routes/design-system'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Root /> },
      { path: 'design-system', element: <DesignSystem /> },
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
