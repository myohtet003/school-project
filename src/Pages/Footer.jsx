// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdAccessTimeFilled} from 'react-icons/md'
import {FaLocationDot} from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import {BsCalendar} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {

	const nav = useNavigate();
  return (
	<>
	<div className=" mt-20 px-[5rem] container flex justify-between mx-auto w-[100%] ">
		<div className="  basis-1/2 flex">
			<div className=" flex-wrap w-[50%]">
				<p className=' text-gray font-bold text-2xl mb-6 '>contact us</p>
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
			<div className=" w-[50%]">
				<p className='text-gray font-bold text-2xl mb-6 '>quick links</p>
				<div onClick={() => nav('/about-us')} className="flex items-center justify-start group gap-2 mb-1">
					<p className="w-6 h-[2px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
					<span className="text-secondary group-hover:text-primary text-lg font-semibold">About Us</span>
				</div>
				<div onClick={() => nav('/classes')} className="flex items-center justify-start group gap-2 mb-1">
					<p className="w-6 h-[2px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
					<span className="text-secondary group-hover:text-primary text-lg font-semibold">Our Classes</span>
				</div>
				<div onClick={() => nav('/teachers')} className="flex items-center justify-start group gap-2 mb-1">
					<p className="w-6 h-[2px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
					<span className="text-secondary group-hover:text-primary text-lg font-semibold">School Teachers</span>
				</div>
				<div onClick={() => nav('/blog')} className="flex items-center justify-start group gap-2 mb-1">
					<p className="w-6 h-[2px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
					<span className="text-secondary group-hover:text-primary text-lg font-semibold">Recent Events</span>
				</div>
				<div onClick={() => nav('/events')} className="flex items-center justify-start group gap-2">
					<p className="w-6 h-[2px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
					<span className="text-secondary group-hover:text-primary text-lg font-semibold">Our news</span>
				</div>
			</div>

		</div>
		<div className=" basis-1/2">
			<div className="flex items-center pb-6 border-blue border-b-2">
				<img src="../Images/girl-doing-homework.jpg" className=' w-[8rem] h-[5rem] rounded-2xl me-3' alt="" />
				<div className="">
					<p className=' text-gray hover:text-primary font-semibold text-xl mb-3'>
						This Long-Awaited Technology May Finally
					</p>
					<div className=" flex items-center">
						<BsCalendar className=' mr-4 text-primary text-sm'/>
						<p className=' text-gray '>November 28, 2020</p>
					</div>
				</div>
			</div>
			<div className="flex items-center pt-6">
				<img src="../Images/blog.png" className=' w-[8rem] h-[5rem] rounded-2xl me-3' alt="" />
				<div className="">
					<p className=' text-gray hover:text-primary font-semibold text-xl mb-3'>					
						The digital revolution in higher educati
					</p>
					<div className=" flex items-center">
						<BsCalendar className=' mr-4 text-primary text-sm'/>
						<p className=' text-gray '>November 28, 2020</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className=" mt-14 pt-14 border-t-2 border-blue flex pb-24 mx-auto justify-between w-[90%]">
		<div className=" text-gray">
		© Copyrights 2021 Shelly All rights reserved
		</div>
		<div className=' flex items-center gap-10'>
			<a target='_blank' onClick={() => nav('/teachers')} className=' w-9 h-9 rounded-full 
			border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary 
			border-primary grid place-items-center'>
				<AiOutlineTwitter className='hover:text-white text-primary text-xl'/>
			</a>
			<a target='_blank' onClick={() => nav('/teachers')} className='w-9 h-9 rounded-full 
			border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary 
			border-primary grid place-items-center'>
				<FaFacebookF className='hover:text-white text-primary text-xl'/>
			</a>
			<a target='_blank' onClick={() => nav('/teachers')} className=' w-9 h-9 rounded-full 
			border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary 
			border-primary grid place-items-center'>
				<BiLogoLinkedin className='hover:text-white text-primary text-xl'/>
			</a>
		</div>

	</div>
	</>
  )
}

export default Footer