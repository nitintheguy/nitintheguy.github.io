import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      scale:1.2,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
    scale: 1,
    duration: 0.5,
    ease: "power2.inOut",
    }).to(".vi-mask-group", {
      scale: 15,
      z:1000,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onStart:()=>{
document.querySelector(".svg").computedStyleMap.perspective="1000px"
      },
      onUpdate: function () {
        if (this.progress() >= 0.85) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });



useGSAP(()=>{

if(!showContent) return;

 gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".skies", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    },'<');

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    },'<');

    gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "0%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    },'<');

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });



   const main=document.querySelector(".main");

   main?.addEventListener("mousemove", function(e){
    const xMove=(e.clientX/window.innerWidth - 0.5)*40;
    gsap.to(".main .text",{
      x:`${xMove*0.4}%`,
    });
    gsap.to(".skies",{
      x:xMove,
    });
    gsap.to(".bg",{
      x:xMove*1.7,
    });
   });
},[showContent]);


  return (
    <>
     <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]" style={{transformStyle:"preserve-3d"}}>
      
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./building.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
<div className='landing overflow-hidden relative w-full h-screen bg-black'>
  <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
    <div className='logo flex gap-7'>
      <div className='lines flex flex-col gap-[5px]'>
        <div className='line w-15 h-2 bg-white'></div>
        <div className='line w-8 h-2 bg-white'></div>
        <div className='line w-5 h-3 bg-white'></div>
      </div>
      <h3 className='text-3xl -mt-[5px] leading-none text-white'>ROCKSTAR</h3>
    </div>
  </div>
  
  <div className='imagesdiv relative overflow-hidden w-full h-screen'>
    <img className='skies scale-[1.7] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover' src="./skies.png"/>
    <img className=' bg scale-[1.8] rotate-[35deg] absolute top-0 left-0 w-full h-full object-cover' src="./building.png" alt="background-Building"/>
    <div className='text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[10deg]'>
    <h1 className='text-[10rem] leading-none -ml-40'>Grand</h1>
    <h1 className='text-[10rem] leading-none ml-20'>Theft</h1>
    <h1 className='text-[10rem] leading-none -ml-40'>Auto</h1>
  </div>
    <img className='character absolute left-1/2 -translate-x-1/2 scale-[2.5] rotate-[-20deg] z-[5] max-w-[40%] max-h-[60vh]' src="./girl.png"/>
  
  
  
  </div>
<div className='bottombar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent'>
<div className='flex gap-4 items-center'>

  <i className="text-4xl ri-arrow-down-line"></i>
  <h3 className='text-xl font-[Helvetica_Now_Display]'>Scroll Down</h3>
  </div>

  <img className=" absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10]"src="./ps5.png" alt="" />
  </div>
        </div>
        <div className='w-full h-screen flex px-10 flex items-center justify-center bg-black'>
          <div className='cntnr flex text-white w-full h-[80%]'>
            <div className='limg relative w-1/2 h-full'>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'src='./imag.png'/>
             </div>
             <div className='rg w-[30%]'>
              <h1 className='text-8xl'>You're a sunflower,</h1>
              <h1 className='text-8xl'>I think your love would be too much.</h1>
              <button className='bg-yellow-500 px-10 py-9 text-black'>Download Now</button>
             </div>
          </div>
             
        </div>
        </div>
      )}
    </>
  );
}

export default App