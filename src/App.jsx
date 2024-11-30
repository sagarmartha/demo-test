import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Dashboard from './pages/dashboard'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home/>
  },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
