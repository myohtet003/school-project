// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaPenAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Counterbox from '../Components/Counterbox';
import Footer from './Footer';
import Navbar from '../Components/Navbar';

const About_Us = () => {
  const nav = useNavigate();

  const [percent, setPercent] = useState(0);
  const [percent1, setPercent1] = useState(0);

  // const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(percent < 100) {
      setTimeout(() => {
        setPercent(() => 90)
      }, 100);
    }
  })

  useEffect(() => {
    if(percent1 < 100) {
      setTimeout(() => {
        setPercent1(() => 75)
      }, 100);
    }
  })

  return (
	<div className='container mx-auto'>
    <Navbar/>
    <div className="container mx-auto mt-[20vh] px-[5rem]">
        <div className="flex items-center justify-start gap-4  ">
          <button onClick={() => nav('/')} className="font-semibold capitalize hover:text-primary text-md text-gray">
            home
          </button>
          <p className=" text-secondary pb-4 text-3xl">.</p>
          <p className="font-semibold capitalize text-md text-para-text-color">
            About us
          </p>
        </div>
        <h1 className=" font-bold text-gray text-4xl">About Us</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className='absolute left-0 top-[9.1rem]'
        >
          <path fill="#f5fcff" opacity="" 
          d="M0,160L80,160C160,160,320,160,480,176C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
    </div>
    <div className="bg-background">
      <div className="mt-40 pt-20 px-[5rem] flex items-center justify-self-center ">
        <div className="basis-1/2 md:basis-full ">
          <p className='text-gray font-bold text-4xl'>Welcome To<br></br> 
          <span className=' text-primary'>Sherry School</span></p>
          <p className='text-gray font-normal pt-10'>Morbi vel augue et metus pellentesque lacinia eu non
          <br></br> odio. Sed id purus urna. Maecenas ultrices ligula a nisi
          <br></br> dictum tristique. </p>
          <div className="mt-12 bg-[#eee] h-10 w-[27rem] rounded-2xl">
            <div style={{width:`${percent}%`,transition:"width 0.5s"}} className=" h-[100%] flex items-center 
            bg-[#9b51e0] rounded-s-2xl">
              <span className='text-white ps-5'>creative skills</span>
            </div>
          </div>
          <div className="mt-12 bg-[#eee] h-10 w-[27rem] rounded-2xl">
            <div style={{width:`${percent1}%`,transition:"width 0.5s"}} className=" h-[100%] flex items-center 
            bg-[#00d084] rounded-s-2xl transform transition duration-[0.5s] ease-in">
              <span className='text-white ps-5'>Exact sciences</span>
            </div>
          </div>
        </div>
        <div className=" sm:hidden lg:block ">
          <div className="relative">
            <img src="../Images/gallery-15.jpg" className=' w-[55rem] h-[30rem] rounded-full ' alt="" />
            <img src="../Images/gallery-14.jpg" className=' absolute w-40 h-40 rounded-full top-[-5rem] right-52' alt="" />
            <img src="../Images/gallery-16.jpg" className=' absolute w-28 h-28 rounded-full top-24 left-[-2rem]' alt="" />
          </div>
        </div>
      </div>
      <div className="mt-32 px-[5rem] flex items-center justify-between">
        <div className="basis-1/2 sm:basis-full">
          <div className="">
            <img src="../Images/gallery-17.png" className=' w-[30rem] h-[30rem]' alt="" />
            {/* <img src="../Images/gallery-14.jpg" className=' absolute w-40 h-40 rounded-full top-[-5rem] right-52' alt="" /> */}
            {/* <img src="../Images/gallery-16.jpg" className=' absolute w-28 h-28 rounded-full top-24 left-[-2rem]' alt="" /> */}
          </div>
        </div>
        <div className="basis-1/2 sm:basis-full md:flex-row-reverse">
          <p className='text-gray font-bold text-4xl'>Our Mission</p>
          <p className='text-gray font-normal pt-10'>Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel.
          <br></br> Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus
          <br></br> vitae elit ligula. Fusce eu rutrum nisl.</p>

          <div className="flex items-center mt-5 gap-2">
            <FaPenAlt className=' text-primary text-lg'/>
            <p className='text-gray'>Etiam ante nisl, maximus vitae sem non, dignissim</p>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <FaPenAlt className=' text-primary text-lg'/>
            <p className='text-gray'>Donec blandit, sapien eu porttitor blandit</p>
          </div>
          <div className="flex items-center mt-2  gap-2">
            <FaPenAlt className=' text-primary text-lg'/>
            <p className='text-gray'>Sed at urna at massa viverra feugiat non</p>
          </div>
        </div>
      </div>
      <div className="mt-32 px-[5rem] flex items-center mb-16 justify-between">
        <div className="w-[30%] ">
          <p className='text-gray font-bold text-4xl'>Benefits of<br></br> 
          <span className=' text-primary'>Sherry School</span></p>
          <p className='text-gray font-normal pt-10 pb-10'>Morbi vel augue et metus<br></br> pellentesque
             lacinia eu non odio.<br></br> Sed id purus urna. 
             Maecenas<br></br> ultrices ligula a nisi dictum<br></br> tristique. 
             Suspendisse potenti.<br></br> Curabitur egestas ultrices sem, 
             eu<br></br> vestibulum leo sagittis et.</p>
             <button className=" border-2 border-primary text-lg text-primary font-semibold rounded-full 
			        text-center py-2 px-4 transform transition duration-[0.5s] 
			        hover:scale-90 hover:text-white hover:bg-btn-gradient">
              contact us
            </button>
        </div>
        <div className="w-[70%] grid grid-cols-2 gap-y-5">
          <div className=' w-[350px] h-[350px] ps-12 animate__animate animate__fadeInUp transform transition duration-[0.5s] bg-white text-gray p-5 relative rounded-3xl hover:shadow-lg hover:shadow-blue'>
            <img src="../Images/teacher.svg" className='w-12 rounded-full my-7' alt="" />
            <div className=" absolute w-12 opacity-50 hover:opacity-90 h-12 transform 
              duration-[2s] rounded-full top-[3.3rem] left-[3.5rem] bg-orange"></div>
            <h3 className='  font-bold text-xl mt-5 mb-5'>Awesome Tutuors
            </h3>
            <p className=" mb-7 ">Morbi vel augue et metus{" "} <br></br> pellentesque lacinia eu non odio.</p>
            <button className=" border-2 border-primary text-lg text-primary font-semibold rounded-full 
            text-center py-2 px-4 transform transition duration-[0.5s] 
            hover:scale-90 hover:text-white hover:bg-btn-gradient">
              Learn more
            </button>
          </div>
          <div className=' w-[350px] h-[350px] ps-12 animate__animate animate__fadeInUp transform transition duration-[0.5s] bg-white text-gray p-5 relative rounded-3xl hover:shadow-lg hover:shadow-blue'>
            <img src="../Images/certificate.svg" className='w-12 rounded-full my-7' alt="" />
            <div className=" absolute w-12 opacity-50 hover:opacity-90 h-12 transform 
              duration-[2s] rounded-full top-[3.3rem] left-[3.5rem] bg-orange"></div>
            <h3 className='  font-bold text-xl mt-5 mb-5'>Awesome Tutuors
            </h3>
            <p className=" mb-7 ">Morbi vel augue et metus{" "} <br></br> pellentesque lacinia eu non odio.</p>
            <button className=" border-2 border-primary text-lg text-primary font-semibold rounded-full 
            text-center py-2 px-4 transform transition duration-[0.5s] 
            hover:scale-90 hover:text-white hover:bg-btn-gradient">
              Learn more
            </button>
          </div>
          <div className=' w-[350px] h-[350px] ps-12 animate__animate animate__fadeInUp transform transition duration-[0.5s] bg-white text-gray p-5 relative rounded-3xl hover:shadow-lg hover:shadow-blue'>
            <img src="../Images/teacher.svg" className='w-12 rounded-full my-7' alt="" />
            <div className=" absolute w-12 opacity-50 hover:opacity-90 h-12 transform 
              duration-[2s] rounded-full top-[3.3rem] left-[3.5rem] bg-orange"></div>
            <h3 className='  font-bold text-xl mt-5 mb-5'>Awesome Tutuors
            </h3>
            <p className=" mb-7 ">Morbi vel augue et metus{" "} <br></br> pellentesque lacinia eu non odio.</p>
            <button className=" border-2 border-primary text-lg text-primary font-semibold rounded-full 
            text-center py-2 px-4 transform transition duration-[0.5s] 
            hover:scale-90 hover:text-white hover:bg-btn-gradient">
              Learn more
            </button>
          </div>
          <div className=' w-[350px] h-[350px] ps-12 animate__animate animate__fadeInUp transform transition duration-[0.5s] bg-white text-gray p-5 relative rounded-3xl hover:shadow-lg hover:shadow-blue'>
            <img src="../Images/teacher.svg" className='w-12 rounded-full my-7' alt="" />
            <div className=" absolute w-12 opacity-50 hover:opacity-90 h-12 transform 
              duration-[2s] rounded-full top-[3.3rem] left-[3.5rem] bg-orange"></div>
            <h3 className='  font-bold text-xl mt-5 mb-5'>Awesome Tutuors
            </h3>
            <p className=" mb-7 ">Morbi vel augue et metus{" "} <br></br> pellentesque lacinia eu non odio.</p>
            <button className=" border-2 border-primary text-lg text-primary font-semibold rounded-full 
            text-center py-2 px-4 transform transition duration-[0.5s] 
            hover:scale-90 hover:text-white hover:bg-btn-gradient">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <Counterbox/>
      <Footer/>
    </div>
  </div>
  )
}

export default About_Us