import React from 'react';
import errorImage from '../assets/Error2.png'
import { Link } from 'react-router';

const Error2 = () => {
    return (
         <div className='flex flex-col items-center justify-center py-20'>
            
            <img src={errorImage} className='' alt="" />
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Oops, details not found!</h1>
                <p className='py-2 text-gray-700'>The page you are looking for is not available.</p>
                <Link to="/"><button className='btn bg-gradient-to-r from-[#35a926] to-[#62f264] text-white'>Go Back!</button></Link>
            </div>   
        </div>  
    );
};

export default Error2;