import React from 'react';

const FeaturesCard = ({ icon, title, desc }) => {
    return (
        <div className='rounded-2xl p-8 shadow-md bg-gray-100 text-center'>
            <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full text-3xl'>
                {icon}
            </div>
            <h3 className='text-xl font-semibold mb-3'>{title}</h3>
            <p className='text-gray-500 text-sm'>{desc}</p>
        </div>
    );
};

export default FeaturesCard;