import React from 'react'
import { getMeService, loginService, registerService } from '../services/auth.service'
import {useDispatch, useSelector} from "react-redux"
import {setUser} from '../store/auth.slice'

const useAuth = () => {
    const {user, isAuthenticated} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const handleRegister = async(formData) =>{
        const res = await registerService(formData);
        dispatch(setUser(res.data));
    }

    const handleLogin = async(formData) =>{
        const res = await loginService(formData);
        dispatch(setUser(res.data));
    }

    const handleGetMe = async()=>{
        const res = await getMeService();
        dispatch(setUser(res.data));
    }

    return {
        handleRegister,
        handleLogin,
        handleGetMe,
        isAuthenticated,
        user
    }
}

export default useAuth