// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineCaretDown,AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
// import {MdAccessTimeFilled} from 'react-icons/md'
// import {FaLocationDot} from 'react-icons/fa6'
import {BiLogoLinkedin} from 'react-icons/bi'
const Navbar = () => {
	const nav = useNavigate();
  return (
	<>
	{/* <div className='flex border-b-blue border-b-2 pb-10 justify-around mt-10 mb-10'>
      <div className='flex ml-[-7rem] gap-8 items-center'>
        <img className=' w-10' src="../Images/logo.png" alt="" />
        <p className='text-gray text-xl font-bold uppercase'>shelly</p>
      </div>
      <div className="flex justify-between gap-16">
        <div className="flex gap-5">
          <FaPhoneAlt className='text-primary mt-1 text-lg'/>
          <div className="">
            <h4 className=' font-bold text-gray'>Call Us</h4>
            <p className=" opacity-0.5 text-gray">+95 09-762256122</p>
          </div>
        </div>
        <div className="flex gap-5">
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
    </div> */}
	{/* <div className=' w-[97%] ml-auto mr-auto h-0.5 opacity-1 shadow-sm bg-[lightblue] '></div> */}
	<div className='flex items-center justify-between px-5 py-2 my-5 rounded'>
		<ul className='flex items-center justify-start gap-10 flex-1'>
			<Link to="/">
				<li className='inline-block font-medium relative text-secondary hover:text-primary duration-150 text-xl'>Home</li>
			</Link>

			<li className='text-xl nav-link font-medium  relative  group flex items-center  justify-start gap-2'>
				<span onClick={() => nav('/about-us')} className=" text-secondary duration-150 hover:text-primary">About Us</span>
			</li>
			
			<li className='text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1'>	
				<div onClick={() => nav('/classes')} className=" flex gap-1 hover:text-primary">
					Classes
					<AiOutlineCaretDown className=' mt-2 text-sm duration-150 hover:text-primary'/>
				</div>
				<span onClick={() => nav('/class-single')} className='absolute pt-2 hidden w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary'>
					Class Single
				</span>
			</li>
			<li className='text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1'>	
				<div onClick={() => nav('/teachers')} className=" flex gap-1 hover:text-primary">
					Teachers
					<AiOutlineCaretDown className=' mt-2 text-sm duration-150 hover:text-primary'/>
				</div>
				<span onClick={() => nav('/teacher-single')} className='absolute hidden pt-2 w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary'>
					Teacher Single
				</span>
			</li>
			<li className='text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1'>	
				<div onClick={() => nav('/events')} className=" flex gap-1 hover:text-primary">
					Events
					<AiOutlineCaretDown className=' mt-2 text-sm duration-150 hover:text-primary'/>
				</div>
				<span onClick={() => nav('/event-single')} className='absolute hidden pt-2 w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary'>
					Event Single
				</span>
			</li>
			<li className='text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1'>	
				<div onClick={() => nav('/blog')} className=" flex gap-1 hover:text-primary">
					Blog
					<AiOutlineCaretDown className=' mt-2 text-sm duration-150 hover:text-primary'/>
				</div>
				<span onClick={() => nav('/blog-single')} className='absolute hidden pt-2 z-10 w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary'>
					Blog Single 
				</span>
			</li>

			<li className='text-xl nav-link font-medium group flex items-center  justify-start gap-2'>
				<span onClick={() => nav('/contact')} className=" text-secondary duration-150 hover:text-primary">Contact</span>
			</li>
			
		</ul>
		<div className=' flex justify-start  items-center gap-10'>
			<a target='_blank' onClick={() => nav('/teachers')} className=' w-8 h-8 rounded-full border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary border-primary grid place-items-center'>
				<AiOutlineTwitter className='hover:text-white text-primary text-xl'/>
			</a>
			<a target='_blank' onClick={() => nav('/teachers')} className=' w-8 h-8 rounded-full border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary border-primary grid place-items-center'>
				<FaFacebookF className='hover:text-white text-primary text-xl'/>
			</a>
			<a target='_blank' onClick={() => nav('/teachers')} className=' w-8 h-8 rounded-full border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary border-primary grid place-items-center'>
				<BiLogoLinkedin className='hover:text-white text-primary text-xl'/>
			</a>
		</div>
		
	</div>
	</>
  )
}

export default Navbar