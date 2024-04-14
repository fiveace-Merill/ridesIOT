import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './components/Error.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Users from './pages/Users.jsx'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "Login/:LoginID",
    element: <Login />
  },
  {
    path: "SignUP/:SignUPId",
    element: <SignUp />
  },
  {
    path: "Users/:UsersId",
    element: <Users />
  },
  {
    path: "Admin/:AdminId",
    element: <Admin />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
