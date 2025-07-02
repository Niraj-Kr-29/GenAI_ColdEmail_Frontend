import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import PrimaryPage from './Pages/PrimaryPage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import ProfileCompletePage from './Pages/ProfileCompletePage.jsx'


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
    },
    {
      path : '/profileCompletePage',
      element : <ProfileCompletePage />
    },
  ]
}])

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <RouterProvider router={router} />
  </Provider>
)
