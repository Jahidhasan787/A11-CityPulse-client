import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import UseAxiosSecure from '../Routes/UseAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const axiosSecure = UseAxiosSecure();
    
    console.log(sessionId);
 
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>console.log(res.data))
        }
    },[sessionId, axiosSecure])
     
    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Payment successful</h2>
            <Link to={"/issues"} className='btn btn-primary'>Done</Link>
        </div>
    );
};

export default PaymentSuccess;