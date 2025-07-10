import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
          </BrowserRouter>
      </UserProvider>
    </ThemeProvider>,
)
