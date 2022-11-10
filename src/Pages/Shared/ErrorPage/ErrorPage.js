import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className=' '>
            <section className="flex items-center mx-auto justify-center error my-28 bg-slate-50 rounded-md p-8 w-2/3 shadow">
            <div className="flex items-center justify-center vh-100">
                <div className="text-center text-info">
                    <h1 className="font-bold text-error text-5xl">404</h1>
                    <p className="text-4xl text-black my-4"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="text-4xl text-black">
                        The page you're looking for doesn't exist.
                    </p>
                    <Link to='/' className="btn btn-error text-decoration-none text-white mt-4">Back To Home</Link>
                </div>
            </div>
        </section>

        </div>
    );
};

export default ErrorPage;