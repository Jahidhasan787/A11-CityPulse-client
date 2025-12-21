import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import UseAxiosSecure from '../Routes/UseAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get("session_id");
    const axiosSecure = UseAxiosSecure();
    
 
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
                setPaymentInfo({
                    transactionId :res.data.transactionId,
                    trackingId: res.data.trackingId
                })
            })
        }
    },[sessionId, axiosSecure])
     
    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Payment successful</h2>
            <p>transactionId: { paymentInfo.transactionId}</p>
            <p>trackingId: { paymentInfo.trackingId}</p>
            <Link to={"/dashboard"} className='btn btn-primary'>Done</Link>
        </div>
    );
};

export default PaymentSuccess;