import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../Assets/hero/hero.jpg'

const Home = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-2 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Home Food Healthy Food
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-500">Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:text-gray-900">Suspendisse</Link>
                        <Link to='' className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Malesuada</Link>
                    </div>
                </div>
                <div className=" p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded shadow p-6" />
                </div>
            </div>
        </section>
    );
};

export default Home;