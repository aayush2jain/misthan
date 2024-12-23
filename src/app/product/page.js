"use client"
import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
const page = () => {
  const [productDetails, setproductDetails] = useState("");
  const params = useSearchParams();
  console.log("hello",params.get("userId"));
  const order = async ()=>{
    <Link href={{pathname:'/order',query:{
      id:productDetails._id,
      name:productDetails.name,
      price:productDetails.price,
      quantity:productDetails.amount
    }}}></Link>
  }

  const response = async ()=>{
    try {
      console.log("hello");
      const url = `http://localhost:4000/user/getproduct/${params.get("id")}`;
      const response = await axios.get(url, { withCredentials: true });
      console.log("check",response.data.product);
      setproductDetails(response.data.product);
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    response();
  }, []);
  return (
     <div>
         <div id="nav" className='w-full flex items-center  bg-pink-100'>
         <div className='py-[1vh] pl-[2vw]'>
           <img  src="images/misthan.png"></img>
         </div>
         <div className='flex items-center'>
           <input className='w-[40vw] ml-[16vw] border-1 border-solid border-black p-4 text-xl font-medium h-[6vh] text-black bg-white rounded-full ' type='text'></input>
           <IoSearchCircle className='text-[7vh] my-auto'></IoSearchCircle>
         </div>
         <div className='ml-[17vw] flex items-center'>
         <IoCartSharp className='text-[6vh]'></IoCartSharp>
         </div>
         <div className='ml-[1vw]'>
           <FaUserCircle className='text-[6vh]'></FaUserCircle>
         </div>
         </div>
         <div className='mt-[10vh] ml-8 flex flex-wrap gap-8'>
          <div className='ml-[6vw] w-[40vw] h-[70vh] bg-pink-100 rounded-3xl'>
          <img className='w-[40vw] h-[70vh] rounded-3xl' src={productDetails.image}></img>
          </div>
          <div id="" className='ml-[6vw] w-[40vw] h-[70vh] text-black rounded-3xl'>
            <div id="discription" className=' font-papaya '>
            <h1 className='text-[6vh]'>Description:</h1>
            <p className='font-normal'>{productDetails.description}</p>
            </div>
            <div id="quantity" className='mt-[5vh]'>
            <h1 className='text-3xl  font-papaya '>Quantity:</h1>
            <h1 className='text-3xl font-semibold'>{productDetails.amount}g</h1>
            </div>
            <div id="order" className='flex items-center gap-10 text-3xl font-semibold mt-[5vh]'>
            <h1 >{productDetails.price}$</h1>
             <Link href={{pathname:'/order',query:{
              id:productDetails._id,
              userId:params.get("userId"),
              name:productDetails.name,
              price:productDetails.price,
              quantity:productDetails.amount
    }}}>
            <div id="button" onClick={order} className='bg-gray-400 text-xl font-semibold text-black p-2 rounded-3xl'>
              <h1>Order Now</h1>
            </div>
            </Link>
            </div>
            <div id="similar product">
              <h1>similar products</h1>
            </div>
        </div>
         </div>
    </div>
  )
}

export default page
