import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '~/styles/globals.css'
import { RootLayout } from '~/layouts/root-layout'
import { BaseLayout } from '~/layouts/base-layout'
import { HeaderLayout } from '~/layouts/header-layout'
import { Root } from '~/routes/root'
import { DesignSystem } from '~/routes/design-system'
import { Landing } from '~/routes/landing'
import { Login } from '~/routes/login'
import { Greeting } from '~/routes/greeting'
import { Survey } from '~/routes/survey/survey'
import { HealthDiary } from '~/routes/health-diary'
import { DiagnoseResult } from '~/routes/diagnose-result'
import { MyHealthHistory } from '~/routes/my-health-history'
import { MonthlyHealthHistory } from '~/routes/monthly-health-history'
import { MyHealthChange } from '~/routes/my-health-change'
import { Settings } from '~/routes/settings'
import { Error } from '~/routes/error'
import { Hospital } from '~/routes/hospital'
import { OnBoard } from '~/routes/on-board'

const authorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        children: [
          { index: true, element: <Root /> },
          { path: 'greeting', element: <Greeting /> },
          { path: 'survey', element: <Survey /> },
          { path: 'my-health-history', element: <MyHealthHistory /> },
          { path: 'monthly-health-history', element: <MonthlyHealthHistory /> },
          { path: 'my-health-change', element: <MyHealthChange /> },
          { path: 'settings', element: <Settings /> },
          { path: 'on-board', element: <OnBoard /> },
          { path: '*', element: <Error /> },
        ],
      },
      {
        path: '/',
        element: <BaseLayout />,
        children: [
          { path: 'design-system', element: <DesignSystem /> },
          { path: 'result', element: <DiagnoseResult /> },
        ],
      },
      {
        path: '/',
        element: <HeaderLayout />,
        children: [
          { path: 'health-diary', element: <HealthDiary /> },
          { path: 'hospital/:id', element: <Hospital /> },
        ],
      },
    ],
  },
])

const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'landing', element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <Login /> },
    ],
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [{ path: 'design-system', element: <DesignSystem /> }],
  },
])

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider
        router={
          localStorage.getItem('accessToken') ? authorizedRouter : publicRouter
        }
      />
    </StrictMode>,
  )
} else {
  console.error('Root element not found')
}
