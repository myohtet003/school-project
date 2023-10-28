// eslint-disable-next-line no-unused-vars
import React from 'react'
import CountUp from 'react-countup'

const Counterbox = () => {
 
  return (
	<>
	<div className=" bg-bubble-1-gradient 
		mx-[5rem] w-[87%] h-[20rem] 
		rounded-[3rem] flex items-center justify-evenly">
		<div className="">
		<p className=" text-[2.3rem] text-white font-bold ">Join us {" "} <span className='block'>and stay tuned!</span></p>
		<button className='text-xl text-white p-2 w-[7rem] bg-secondary 
		rounded-2xl hover:bg-orange duration-150'>
			graduate
		</button>
		</div>
		<div className=" text-white font-bold">
			<CountUp end={570} start={0} duration={1} className=' text-[3.5rem]'/>
			<p className="text-2xl">Graduated</p>
		</div>
		<div className=" text-white font-bold">
			<CountUp end={27} start={0} duration={1} className=' text-[3.5rem]'/>
			<p className="text-2xl">Teachers</p>
		</div>
		<div className=" text-white font-bold">
			<CountUp end={11} start={0} duration={1} className=' text-[3.5rem]'/>
			<p className="text-2xl">Awards</p>
		</div>
	</div>
	</>
  )
}

export default Counterbox