import React from 'react';

const Location = () => {
  return (
    <section className="text-gray-600 body-font">
     <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">WELCOME TO NIKE</h1>
    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 mt-10">Discover where you can find the latest Nike shoe collections near you. Our locations are carefully selected to provide you with the best shopping experience. Whether you're looking for the perfect pair of running shoes, stylish sneakers, or comfortable athleisure footwear, our stores have something for everyone.</h2>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LocationCard
            title="New York City Store"
            description="Located in the heart of Manhattan, our flagship store offers the latest Nike innovations and exclusive releases."
          />
          <LocationCard
            title="Los Angeles Store"
            description="Experience the West Coast vibe at our LA store, where you'll find a wide range of Nike footwear inspired by the city's dynamic culture."
          />
          <LocationCard
            title="Miami Store"
            description="Embrace the Miami lifestyle with our collection of vibrant and stylish Nike shoes, perfect for sunny days and beach adventures."
          />
          <LocationCard
            title="Shop Online"
            description="Can't make it to one of our physical locations? No problem! Explore our online store and shop the latest Nike shoe releases from the comfort of your home. Enjoy fast shipping and hassle-free returns on all orders."
          />
        </div>
      </div>
    </section>
  );
}

const LocationCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">{description}</p>
        <a href="/" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Location;
