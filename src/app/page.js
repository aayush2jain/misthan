"use client";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import ZoomParallax from '../components/ZoomParallex/index.js'
import { AnimatedTestimonialsDemo } from "./try/page";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const logo = "logo.png";
  const hero = "hero.png";
  const router = useRouter();
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
      try{

     
      console.log("idhaar tak koi dikkat nahi");
  window.open(`https://mistbackend.vercel.app/auth/google`, "_self");
      }
      catch(error){
        console.log("error",error);
      }
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="bg-gray-50">
    <div className="flex justify-center mb-[15vh] ">
      <img className="absolute mx-auto z-[100] h-[30vh]" src={logo}></img>
    </div>
    <div>
      <div  style={{ backgroundImage: `url(${hero})` }} className="bg-cover" >
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
        <button onClick={()=>{router.push('/register')}} className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Order now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
    </div>
    </div>
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

    <Link href={{pathname:'/register'}}>
    <div className="h-[40vh]  mb-[10vh] md:my-0 relative rounded-3xl w-[80vw]  md:w-[20vw] bg-slate-400 ">
      <img className="h-[40vh] w-[80vw] md:w-[25vw] rounded-3xl " src="images/image5.jpg"></img>
      <h1 className="text-center absolute bottom-[5vh] left-[7vw] z-50 text-5xl font-cute">Sweet</h1>
    </div>
    </Link>
     <Link href={{pathname:'/register'}}>
     <div className="h-[40vh]  mb-[10vh] md:my-0  w-[80vw]  md:w-[20vw] relative rounded-3xl bg-slate-400 md:animate-bounce">
      <img className="h-[40vh]  w-[80vw]  md:w-[20vw] bg-cover rounded-3xl" src="images/image4.jpg"></img>
            <h1 className="text-center  absolute bottom-[5vh] left-[7vw] z-50 text-5xl font-cute">Combo</h1>

    </div>
    </Link>
    <Link href={{pathname:'/register'}}>
    <div className="h-[40vh]  w-[80vw]  md:w-[20vw] font-extrabold relative rounded-3xl bg-slate-400">
      <img className="h-[40vh]  w-[80vw]  md:w-[20vw] rounded-3xl" src="images/namkeen.jpg"></img>
            <h1 className="text-center  absolute bottom-[5vh] left-[6vw] z-50 text-5xl  font-cute">Namkeen</h1>

    </div>
    </Link>
   
  </div>
  <Link href={{pathname:'/register'}}>
  <div className="md:h-[6vh] w-[50vw] bg-white/80 hover:bg-slate-200/90 hover:cursor-pointer shadow-xl border-2 border-solid border-gray-500/70 text-center rounded-full md:w-[10vw] mx-auto">
    <h1 className="pt-[1vh] rounded-full font-semibold" >Explore More...</h1>
    </div>
  </Link>                     
  </div>
  
  <div id="review" className="overflow-x-auto md:overflow-x-visible">
  <h1 className="text-[10vh] ml-[5vw] mt-[10vh] font-papaya ">Our Testinomials</h1>
  <AnimatedTestimonialsDemo  ></AnimatedTestimonialsDemo>
  </div>
  <div id="contact2">
   <div id="contact" className=" sm:h-[70vh] h-full w-full text-black font-semibold sm:flex sm:flex-row flex flex-col sm:gap-64">
                <div className="flex flex-col w-full md:w-[30vw] hover:cursor-default">
                     <div id="heading" className="flex flex-row font-papaya  text-center pl-[10vw]  gap-2">
                         <h1 id="head1" className=" font-bold text-[10vh] text-center">Contact
                         </h1>
                         <h1 id="head2" className=" font-bold text-[10vh]">Us</h1>
                     </div>
                     <div className=" pl-[10vw]">
                        <h1 className="py-1 text-xl">let's work togeather</h1>
                        <div className="flex flex-row gap-4">
                            <FaPhoneAlt className="text-xl" />
                            <h1 className=" text-base">8696213068</h1>
                        </div>
                        <div className="flex flex-row gap-4">
                            {/* <img class="h-[5vh]"src="email1.svg"> */}
                            <IoIosMailOpen className="text-xl"  />
                        <h1 className="text-base">aayushjain1290@gmail.com</h1>
                        </div>
                        <div className="flex flex-row gap-4">
                        <FaLocationDot className="text-xl" />
                        <h1 className="text-base">JCB-115  Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi-110042.</h1>
                        </div>
                     </div>
                </div>
                 <div className="bg-black w-full sm:w-[34vw] sm:px-[2vw] pb-[10vh] ">
                 <div id="form" className="ml-[15vw] sm:ml-0">
                 
                   <form action="https://api.web3forms.com/submit" method="POST">
                       <input type="hidden" name="access_key" value="fb087477-e0b5-492c-ab2f-2527df38056c"></input>
                       <input type="text"
                           class="bg-black/50 text-white w-[60vw] sm:w-[30vw] h-[6vh] pl-4 rounded-full my-1 mt-[12vh]"
                           name="name"
                           placeholder="Enter Your Name" required></input>

                       <input type="email" id="email" class="bg-black/50 text-white w-[60vw] sm:w-[30vw] h-[6vh] pl-4 rounded-full my-1"
                           name="email"
                           placeholder="Enter Your Email" required></input>

                       <input type="text" id="subject"
                           class="bg-black/50 text-white w-[60vw] sm:w-[30vw] h-[6vh] pl-4 rounded-full my-1"
                           name="subject"
                           placeholder="Enter your subject" required></input>

                       <textarea name="message" rows="4"
                           class="bg-black/50 text-white w-[60vw] sm:w-[30vw] h-[6vh] pl-4 pb-[15vh] pt-[2vh] rounded-lg
                           my-1 overflow-y-hidden "
                           placeholder="I would appreciate if you have any recommendation for my website" required></textarea>

                       <input type="submit"
                           class=" hover:cursor-pointer text-black hover:bg-gray-100 w-[60vw]  md:w-[30vw] h-[6vh] md:ml-[20]  bg-white rounded-full shadow-xl font-semibold mt-2  "
                           value="Send"></input>
                   </form>
                   </div>
                 </div>
                 </div>
  </div>
    </div>
    </Suspense>
  );
    
}


     