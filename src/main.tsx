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
import { OnboardingOne } from '~/routes/onboarding-1'
import { OnboardingTwo } from '~/routes/onboarding-2'
import { OnboardingThree } from '~/routes/onboarding-3'
import { MyHealthHistory } from '~/routes/my-health-history'
import { MonthlyHealthHistory } from '~/routes/monthly-health-history'
import { MyHealthChange } from '~/routes/my-health-change'
import { Settings } from '~/routes/settings'

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
          { path: 'onboarding-1', element: <OnboardingOne /> },
          { path: 'onboarding-2', element: <OnboardingTwo /> },
          { path: 'onboarding-3', element: <OnboardingThree /> },
          { path: 'greeting', element: <Greeting /> },
          { path: 'survey', element: <Survey /> },
          { path: 'my-health-history', element: <MyHealthHistory /> },
          { path: 'monthly-health-history', element: <MonthlyHealthHistory /> },
          { path: 'my-health-change', element: <MyHealthChange /> },
          { path: 'settings', element: <Settings /> },
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
