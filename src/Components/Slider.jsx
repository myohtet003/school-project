 // eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ClassCard from '../Components/ClassCard'
import Records from '../Pages/classes.json'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
  return (
	<>
	<Swiper
		modules={[Navigation, Pagination, Autoplay]}
		spaceBetween={10}
		slidesPerView={3}
		loop={true}
			
            autoplay={{
				delay: 3000,
				pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
		className=''
    >
		<div className="">
			{Records?.map((record, index) => (
				<SwiperSlide pauseonmouseenter='true' key={record.id} virtualIndex={index} className=' pb-4 pt-4'>
					<ClassCard key={record.id} record={record}/>
				</SwiperSlide>
			))}
		</div>
	</Swiper>
	<div className="mt-4 pb-4 flex justify-between">
		<Link to={'/classes'}>
			<button className=' border-2 border-primary text-lg text-primary font-semibold rounded-full 
			text-center py-2 px-4 transform transition duration-[0.5s] 
			hover:scale-90 hover:text-white hover:bg-btn-gradient'>Classes</button>
		</Link>
		<div className="flex gap-5 justify-start me-5">
			<div className="prev w-12 h-12 rounded-full 
			border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary 
			border-primary grid place-items-center">
			<MdOutlineKeyboardArrowLeft className="hover:text-white text-primary text-3xl" />
			</div>
			<div className="next w-12 h-12 rounded-full 
			border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary 
			border-primary grid place-items-center">
			<MdOutlineKeyboardArrowRight className="hover:text-white text-primary text-3xl" />
			</div>
		</div>
  </div>
  </>
  )
}

export default Slider
 