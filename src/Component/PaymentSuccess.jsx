import React from 'react';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl'>Payment successful</h2>
            <Link to={"/dashboard"} className='btn btn-primary'>Done</Link>
        </div>
    );
};

export default PaymentSuccess;