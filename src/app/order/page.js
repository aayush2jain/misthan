'use client';
import React, { useState } from "react";
import axios from "axios";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

const ProductForm = () => {
  const params = useSearchParams();
  const productId = params.get("id");
  const productName = params.get("name");
  const productPrice = params.get("price");
  const userId = params.get("userId");

  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    address: "",
  });

  console.log("check", productName, productPrice);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const submissionData = {
      ...formData,
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      userId: userId,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/user/order",
        submissionData
      ); // Replace with your API endpoint
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const paymentHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const currency = "INR";

    // Step 1: Create an order in your backend
    const response = await axios.post("http://localhost:4000/payment/", {
      amount: productPrice * 100, // Convert to subunits
      receipt: productId,
      currency,
    });

    const { id: orderId, amount } = response.data; // Extract order ID and amount from backend response

    // Step 2: Configure Razorpay options
    const options = {
      key: "rzp_test_0KBfIDCc8HKw34", // Replace with your Razorpay Key ID
      amount,
      currency,
      name: "MISTHAN", // Your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo", // Replace with your logo URL
      order_id: orderId, // Order ID generated in Step 1
      handler: async function (response) {
        // Step 3: Verify the payment in your backend
        const verificationResponse = await axios.post(
          "http://localhost:4000/payment/verification",
          {
            paymentResponse: response, // Pass the entire Razorpay response
          }
        );

        if (verificationResponse.data.msg === "success") {
          alert("Payment Successful");
          await handleSubmit(); // Call handleSubmit after successful payment
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        } else {
          alert("Payment Verification Failed");
        }
      },
      prefill: {
        name: formData.username, // Use entered username
        email: "webdevmatrix@example.com", // Default email
        contact: formData.contact, // Use entered contact
      },
      notes: {
        address: formData.address, // Use entered address
      },
      theme: {
        color: "#3399cc",
      },
    };

    // Step 4: Open Razorpay payment gateway
    const rzp1 = new window.Razorpay(options);

    // Handle payment failures
    rzp1.on("payment.failed", function (response) {
      alert("Payment Failed");
      console.error("Payment Failed:", response.error);
    });

    rzp1.open();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Product Form</h2>
      <form onSubmit={paymentHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            Name
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
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive" // Ensures the script loads after the page is interactive
      />
    </div>
  );
};

export default ProductForm;
