"use client"
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { IoSearchCircle } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const page = () => {
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
      <div className='w-[30vw] h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[45vh] rounded-t-3xl' src="images/image1.jpg"></img>
      <div className='text-center font-cute text-black text-3xl'>
        <h1>Gajar Barfi</h1>
        <h1>400$/kg</h1>
        <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        </div>
      </div>
      </div>
      <div className='w-[30vw] h-[60vh] bg-yellow-100 rounded-3xl'>
      <img className='w-[30vw] h-[45vh] rounded-t-3xl' src="images/image1.jpg"></img>
      <div className='text-center font-cute text-black text-3xl'>
        <h1>Khandelwal Mixture</h1>
        <h1>75$/packet</h1>
        <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        </div>
      </div>
      </div>
     <div className='w-[30vw] h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[45vh] rounded-t-3xl' src="images/image1.jpg"></img>
      <div className='text-center font-cute text-black text-3xl'>
        <h1>Gajar Barfi</h1>
        <h1>400$/kg</h1>
        <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        </div>
      </div>
      </div>
      <div className='w-[30vw] h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[45vh] rounded-t-3xl' src="images/image1.jpg"></img>
      <div className='text-center font-cute text-black text-3xl'>
        <h1>Gajar Barfi</h1>
        <h1>400$/kg</h1>
        <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        </div>
      </div>
      </div>
      <div className='w-[30vw] h-[60vh] bg-pink-100 rounded-3xl'>
      <img className='w-[30vw] h-[45vh] rounded-t-3xl' src="images/image1.jpg"></img>
      <div className='text-center font-cute text-black text-3xl'>
        <h1>Gajar Barfi</h1>
        <h1>400$/kg</h1>
        <div id="rating" className='flex text-lg text-yellow-400 justify-center '>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        </div>
      </div>
      </div>
      <div className='w-[30vw] h-[60vh] bg-black'>
      </div>
    </div>
    </div>
    
  )
}

export default page
