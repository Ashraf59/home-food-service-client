import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const ServiceCard = ({service}) => {
    const {_id, serviceName, message, price, image} = service;
            UseTitle('All Services')

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure>
  <PhotoProvider>
      <PhotoView src={image}>
        <img src={image} alt="" />
      </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>Price: ${price}</p>
    <>{message.length > 100 ?
              <p className='text-gray-600'>{message.slice(0, 100) + '...'}</p>
              :
              <p className='text-gray-600'>{message}</p>
            
            }</>
    <div className="card-actions justify-center">
      <Link to={`/services/${_id}`}><button className="btn btn-error mx-auto text-white">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;