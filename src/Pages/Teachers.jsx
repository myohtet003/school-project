// eslint-disable-next-line no-unused-vars
import React from 'react'
import Records from '../Pages/classes.json'
import TeacherComponent from '../Components/TeacherComponent'
import Footer from './Footer'
import Counterbox from '../Components/Counterbox'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Teachers = () => {
  const nav = useNavigate();
  return (
    <div className=' container mx-auto '>
    <Navbar/>
        <div className="container px-[5rem] mx-auto mt-[20vh]">
          <h1 className=" font-bold text-gray text-5xl">Teachers</h1>
          <div className="flex items-center justify-start gap-4  ">
            <button onClick={() => nav('/')} className="font-semibold capitalize hover:text-primary text-md text-para-text-color">
              home
            </button>
            <p className=" text-secondary pb-4 text-3xl">.</p>
            <p className="font-semibold capitalize text-md text-para-text-color">
              teachers
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 320"
              className='absolute left-0 top-[9.6rem]'
            >
              <path fill="#f5fcff" opacity="" 
              d="M0,192L40,186.7C80,181,160,171,240,149.3C320,128,400,96,480,112C560,128,640,192,720,218.7C800,245,880,235,960,202.7C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
              </path>
            </svg>
        </div>
        <div className='bg-background mt-40 pt-20 px-[5rem] flex justify-between flex-wrap my-10'> 
          {Records?.map((record) => (<TeacherComponent key={record.id} record={record}/>))}
        </div>
        <Counterbox/>
        <Footer/>
  </div>
  )
}

export default Teachers