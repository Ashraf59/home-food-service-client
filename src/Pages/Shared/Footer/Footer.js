import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Assets/images/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer p-8 bg-rose-500 text-white m-auto">
  <div className='text-center m-auto'>
  <Link to='/'className="btn uppercase text-2xl font-bold"><span className='text-rose-500'>Home</span> Food</Link>
<img src={image} alt="" />
  </div> 
  <div>
    <span className="text-2xl font-bold">Our Services</span> 
    <a href = "/" className="link link-hover text-lg">Lunch</a> 
    <a href = "/" className="link link-hover text-lg">Breakfast</a> 
    <a href = "/" className="link link-hover text-lg">Hand Made Pitha</a> 
  </div> 
  <br />
  <p>Copyright © 2022 - All right reserved by Home Food</p>

</footer>
    );
};

export default Footer;