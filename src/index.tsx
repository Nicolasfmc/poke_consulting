import './index.css'
import React from 'react'
import reportWebVitals from './reportWebVitals'
import 'react-toastify/dist/ReactToastify.css'

// Configs
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { ToastContainer } from 'react-toastify'

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Admin from './pages/Admin'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

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
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <Admin />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
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
      <ToastContainer
        position={window.innerWidth <= 720 ? 'top-right' : 'bottom-right'}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={5}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

serviceWorkerRegistration.register()

reportWebVitals()
