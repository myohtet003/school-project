// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImagesSlider = () => {
	const images = [
		{
			id:1,
			img:'https://shelly.merku.love/wp-content/uploads/2020/11/blog-large6-870x580.png'
		},
		{
			id:2,
			img:'https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5-870x580.png'
		},
		{
			id:3,
			img:'https://shelly.merku.love/wp-content/uploads/2020/11/blog-large8-870x580.png'
		}
	]
		
  return (
	<div>
		<Swiper
		modules={[Navigation, Pagination, Autoplay]}
		spaceBetween={10}
		slidesPerView={1}
		loop={true}
			
            autoplay={{
				delay: 3000,
				pauseOnMouseEnter: true
            }}
            navigation
			pagination={{ clickable: true }}
		className=''
    >
		<div className="">
			{
				images?.map((image,index) => {
					console.log(image.img);
					<SwiperSlide pauseonmouseenter='true' key={image.id} image virtualIndex={index} className=' pb-4 pt-4'>
					{/* <img key={image.id} image={image}/> */}
						<img src={image?.img} key={image.id} className='-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
					</SwiperSlide>
				})
			}
				
		</div>
	</Swiper>
	</div>
  )
}

export default ImagesSlider