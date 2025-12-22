import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import UseAxiosSecure from './Routes/UseAxiosSecure';

const UseRole = () => {

    const {user} = use(AuthContext);
    const axiosSecure = UseAxiosSecure();


    const {isLoading, data: role ="user"} = useQuery({
        queryKey:['user-role', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}/role`);
            return res.data.role;
        }

    })
    return {role, isLoading}
};

export default UseRole;