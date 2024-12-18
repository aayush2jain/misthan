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
  return (
    <div className=" bg-gradient-to-b from-orange-100 to-orange-200 ">
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
        <motion.p className="font-bold text-xl text-pretty text-white  md:text-6xl text-center py-4">
          Eat Pure,Eat Deshi<br /> Eat Misthan
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Order now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
   <div id="about-us" className="text-center py-16 rounded-lg shadow-lg px-[4vw]">
  <h1 className="text-[12vh] font-extrabold text-gray-800 leading-tight">
    Why Choose <span className="italic">MISTHAN</span>?
  </h1>
  <p className="text-2xl mt-6 text-black font-medium">
    Have you ever craved the true taste of <span className="italic">Desi</span> delights? 🌾
  </p>
  <p className="text-3xl mt-4 text-black">
    Remember those <span className="font-semibold">Desi ghee ladoos</span> and <span className="font-semibold">gajar ka halwa</span> that your grandma used to make? 🥰
  </p>
  <p className="text-2xl mt-6 text-black leading-relaxed">
    At <span className="font-bold ">MISTHAN</span>, we bring you the finest, traditional sweets and snacks, <span className="text-black font-bold">chemical-free</span> and delivered straight from the <span className="font-semibold">OG halwaii of the villages</span> to your doorstep. 🚚
  </p>
  <p className="text-xl mt-6 text-black italic">
    Rediscover the taste of nostalgia and purity in every bite! 🌟
  </p>
</div>
  <div>
    <ZoomParallax></ZoomParallax>
  </div>
  <div id="explore">
  <h1 className="pl-[10vw] text-[10vh] text-black font-bold">Our Services-</h1>
  <div className="flex-row flex justify-around pb-[10vh]">
    <div className="h-[40vh] w-[20vw] bg-slate-400">
      <img className="h-[34vh] w-[20vw]" src="images/image5.jpg"></img>
      <h1 className="text-center text-2xl font-semibold">Sweet</h1>
    </div>
    <div className="h-[40vh] w-[20vw] bg-slate-400">
      <img className="h-[34vh] w-[20vw]" src="images/namkeen.jpg"></img>
            <h1 className="text-center text-2xl font-semibold">Namkeen</h1>

    </div>
    <div className="h-[40vh] w-[20vw] bg-slate-400">
      <img className="h-[34vh] w-[20vw]" src="images/image4.jpg"></img>
            <h1 className="text-center text-2xl font-semibold">Combo</h1>

    </div>
  </div>                     
  </div>
  <div id="review">
  <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
  </div>
  <div id="contact">

  </div>
    </div>
  );
    
}


     