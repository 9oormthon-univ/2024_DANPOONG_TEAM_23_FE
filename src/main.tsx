import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '~/styles/globals.css'
import { Root } from '~/routes/root.tsx'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Root />
    </StrictMode>,
  )
} else {
  console.error('Root element not found')
}
