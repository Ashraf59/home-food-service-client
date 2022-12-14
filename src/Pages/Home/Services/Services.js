import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://home-food-server.vercel.app/allservices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-5xl font-semibold text-rose-500 text-center mt-10">Our Services</h2>
                <p className='text-gray-600 mx-auto text-center my-8 w-1/3'>Home food Healthy food, so we maintain strongly hygenic kitchen environment and all food ingredients. </p>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-20 '>
                {
                    services.sort((a, b) => b.time - a.time).map(service => <ServiceCard
                    
                        key = {service._id}
                        service = {service}
                    
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;