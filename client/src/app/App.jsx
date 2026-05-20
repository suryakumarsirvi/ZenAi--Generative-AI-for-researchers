import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import Router from '../app/App.route'
import useAuth from '../features/auth/hooks/useAuth.js'

const App = () => {
  const { handleGetMe } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, [])

  return (
    <div className='p-4 h-screen w-full'>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App