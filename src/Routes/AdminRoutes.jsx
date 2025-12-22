import React, { use } from 'react';
import { AuthContext } from '../AuthProvider';
import UseRole from '../UseRole';
import Home from '../Pages/Home';

const AdminRoutes = ({children}) => {
    const {loading} = use(AuthContext);
    const {role} = UseRole();

    if(loading){
        return <p className='text-center mt-10'><span className="loading loading-spinner text-success"></span></p> 
    }

    if(role !== 'admin'){
        return <Home></Home>
    }
    return children;
};

export default AdminRoutes;