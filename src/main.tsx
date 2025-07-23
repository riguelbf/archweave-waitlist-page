import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './components/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider >
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
