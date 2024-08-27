import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Details = () => {

    const data1=useLoaderData()
    console.log(data1,'details data ')

    return (
   
    <div className="max-w-4xl mx-auto p-4">
      {/* Image and Title Section */}
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={data1.images[0]}
            alt="Digital Pointer Steel Band Quartz Watch"
            className="w-full h-auto rounded-lg"
          />
          {/* Additional Images */}
          <div className="flex space-x-2 mt-4">
           {data1?.images?.map(data=> <img src={data} alt="thumb1" className="w-16 h-16 rounded-lg" />)}
       
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">Digital Pointer Steel Band Quartz Watch Fashion Luxury Alloy Bracelet Set</h1>
          <p className="text-gray-500 mb-2">Brand: No Brand | More Watches from No Brand</p>
          
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 font-bold text-lg">৳450</span>
            <span className="line-through text-gray-500 ml-4">৳900</span>
            <span className="text-green-500 ml-4">-50%</span>
          </div>

          {/* Color Options */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Color</h2>
            <div className="flex space-x-2">
              <button className="py-2 px-4 bg-gray-200 rounded-lg">JHE112-SG-SL02</button>
              <button className="py-2 px-4 bg-gray-200 rounded-lg">JHE112-SG-SL03</button>
              <button className="py-2 px-4 bg-gray-200 rounded-lg">JHE112-SG-SL04</button>
            </div>
          </div>

          {/* Quantity and Buy/Add to Cart */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <button className="bg-gray-300 p-2 rounded-l-lg">-</button>
              <input type="number" className="w-12 text-center border-t border-b border-gray-300" defaultValue="1" />
              <button className="bg-gray-300 p-2 rounded-r-lg">+</button>
            </div>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Buy Now</button>
            <button className="py-2 px-4 bg-orange-500 text-white rounded-lg">Add to Cart</button>
          </div>

          {/* Delivery Info */}
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Delivery Options</h2>
            <p className="text-gray-500">Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
            <p className="text-gray-500">Standard Delivery ৳75 (Get by 4-7 Sep)</p>
            <p className="text-gray-500">Cash on Delivery Available</p>
          </div>

          {/* Return & Warranty */}
          <div>
            <h2 className="text-lg font-medium mb-2">Return & Warranty</h2>
            <p className="text-gray-500">14 days easy return</p>
            <p className="text-gray-500">Warranty not available</p>
          </div>
        </div>
      </div>
    </div>



    );
};

export default Details;