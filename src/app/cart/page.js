"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { IoSearchCircle } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
const CartPage = () => {
  const [orders, setorders] = useState([]);
  const params = useSearchParams();
  const [user, setuser] = useState();
  const getorders = async () => {
    try {
      console.log("Fetching user cart...");
      const userId =  params.get("userId");
      const url = `https://mistbackend.vercel.app/user/cart/${userId}`; // Removed the ':' before userId
      const response = await axios.get(url, { withCredentials: true });
      setorders(response.data);
      setuser(userId);
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
     <div id="nav" className='w-[100vw] flex items-center  bg-pink-100'>
    <div className='py-[1vh] pl-[2vw]'>
      <img className='h-[5vh] md:h-[8vh]'  src="images/misthan.png"></img>
    </div>
    <div className=' flex items-center'>
      <input className='hidden md:block w-[40vw] ml-0 md:ml-[16vw] border-1 border-solid border-black p-4 text-base md:text-xl font-medium h-[6vh] text-black bg-white rounded-full ' type='text'></input>
      <IoSearchCircle className='ml-[40vw] md:ml-0 text-[7vh] my-auto'></IoSearchCircle>
    </div>
    {/* <div className='ml-0 md:ml-[17vw] flex items-center'>
   <IoCartSharp className='text-[6vh]'></IoCartSharp>
    </div> */}
    <div className='ml-[1vw] md:ml-[18vw]'>
      <Link href={{pathname:'/cart',query:{userId:user}}}>
       <FaUserCircle className='text-[6vh]'></FaUserCircle></Link>
    </div>
    </div>
    <h1 className="mt-[10vh] text-center font-semibold text-xl">Your Orders:</h1>
    <div className='justify-center md:ml-8 flex flex-wrap gap-8'>
    {orders.map((order) => (
      <Link href={{ pathname: '/product', query: { id: order.productId,userId:order.userId } }}>
      <div key={order._id}  className='md:w-[30vw] flex flex-row  md:flex-col w-[90vw] h-[20vh] md:h-[62vh] bg-pink-100 rounded-3xl'>
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
