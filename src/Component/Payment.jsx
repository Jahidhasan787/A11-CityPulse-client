import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../Routes/UseAxiosSecure';

const Payment = () => {
    const {id} = useParams();
    const axiosSecure = UseAxiosSecure()
    const {isLoading, data : issue } = useQuery({
        queryKey: ["issue" , id],
        queryFn: async() => {
            const res = await axiosSecure.get(`/issues/${id}`)
            return res.data;
        }
    });

    const handlePayment = async() => {
       const paymentInfo = {
          issueId :issue._id,
          senderEmail:issue.email,
          issueName: issue.title
       }

       const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
       console.log(res.data)
       window.location.href = res.data.url;
    }

    if(isLoading){
        <p className='text-center mt-10'><span className="loading loading-spinner text-success"></span></p> 
    }

    return (
        <div className="card w-96  bg-base-100 mx-auto card-sm shadow-sm m-10">
        <div className="card-body">
          <h2 className="text-2xl text-center pb-5 ">Please pay $100 for boost</h2>
          <button onClick={handlePayment} className='btn btn-primary'>Pay</button>
        </div>
      </div>
    );
};

export default Payment;