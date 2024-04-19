import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)