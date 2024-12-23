"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import ZoomParallax from '../components/ZoomParallex/index.js'
import { AnimatedTestimonialsDemo } from "./try/page";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
export default function HomePage() {
  const logo = "logo.png";
  const images = [
    "images/image1.jpg",
    "images/image2.png",
    "images/image3.jpg",
    "images/image2.png",
  ];
   useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])
    const google = () => {
  window.open(`http://localhost:4000/auth/google`, "_self");
  };
  return (
    <div className="bg-yellow-100">
    <div className="flex justify-center mb-[15vh] ">
      <img className="absolute mx-auto z-[100] h-[30vh]" src={logo}></img>
    </div>
    <ImagesSlider className="h-[85vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-papaya text-3xl text-pretty text-white/90  md:text-6xl text-center py-4">
          Eat Pure,Eat Desi<br /> Eat Misthan
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Order now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
   <div id="about-us" className="text-center py-16 rounded-lg shadow-lg px-[4vw]">
  <h1 className="text-[8vh] md:text-[12vh] font-extrabold text-gray-800 leading-tight">
    Why Choose <span className=" font-papaya">MISTHAN</span>?
  </h1>
  <p className="text-2xl mt-6 text-black font-medium">
    Have you ever craved the true taste of <span className="italic font-cute">Desi</span> delights? 🌾
  </p>
  <p className="text-3xl mt-4 text-black">
    Remember those <span className="font-cute text-[5vh]">Desi Ghee ladoos</span> and <span className="font-cute">Gajar ka halwa</span> that your grandma used to make? 🥰
  </p>
  <p className="text-2xl mt-6 text-black leading-relaxed">
    At <span className="font-papaya ">MISTHAN</span>, we bring you the finest, traditional sweets and snacks, <span className="text-black font-bold">chemical-free</span> and delivered straight from the <span className="font-semibold">OG halwaii of the villages</span> to your doorstep. 🚚
  </p>
  <p className="text-xl mt-6 text-black italic">
    Rediscover the taste of nostalgia and purity in every bite! 🌟
  </p>
</div>
  <div className="relative">
   
    <div >
    <ZoomParallax></ZoomParallax>
    </div>
     <div className="absolute text-[6vh] md:text-[10vh] text-black z-50 bottom-[10vh] font-cute">
      <h1 className="ml-[10vw] ">"Now Taste the Sweetness of your favourite Sweet </h1>
      <h1 className="ml-[50vw]"> or</h1>
      <h1 className="ml-[50vw]">saltiness of your favourite snack"</h1>
       <h1 className="ml-[20vw] md:ml-[40vw]"> without any chemical<br></br> at your home</h1>
    </div>
  </div>
  <div id="explore">
  <h1 className="pl-[5vw] py-[5vh] text-[10vh] text-black font-papaya">Our Services-</h1>
  <div className="flex-col md:flex-row flex items-center md:justify-around py-[10vh] text-white">
    <div className="h-[40vh]  mb-[10vh] md:my-0 relative rounded-3xl w-[80vw]  md:w-[20vw] bg-slate-400 ">
      <img className="h-[40vh] w-[80vw] md:w-[25vw] rounded-3xl " src="images/image5.jpg"></img>
      <h1 className="text-center absolute bottom-[5vh] left-[7vw] z-50 text-5xl font-cute">Sweet</h1>
    </div>

     <div className="h-[40vh]  mb-[10vh] md:my-0  w-[80vw]  md:w-[20vw] relative rounded-3xl bg-slate-400 md:animate-bounce">
      <img className="h-[40vh]  w-[80vw]  md:w-[20vw] bg-cover rounded-3xl" src="images/image4.jpg"></img>
            <h1 className="text-center  absolute bottom-[5vh] left-[7vw] z-50 text-5xl font-cute">Combo</h1>

    </div>

    <div className="h-[40vh]  w-[80vw]  md:w-[20vw] font-extrabold relative rounded-3xl bg-slate-400">
      <img className="h-[40vh]  w-[80vw]  md:w-[20vw] rounded-3xl" src="images/namkeen.jpg"></img>
            <h1 className="text-center  absolute bottom-[5vh] left-[6vw] z-50 text-5xl  font-cute">Namkeen</h1>

    </div>
   
  </div>
  <div onClick={google} className="md:h-[6vh] w-[50vw] bg-white/80 hover:bg-slate-200/90 hover:cursor-pointer shadow-xl border-2 border-solid border-gray-500/70 text-center rounded-full md:w-[10vw] mx-auto">
    <h1 className="py-[1vh] rounded-full font-semibold" >Explore More...</h1>
    </div>                     
  </div>
  <div id="review">
  <h1 className="text-[10vh] ml-[5vw] mt-[10vh] font-papaya ">Our Testinomials</h1>
  <AnimatedTestimonialsDemo ></AnimatedTestimonialsDemo>
  </div>
  <div id="contact">
  <h1 className="text-[10vh] ml-[5vw] mt-[10vh] font-papaya ">Contact Us</h1>
  </div>
    </div>
  );
    
}


     