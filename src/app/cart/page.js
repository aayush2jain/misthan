"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const CartPage = () => {
  const [orders, setorders] = useState([]);
  const params = useSearchParams();

  const getorders = async () => {
    try {
      console.log("Fetching user cart...");
      const userId =  params.get("userId");
      const url = `http://localhost:4000/user/cart/${userId}`; // Removed the ':' before userId
      const response = await axios.get(url, { withCredentials: true });
      setorders(response.data);
      console.log("Response:", response.data[0]);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
      getorders(); // Call orders after setting the userId
  }, []);

  return(
    <>
    <h1 className="mt-[10vh] text-center font-semibold text-xl">Your Orders:</h1>
    <div className='justify-center md:ml-8 flex flex-wrap gap-8'>
    {orders.map((order) => (
      <Link href={{ pathname: '/product', query: { id: order.productId,userId:order.userId } }}>
      <div key={order._id}  className='md:w-[30vw] flex flex-row  md:flex-col w-[90vw] h-[20vh] md:h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[20vh] md:h-[45vh] md:rounded-t-3xl rounded-l-3xl' src={order.product[0].image}></img>
      <div className='text-center md:pl-0 md:pt-0 pl-[5vw] pt-[1.5vh]  text-black text-xl'>
        <h1><span className="font-semibold">OrderName:</span>{order.productName}</h1>
        <h1><span className="font-semibold">OrderPrice:</span>{order.productPrice}₹</h1>
        <h1><span className="font-semibold">OrderStatus:</span>{order.status}</h1>
        {/* // <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        // <IoStar></IoStar>
        // <IoStar></IoStar>
        // <IoStar></IoStar>
        // <IoStar></IoStar>
        // <IoStar></IoStar>
        // </div> */}
      </div>
      </div>
      </Link>
    ))}
    </div>
    </>
  );
};

const Page = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}> 
      <CartPage/>
    </Suspense>
  );
};

export default Page;
