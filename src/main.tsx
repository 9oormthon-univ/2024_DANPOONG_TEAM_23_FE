import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '~/styles/globals.css'
import { Root } from '~/routes/root'

const router = createBrowserRouter([{ path: '/', element: <Root /> }])

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
