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
  const [userPic, setuserPic] = useState('');
  const imgproduct = "https://img.freepik.com/free-photo/from-assorted-baked-with-baklava-baklava-sheki-flowers-smoked-fish_176474-2605.jpg?t=st=1734851190~exp=1734854790~hmac=899a502351fb9c78286511bd8d2c809b5bfb75505ffc5fdbe139c1e85af923cb&w=900";
  const getUser = async () => {
		try {
			const url = `https://mistbackend.vercel.app/auth/login/success`;
			const response = await axios.get(url, { withCredentials: true });
			console.log("checkuser",response.data.user._id);
      console.log("checkuserpic",response.data.user.profilepic);
      setuserId(response.data.user._id);
      setuserPic(response.data.user.profilepic);
      console.log("important",userId,userPic);
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
      const url = `https://mistbackend.vercel.app/user/home`;
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
    <div className='mt-[10vh] justify-center md:ml-8 flex flex-wrap gap-8'>
    {products.map((product) => (
      <Link href={{ pathname: '/product', query: { id: product._id,userId:userId } }}>
      <div key={product._id} onClick={showproduct}  className='md:w-[30vw] flex flex-row  md:flex-col w-[90vw] h-[20vh] md:h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[20vh] md:h-[45vh] md:rounded-t-3xl rounded-l-3xl' src={product.image}></img>
      <div className='text-center md:pl-0 md:pt-0 pl-[5vw] pt-[1.5vh] font-cute text-black text-3xl'>
        <h1>{product.name}</h1>
        <h1>{product.price}₹</h1>
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
