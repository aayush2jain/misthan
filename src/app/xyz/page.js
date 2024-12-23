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
    <div className="w-full max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="text-lg font-semibold mb-4">
        <h2>Kaju Burfi • ₹316 - ₹1263</h2>
        <p className="text-gray-600">Customise as per your taste</p>
      </div>
      <hr className="my-4" />
      <div className="text-lg font-medium mb-4">Quantity</div>
      <div className="space-y-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 rounded-lg border cursor-pointer"
            style={{
              borderColor:
                selectedQuantity.label === option.label
                  ? "orange"
                  : "gray",
            }}
            onClick={() => handleSelection(option)}
          >
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="quantity"
                checked={selectedQuantity.label === option.label}
                onChange={() => handleSelection(option)}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500"
              />
              <span>{option.label}</span>
            </label>
            <span>₹{option.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-gray-200 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">
          Quantity: [{selectedQuantity.label}]
        </p>
        <p className="text-lg font-semibold">₹{selectedQuantity.price}.00</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          className="text-orange-600 hover:underline font-medium"
          onClick={() => setSelectedQuantity({ label: "", price: 0 })}
        >
          Hide Customized Item
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600">
          Add Item to cart
        </button>
      </div>
    </div>
  );
};

export default CustomizeItem;
