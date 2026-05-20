import {API} from '../../../app/App.api';

export const registerService = async(formData)=>{
    const res = await API.post('/auth/register', formData);
    return res.data;
};

export const loginService = async(formData)=>{
    const res = await API.post('/auth/login', formData);
    return res.data;
};

export const getMeService = async() =>{
    const res = await API.get('/auth/me');
    return res.data;
}