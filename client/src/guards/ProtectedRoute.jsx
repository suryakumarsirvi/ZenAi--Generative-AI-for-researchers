import React from 'react'
import useAuth from '../features/auth/hooks/useAuth'
import {Navigate} from 'react-router'

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth();

    return isAuthenticated ? children : <Navigate to='/login'/>
}

export default ProtectedRoute