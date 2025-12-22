import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: "https://a11-city-pulse-server.vercel.app",
});

const UseAxiosSecure = () => {
    const {user, logOut} = use(AuthContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
      const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization =`bearer ${user?.accessToken}`
            return config;
        })

        const resInterceptor =axiosSecure.interceptors.response.use((response)=>{return response},(err)=>{
            console.log(err);

            const statusCode = err.status;
            if(statusCode=== 401 || statusCode === 403){
                logOut()
                .then(()=>{
                    navigate('/login')
                })
            }

            return Promise.reject(err)
        })

        return ()=>{
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }

    },[user,logOut,navigate])

    return axiosSecure;
};

export default UseAxiosSecure;