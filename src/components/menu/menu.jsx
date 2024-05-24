import React from "react";
import shoes from '../img/nike_shoes.png';
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-8 mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 sm:w-full mt-12"> {/* Added margin from the top */}
            <div className="p-4">
              <h1 className="title-font font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">YOUR FEET <br /> DESERVE THE <br />BEST !!!</h1>
              <div className="leading-relaxed">YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES .</div>
              <div className="mt-8"> {/* Added margin from the top */}
                <button className="bg-blue-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">Shop Now</button>
                <Link to='/category'>
                  <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Category</button>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-around sm:justify-start mt-8"> {/* Added margin from the top */}
              <div className="p-4 text-center sm:w-1/2 lg:w-1/4 w-full">
                <h2 className="title-font font-medium text-2xl text-gray-900">08+</h2>
                <p className="leading-relaxed">Categories</p>
              </div>
              <div className="p-4 text-center sm:w-1/2 lg:w-1/4 w-full">
                <h2 className="title-font font-medium text-2xl text-gray-900">62%</h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 text-center sm:w-1/2 lg:w-1/4 w-full">
                <h2 className="title-font font-medium text-2xl text-gray-900">1032+</h2>
                <p className="leading-relaxed">Stores</p>
              </div>
              <div className="p-4 text-center sm:w-1/2 lg:w-1/4 w-full">
                <h2 className="title-font font-medium text-2xl text-gray-900">500K+</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 sm:w-full mb-8 lg:mb-0">
            <img className="object-cover object-center w-full h-full" src={shoes} alt="shoes" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Menu;
