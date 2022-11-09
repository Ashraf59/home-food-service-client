import React, { useEffect, useState } from 'react';
import ShowAllServices from './ShowAllServices';

const AllServices = () => {
    const [allservices, setAllservices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllservices(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-5xl font-semibold text-rose-500 text-center mt-20">Our Services</h2>
                <p className='text-gray mx-auto text-center my-8 w-1/3 text-gray-600'>Home food Healthy food, so we maintain strongly hygenic kitchen environment and all food ingredients. </p>
            </div>
            <div className='grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  '>
                {
                    allservices.map(allservice => <ShowAllServices
                    
                        key = {allservice._id}
                        allservice = {allservice}
                    
                    ></ShowAllServices>)
                }
            </div>
        </div>
    );
};

export default AllServices;