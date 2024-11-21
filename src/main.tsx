import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '~/styles/globals.css'
import { RootLayout } from '~/layouts/root-layout'
import { Root } from '~/routes/root'
import { DesignSystem } from '~/routes/design-system'
import { BaseLayout } from './layouts/base-layout'
import { Landing } from './routes/landing'
import { Login } from './routes/login'
import { Greeting } from './routes/greeting'
import { Survey } from './routes/survey/survey'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        children: [
          { index: true, element: <Root /> },
          { path: 'landing', element: <Landing /> },
          { path: 'login', element: <Login /> },
          { path: 'greeting', element: <Greeting /> },
          { path: 'survey', element: <Survey /> },
        ],
      },
      {
        path: '/',
        element: <BaseLayout />,
        children: [{ path: 'design-system', element: <DesignSystem /> }],
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
