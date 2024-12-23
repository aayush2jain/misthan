"use client"
import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import axios from 'axios';
import Link from 'next/link';

const page = () => {
  const [products, setproducts] = useState([]);
  const [userId, setuserId] = useState('');
  const imgproduct = "https://img.freepik.com/free-photo/from-assorted-baked-with-baklava-baklava-sheki-flowers-smoked-fish_176474-2605.jpg?t=st=1734851190~exp=1734854790~hmac=899a502351fb9c78286511bd8d2c809b5bfb75505ffc5fdbe139c1e85af923cb&w=900";
  const getUser = async () => {
		try {
			const url = `http://localhost:4000/auth/login/success`;
			const response = await axios.get(url, { withCredentials: true });
			console.log("checkuser",response.data.userId);
      setuserId(response.data.userId);
		} catch (err) {
			console.log(err);
		}
	};
  const showproduct = async (id)=>{
    try {
      <Link href={{ pathname: '/product', query: { id: id } }}></Link>
    } catch (err) {
      console.log(err);
    }
  }
  const getproduct = async () => {
    try {
      const url = `http://localhost:4000/user/home`;
      const response = await axios.get(url, { withCredentials: true });
      console.log("helo",response.data.products);
      setproducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUser();
    getproduct();
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
    {products.map((product) => (
      <Link href={{ pathname: '/product', query: { id: product._id,userId:userId } }}>
      <div key={product._id} onClick={showproduct}  className='w-[30vw] h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[45vh] rounded-t-3xl' src={product.image}></img>
      <div className='text-center font-cute text-black text-3xl'>
        <h1>{product.name}</h1>
        <h1>{product.price}₹/kg</h1>
        <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        </div>
      </div>
      </div>
      </Link>
    ))}
    </div>
    </div>
    
  )
}

export default page
