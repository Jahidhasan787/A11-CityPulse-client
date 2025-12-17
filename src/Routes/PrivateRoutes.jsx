
import React, { use } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading}= use(AuthContext)
   
    
    if(loading){
        return <p className='text-center mt-10'><span className="loading loading-spinner text-success"></span></p> 
    }

    if (user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;