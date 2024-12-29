"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
const Productpage = () => {
  const [productDetails, setproductDetails] = useState("");
  const [productName, setproductName] = useState("");
  const [similarProducts, setsimilarProducts] = useState([]);
  const [userId, setuserId] = useState('');
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
      setuserId(params.get("userId"));
      const url = `https://mistbackend.vercel.app/user/getproduct/${params.get("id")}`;
      const response = await axios.get(url, { withCredentials: true });
      console.log("check",response.data.product.name);
      setproductDetails(response.data.product);
      setproductName(response.data.product.name);
      similarProduct(response.data.product.name);
    } catch (err) {
      console.log(err);
    }

  }

  const similarProduct = async(name)=>{
    try {
      console.log("helloproduct",productName);
      const url = `https://mistbackend.vercel.app/user/similarproduct/${name}`;
      const response = await axios.get(url, { withCredentials: true });
      console.log("check",response.data);
      console.log("check2",response.data.products);
      setsimilarProducts(response.data.products);
    } 
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    response();
  }, []);
  return (
     <div className='bg-gray-50'>
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
      <Link href={{pathname:'/cart',query:{userId:userId}}}>
       <FaUserCircle className='text-[6vh]'></FaUserCircle></Link>
    </div>
    </div>
         <div className='p-4 md:p-8 mt-[5vh] rounded-3xl w-[90vw] md:w-[69vw] bg-white shadow-2xl mx-auto flex flex-col md:flex-row  gap-8'>
          <div className='h-[30vh] md:h-[65vh] bg-pink-100 rounded-3xl'>
          <img className='w-[95vw] md:w-[35vw] h-[30vh] md:h-[65vh] rounded-3xl' src={productDetails.image}></img>
          </div>
          <div id="" className='ml-[1vw] pt-[1vh]  h-[65vh] text-black rounded-3xl'>
            <div id="discription" className='font-bold'>
            <h1 className='text-xl'>{productDetails.name}</h1>
            <p className='font-normal'>{productDetails.description}</p>
            </div>
            <div id="quantity" className='mt-[3vh]'>
            <h1 className='text-xl '>Quantity:</h1>
            <h1 className='text-xl font-bold'>{productDetails.amount}g</h1>
            </div>
            <div className='flex  items-center mt-[3vh] gap-[6vw] md:gap-[2vw]'>
            <div id="price" className=''>
            <h1 className='text-xl'>Price:<span className='font-bold'>{productDetails.price}₹</span></h1>
            {/* <h1 className='text-xl font-bold' ></h1> */}
            </div>
            <Link href={{pathname:'/order',query:{
              id:productDetails._id,
              userId:params.get("userId"),
              name:productDetails.name,
              price:productDetails.price,
              quantity:productDetails.amount
             }}}>
            <div id="button" onClick={order} className='bg-gray-200 hover:bg-gray-300 border-[1px] border-solid border-gray-400 shadow-sm w-[40vw]  md:w-[9vw] text-base text-center  text-black py-[4px] rounded-3xl'>
              <h1>Order Now</h1>
            </div>
            </Link>
            </div>
           
            <div id="similar product" className='mt-[3vh]'>
              <h1 className='text-xl font-semibold'>similar products:</h1>
               {
              similarProducts
              .filter(product => product.amount != productDetails.amount) // Filter out products with the same quantity
               .map((product) => (
                <Link href={{ pathname: '/product', query: { id: product._id,userId:userId } }}>
      <div key={product._id}  onClick={()=>{setproductDetails(product)}}  className='bg-gray-200 mt-[2vh] flex w-[80vw] md:w-[14vw] rounded-xl h-[9vh]'>
        <img className='h-[8vh] md:w-[9vh] rounded-l-xl' src={product.image}></img>
        <div className='text-center ml-[2vw]'>
          <h1>{product.name}</h1>
          <h1>{product.price}₹</h1>
        </div>
      </div>
      </Link>
    ))
}
            </div>
            </div> 
        </div>
         </div>

  )
}
const Page = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
    <Productpage/>
    </Suspense>
    )
  }

export default Page;
