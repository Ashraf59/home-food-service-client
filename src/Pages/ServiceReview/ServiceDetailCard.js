import React from 'react';

const ServiceDetailCard = ({service}) => {
    const { _id, serviceName, price, message, image } = service;
    return (
        <div>
            <div className="shadow-lg shadow-slate-400 rounded-md p-2 max-w-sm mx-auto group mt-10">
                <img role="presentation" alt='' className="p-2 object-cover w-full rounded-md h-44 " src={image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-3xl font-semibold">{serviceName}</h3>
                    <span className="text-2xl dark:text-gray-400">Price: ${price}</span>
                    <p className='text-gray-600'>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailCard;