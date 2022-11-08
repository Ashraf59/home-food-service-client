import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../Assets/hero/hero.jpg'
import hero2 from '../../../Assets/hero/hero2.jpg';
import UseTitle from '../../../Hooks/UseTitle';

const Home = () => {
    UseTitle('Home')
    return (
        //Banner Section
       <div>

<div className="hero min-h-screen" style={{ backgroundImage: `url("https://domf5oio6qrcr.cloudfront.net/medialibrary/11537/4a78f148-d427-4209-8173-f33d04c44106.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"><span className='text-rose-500'>Home</span> Food</h1>
      <p className="mb-5">Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy.</p>
      <button className="btn btn-error text-white">Get Started</button>
    </div>
  </div>
</div>

                <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-2 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Home Food Healthy Food
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-500">Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link to=''> <button className="btn btn-error text-white">Order Now</button></Link>
                    </div>
                </div>
                <div className=" p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded shadow p-6" />
                </div>
            </div>
        </section>


        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src={hero2} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded shadow p-6" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Delicious Winter Pitha
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-slate-500">The word “pitha” in Bangla refers to an indigenous food item that is nationally popular. Sweet dishes like bhapa pitha, patishapta, dudher shondesh, etc are the most common examples. “Utshob”, on the other hand, means festival. Thus, combined, pitha utshob is a glorious exhibition in Bangladesh during the winter season where people get together to set up stalls and sell their homemade pithas.
                    </p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to=''> <button className="btn btn-error text-white">Order Now</button></Link>
				
			</div>
		</div>
	</div>
</section>

       </div>



        

    );
};

export default Home;