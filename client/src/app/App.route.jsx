import { createBrowserRouter, Navigate } from 'react-router';
import Home from '../features/others/Home';
import Login from '../features/auth/components/Login';
import Register from '../features/auth/components/Register';
import Authlayout from '../layout/Authlayout';
import PublicRoute from '../guards/PublicRoute';
import ProtectedRoute from '../guards/ProtectedRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element:
            <PublicRoute>
                <Authlayout mode="login">
                    <Login />
                </Authlayout>
            </PublicRoute>
    },
    {
        path: "/register",
        element:
            <PublicRoute>
                <Authlayout mode="register">
                    <Register />
                </Authlayout>
            </PublicRoute>
    },
    {
        path: '/home',
        element:
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
    }
]);

export default Router;