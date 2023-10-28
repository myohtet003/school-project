// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaPlus} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
// import { useNavigate } from 'react-router-dom'
const TeacherComponent = ({record}) => {

	// const nav = useNavigate();
	// console.log(record);
  return (
	<div className='flex items-center justify-between gap-6 mt-8'>
		<div className=" w-64 ">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={record?.teacher_image}
                className=" w-full h-[22rem] object-cover rounded-2xl cursor-pointer hover:scale-110 duration-500"
                alt=""
              />
              <div className="p-4 rounded-full cursor-pointer grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0 group">
                <FaFacebookF className="text-white group-hover:block hidden" />
                <FaLinkedinIn className="text-white group-hover:block hidden my-4" />
                <AiOutlineTwitter className="text-white group-hover:block hidden mb-4" />
                <FaPlus className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <h6 className="text-xl font-semibold hover:text-primary text-gray mt-6">{record?.teacher_name}</h6>
              <p className="text-secondary">{record?.teaching_subject}</p>
            </div>
          </div>
	</div>
  )
}

export default TeacherComponent