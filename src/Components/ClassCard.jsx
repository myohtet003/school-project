// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Records from '../Pages/classes.json'
import {BsCalendar} from 'react-icons/bs'
import {IoMdTime} from 'react-icons/io'

const ClassCard = ({record}) => {
  return (
<>
	<div className=' w-[22rem] h-[29rem] bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
   <div className="">
      <img src={record?.image} className=' w-[100%] rounded-t-2xl border-b-4 border-primary duration-150 transform hover:border-orange' alt="" />
   </div>
   <p className=' pt-6 text-gray font-bold text-2xl duration-150 hover:text-primary ms-5'>{record?.name}</p>
   <div className=" pt-3 ms-4 mb-2 flex justify-start">
    <div className="flex gap-4">
      <div className="flex items-center ">
        <div className=" p-2 rounded-full">
          <BsCalendar className=' text-primary'/>
        </div>
        <div className=' ps-2 text-gray text-sm font-semibold'>{record?.date}</div>
      </div> 
      <div className="flex items-center">
        <div className=" p-2">
          <IoMdTime className=' text-primary'/>
        </div>
        <div className=' ps-1 text-gray text-sm font-semibold'>{record?.time}</div>
      </div> 
    </div>
   </div>
   <div className="flex justify-between ms-5 me-5 border-t-2 border-blue pt-3">
    <div className="flex items-center">
       <img src={record?.teacher_image} className='w-7 h-7 rounded-full transform transition 
       duration-[1s] hover:scale-125' alt="" />
       <p className='text-gray ps-4 hover:text-primary'>{record?.teacher_name}</p>
    </div>
    <div className=" text-primary font-bold text-xl">${record?.price}</div>
   </div>
  </div>
  </>
  )
}

export default ClassCard