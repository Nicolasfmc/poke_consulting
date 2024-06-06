import './index.css'
import React from 'react'
import reportWebVitals from './reportWebVitals'

// Configs
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Admin from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

reportWebVitals()
