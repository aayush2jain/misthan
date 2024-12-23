'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
const ProductForm = () => {
    const params = useSearchParams();
    const  productId  = params.get("id");
    const productName = params.get("name");
    const productPrice = params.get("price");
    const userId = params.get("userId");
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    address: "",
  });
  console.log("check",productName,productPrice);
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      userId: userId,
    };

    try {
      const response = await axios.post("http://localhost:4000/user/order", submissionData); // Replace with your API endpoint
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="contact">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
