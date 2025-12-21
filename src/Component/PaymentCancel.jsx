import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl'>payment Cancelled</h1>
            <Link to="/dashboard/my-issues" className='btn btn-primary'>Try Again</Link>
        </div>
    );
};

export default PaymentCancel;