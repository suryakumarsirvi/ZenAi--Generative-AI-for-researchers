import React from 'react'
import useAuth from '../features/auth/hooks/useAuth'

const PublicRoute = ({children}) => {
  const {isAuthenticated} = useAuth();
  return !isAuthenticated && children
}

export default PublicRoute