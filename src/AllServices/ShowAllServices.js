import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllServices = ({allservice}) => {
    const {_id, serviceName, message, price, image} = allservice;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="food" /></figure>
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>Price: ${price}</p>
    <>{message.length > 100 ?
              <p>{message.slice(0, 100) + '...'} <Link to = {`/courses/${_id}`}>Read More</Link></p>
              :
              <p>{message}</p>
            
            }</>
    <div className="card-actions justify-end">
        <Link to = '/services'>
      <button className="btn btn-error mx-auto text-white">See All</button>

        </Link>
    </div>
  </div>
</div>
    );
};

export default ShowAllServices;