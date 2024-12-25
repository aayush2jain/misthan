'use client'
import React, { useState } from "react";
const CustomizeItem = () => {
  // State to track the selected quantity and price
  const [selectedQuantity, setSelectedQuantity] = useState({
    label: "250 Grams",
    price: 316,
  });

  // Options for the quantities
  const options = [
    { label: "250 Grams", price: 316 },
    { label: "500 Grams", price: 632 },
    { label: "1 Kg", price: 1263 },
  ];

  const handleSelection = (option) => {
    setSelectedQuantity(option);
  };

  return (
    <div class="flex flex-col md:flex-row bg-gray-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">

  <div class="md:w-1/2 flex justify-center items-center">
    <img
      src="your-image-url.jpg"
      alt="Delicious Barfi"
      class="rounded-lg shadow-md w-full max-w-md"
    />
  </div>

  <div class="md:w-1/2 mt-6 md:mt-0 md:ml-8 flex flex-col justify-center">
    <h2 class="text-3xl font-bold text-gray-800">Delicious Barfi</h2>
    <p class="text-lg text-gray-600 mt-4">
      A perfect treat for your taste buds, made with love and tradition.
    </p>

    <div class="mt-4">
      <p class="text-lg font-semibold text-gray-800">Quantity:</p>
      <p class="text-xl font-bold text-gray-900">250g</p>
    </div>

    <div class="mt-4">
      <p class="text-lg font-semibold text-gray-800">Price:</p>
      <p class="text-xl font-bold text-green-600">$200</p>
    </div>

  
    <button
      class="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
    >
      Order Now
    </button>

   
    <div class="mt-8">
      <h3 class="text-lg font-semibold text-gray-700">Similar Products:</h3>
      <div class="grid grid-cols-2 gap-4 mt-4">
       
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <img
            src="similar-product1.jpg"
            alt="Product 1"
            class="rounded-md w-full"
          />
          <p class="mt-2 text-sm font-semibold text-gray-800">Barfi Special</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <img
            src="similar-product2.jpg"
            alt="Product 2"
            class="rounded-md w-full"
          />
          <p class="mt-2 text-sm font-semibold text-gray-800">Nutty Delight</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CustomizeItem;
