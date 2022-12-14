import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PlaceReview = ({service}) => {
    const {user} = useContext(AuthContext);
    const {serviceName} = service;
    const navigate = useNavigate();
    const data = new Date();
    const handlePlaceOrder = event => {
        event.preventDefault();

        const form = event.target;
        const service = form.service.value || 'service not found';
        const rating = form.rating.value;
        const photoURL = form.photoURL.value || 'image not found';
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        console.log(service, rating, email, photoURL, message);

        const reviewCollection = {
            serviceName: service,
            image: photoURL,
            rating: rating,
            email: email,
            message: message,
            time: data.getTime()
        }

        // create services
        fetch('https://home-food-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                // authorization:  `Bearer ${localStorage.getItem('')}`
            },
            body: JSON.stringify(reviewCollection)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged && user?.email){
                toast.success('Review placed Successfully')
                form.reset();
                navigate('/');
            }
            else{
                navigate('/login')
                toast.error('You have to login first')
            }
           
            console.log(data)})
        .catch(error => console.error(error))
        }

    return (
        <div className='mt-10'>
            <form onSubmit={handlePlaceOrder}>
                <div className='px-6'>
                    <h2 className='text-4xl mb-2 text-center shadow bg-slate-50 rounded-md p-3 font-semibold'>Add Your Reviews{}</h2>
                </div>
                <div className='grid grid-cols-1 p-6 lg:grid-cols-2 gap-4'>
                    <input type="text" name='service' placeholder="Service Name" className="input input-bordered w-full" defaultValue={serviceName} readOnly />
                    <input type="text" name='photoURL' src="" alt="" placeholder='Your Photo' className="input input-bordered w-full" defaultValue={user?.photoURL} readOnly />
                    <input type="text" name='rating' placeholder="Ratings" required className="input input-bordered w-full" />
                    <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <div className='p-6'>
                    <textarea className="textarea textarea-bordered h-24 w-full" name='message' placeholder="Bio" required></textarea>
                </div>
                <div className='px-6 card-actions justify-center'>
                    <input className='btn btn-error text-white' type="submit" value="Add Review" />
                </div>
            </form>
        </div>
    );
};

export default PlaceReview;