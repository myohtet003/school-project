// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaPhoneAlt} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import { MdAccessTimeFilled } from 'react-icons/md'
import GoogleMapReact from 'google-map-react';
import Footer from './Footer'
import Navbar from '../Components/Navbar'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const nav = useNavigate();

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
	<div className='container mx-auto '>
    <Navbar/>
    <div className="container  mx-auto mt-[20vh] px-[5rem]">
        <div className="flex items-center justify-start gap-4  ">
          <button onClick={() => nav('/')} className="font-semibold capitalize hover:text-primary text-md text-gray">
            home
          </button>
          <p className=" text-secondary pb-4 text-3xl">.</p>
          <p className="font-semibold capitalize text-md text-para-text-color">
            Contacts
          </p>
        </div>
        <h1 className=" font-bold text-gray text-4xl">Contacts</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className='absolute left-0 top-[9.1rem]'
        >
          <path fill="#f5fcff" opacity="" 
          d="M0,192L40,186.7C80,181,160,171,240,149.3C320,128,400,96,480,112C560,128,640,192,720,218.7C800,245,880,235,960,202.7C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
          </path>
        </svg>
    </div>
    <div className="bg-background">
    <div className="mt-40 pt-20 flex justify-center mb-16">
      <div className=' h-[30rem] w-[90%] rounded-xl'>
        <GoogleMapReact
          src='https://www.google.com/maps/@16.8361984,96.1708032,47574m/data=!3m1!1e3?entry=ttu'
          language='eng'
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      {/* <div>
      <iframe
            scr="https://www.google.com/maps/@16.8361984,96.1708032,47574m/data=!3m1!1e3?entry=ttu"            
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
      </div> */}
    </div>
    <div className="w-[100%] h-[20rem] rounded-[3rem] flex justify-center px-[5rem] gap-10 items-start">
      <div className="lg:w-[40%] md:w-[100%]">
        <div className=" flex-wrap w-[50%]">
          <p className=' text-gray font-bold text-2xl mb-6 ps-8'>contact us</p>
          <div className="flex gap-5 mb-3">
          <FaPhoneAlt className='text-primary mt-1 text-lg'/>
          <div className="">
            <h4 className=' font-bold text-gray'>Call Us</h4>
            <p className=" opacity-0.5 text-gray">+95 09-762256122</p>
          </div>
          </div>
          <div className="flex gap-5 mb-3">
          <MdAccessTimeFilled className='text-primary mt-1 text-lg'/>
          <div className="">
            <h4 className=' font-bold text-gray'>Business hours</h4>
            <p className=" opacity-0.5 text-gray">Mon - Fri 8 AM - 5 PM</p>
          </div>
          </div>
          <div className="flex gap-5">
          <FaLocationDot className='text-primary mt-1 text-lg'/>
          <div className="">
            <h4 className=' font-bold text-gray'>Location</h4>
            <p className=" opacity-0.5 text-gray">Franklin St, Greenpoint Ave</p>
          </div>
          </div>
        </div>
      </div>
      <form action="" className=' lg:w-[60%] md:w-[100%]'>
        <p className='text-gray font-bold text-2xl mb-6'>Talk To a Human</p>
        <div className="lg:flex lg:justify-start gap-10 ">
          <input type="text" placeholder='Your name' required className='w-[17rem] p-2 rounded-xl border-blue duration-200 focus:outline-primary border-2 '/>
          <input type="text" placeholder='Your email' required className='w-[17rem] p-2 rounded-xl border-blue duration-200 focus:outline-primary border-2 ' />
        </div>
        <div className=" mt-7">
          <textarea name="" placeholder=' message' required id="" cols="73" rows="3" className='rounded-xl border-blue focus:outline-blue border-2 p-3 '></textarea>
        </div>
        <button className='text-xl text-white p-2 mt-3 bg-secondary 
        rounded-2xl hover:bg-primary duration-150'>
          send a message
        </button>
      </form>
    </div>
    <Footer className=""/>
    </div>
  </div>
  )
}

export default Contact