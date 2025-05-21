import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import PrimaryPage from './Pages/PrimaryPage.jsx'

const router = createBrowserRouter([{
  path : '/',
  element : <App />,
  children : [
    {
      path : '/',
      element : <Home />
    },
    {
      path : '/primary',
      element : <PrimaryPage />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
