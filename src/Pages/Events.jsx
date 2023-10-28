// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'
import {BsCalendar} from 'react-icons/bs'
import {IoMdTime} from 'react-icons/io'
import {CiLocationOn} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import Counterbox from '../Components/Counterbox'
import Footer from './Footer'

const Events = () => {
  const nav =useNavigate();
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
    <div className="bg-background mt-40 pt-20">
      <div className=" gap-y-6 mb-20 px-[5rem]">
        <div className="card mb-8 p-5 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[100%] h-56 rounded-2xl shadow-md pr-7">
          <div className=" flex justify-between">
            <div className="flex gap-8">
              <div className="">
                <img src="../Images/gallery-1.png" className='rounded-xl' alt="" />
              </div>
              <div className="">
                <div className=" flex gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <BsCalendar className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>2022-12-30</div>
                  </div> 
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <IoMdTime className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>12:00</div>
                  </div> 
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">Explore Watercolor Illustration</div>
                <div className=" mt-3 flex items-center">
                  <CiLocationOn className=' text-primary mr-2'/>
                  <p className=' text-gray text-lg font-medium'>25 Grafton St, Worcester</p>
                </div>
              </div>
            </div>
            <div className=" text-primary text-xl font-bold">$8</div>
          </div>
        </div>
        <div className="card mb-8 p-5 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[100%] h-56 rounded-2xl shadow-md pr-7">
          <div className=" flex justify-between">
            <div className="flex gap-8">
              {/* <div className="">
                <img src="../Images/gallery-1.png" className='rounded-xl' alt="" />
              </div> */}
              <div className="">
                <div className=" flex  gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <BsCalendar className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>2022-12-30</div>
                  </div> 
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <IoMdTime className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>12:00</div>
                  </div> 
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">Explore Watercolor Illustration</div>
                <div className=" mt-3 flex items-center">
                  <CiLocationOn className=' text-primary mr-2'/>
                  <p className=' text-gray text-lg font-medium'>25 Grafton St, Worcester</p>
                </div>
              </div>
            </div>
            <div className=" text-primary text-xl font-bold">$8</div>
          </div>
        </div>
        <div className="card mb-8 p-5 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[100%] h-56 rounded-2xl shadow-md pr-7">
          <div className=" flex justify-between">
            <div className="flex gap-8">
              <div className="">
                <img src="../Images/gallery-2.png" className='rounded-xl' alt="" />
              </div>
              <div className="">
                <div className=" flex gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <BsCalendar className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>2022-12-30</div>
                  </div> 
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <IoMdTime className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>12:00</div>
                  </div> 
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">Explore Watercolor Illustration</div>
                <div className=" mt-3 flex items-center">
                  <CiLocationOn className=' text-primary mr-2'/>
                  <p className=' text-gray text-lg font-medium'>25 Grafton St, Worcester</p>
                </div>
              </div>
            </div>
            <div className=" text-primary text-xl font-bold">$8</div>
          </div>
        </div>
        <div className="card mb-8 p-5 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[100%] h-56 rounded-2xl shadow-md pr-7">
          <div className=" flex justify-between ">
            <div className="flex gap-8">
              <div className=" w-[265px] ">
                <img src="../Images/gallery10.2.jpg" className=' w-full rounded-xl' alt="" />
              </div>
              <div className="">
                <div className=" flex gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <BsCalendar className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>2022-12-30</div>
                  </div> 
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <IoMdTime className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>12:00</div>
                  </div> 
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">Explore Watercolor Illustration</div>
                <div className=" mt-3 flex items-center">
                  <CiLocationOn className=' text-primary mr-2'/>
                  <p className=' text-gray text-lg font-medium'>25 Grafton St, Worcester</p>
                </div>
              </div>
            </div>
            <div className=" text-primary text-xl font-bold">$8</div>
          </div>
        </div>
        <div className="card mb-8 p-5 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[100%] h-56 rounded-2xl shadow-md pr-7">
          <div className=" flex justify-between">
            <div className="flex gap-8">
              {/* <div className="">
                <img src="../Images/gallery-1.png" className='rounded-xl' alt="" />
              </div> */}
              <div className="">
                <div className=" flex gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <BsCalendar className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>2022-12-30</div>
                  </div> 
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <IoMdTime className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>12:00</div>
                  </div> 
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">Explore Watercolor Illustration</div>
                <div className=" mt-3 flex items-center">
                  <CiLocationOn className=' text-primary mr-2'/>
                  <p className=' text-gray text-lg font-medium'>25 Grafton St, Worcester</p>
                </div>
              </div>
            </div>
            <div className=" text-primary text-xl font-bold">$8</div>
          </div>
        </div>
        <div className="card mb-8 p-5 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[100%] h-56 rounded-2xl shadow-md pr-7">
          <div className=" flex justify-between">
            <div className="flex gap-8">
              <div className="">
                <img src="../Images/gallery-1.png" className='rounded-xl' alt="" />
              </div>
              <div className="">
                <div className=" flex gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <BsCalendar className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>2022-12-30</div>
                  </div> 
                  <div className="flex items-center">
                    <div className="bg-blue p-2 rounded-full">
                      <IoMdTime className=' text-secondary'/>
                    </div>
                    <div className=' ps-3 text-secondary text-sm font-semibold'>12:00</div>
                  </div> 
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">Explore Watercolor Illustration</div>
                <div className=" mt-3 flex items-center">
                  <CiLocationOn className=' text-primary mr-2'/>
                  <p className=' text-gray text-lg font-medium'>25 Grafton St, Worcester</p>
                </div>
              </div>
            </div>
            <div className=" text-primary text-xl font-bold">$8</div>
          </div>
        </div>
      </div>
      <Counterbox/>
      <Footer/>
    </div>
  </div>
  )
}

export default Events