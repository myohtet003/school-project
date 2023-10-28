// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import {BsCalendar,BsPinFill} from 'react-icons/bs'
import {ImArrowRight} from 'react-icons/im'
import {BiBookOpen,BiMessageDetail} from 'react-icons/bi'
import {MdDoubleArrow} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import Counterbox from '../Components/Counterbox'
import Footer from '../Pages/Footer'
import Calendar from 'react-calendar';
// import ImagesSlider from '../Components/ImagesSlider'
 
const Blog = () => {
  const nav = useNavigate();
  const [date,setDate] = useState(new Date());
  return (
	<div className='container mx-auto'>
    <Navbar/>
     <div className="container  mx-auto mt-[20vh] px-[5rem]">
        <div className="flex items-center justify-start gap-4  ">
          <button onClick={() => nav('/')} className="font-semibold capitalize hover:text-primary text-md text-gray">
            home
          </button>
          <p className=" text-secondary pb-4 text-3xl">.</p>
          <p className="font-semibold capitalize text-md text-para-text-color">
            blog
          </p>
        </div>
        <h1 className=" font-bold text-gray text-4xl">Blog</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className='absolute left-0 top-[9.1rem]'
        >
          <path fill="#f5fcff" opacity="" 
          d="M0,160L80,160C160,160,320,160,480,176C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
      </div>
      <div className="bg-background ">
        <div className=" px-[5rem] flex justify-between gap-10 mt-40 pt-20">
          <div className=" basis-[70%]">
            <div className=" flex-wrap ">
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/girl-doing-homework.jpg' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  This Long-Awaited Technology May Finally Change the World
                  </p>
                  <div className=" pt-3 ms-4 mb-2 px-[2rem] flex justify-between">
                    <div className="flex items-center">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className='text-primary text-sm font-semibold'> featured</div>
                      </div> 
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>teachers</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                  <div className="flex gap-6">
                  <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      English
                    </button>
                    <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      Teachers
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/blog.png' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  The digital revolution in higher education
                  </p>
                  <div className=" pt-3 ms-4 mb-2 flex justify-between px-[2rem]">
                    <div className="flex items-center">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      {/* <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div>  */}
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>class</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className="ps-1 text-gray hover:text-primary text-sm font-semibold">theme</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                  <div className="flex gap-6">
                  <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      Lessons
                    </button>
                    <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      Sherry
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  College is Dying, Design Your Own Education.
                  </p>
                  <div className=" pt-3 ms-4 mb-2 px-[2rem] flex justify-between">
                    <div className="flex items-center">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center ">
                        {/* <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div> */}
                      </div> 
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>teachers</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                  <div className="flex gap-6">
                  <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      English
                    </button>
                    <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      Teachers
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/girl-doing-homework.jpg' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  Gallery Post Format
                  </p>
                  <div className=" pt-3 ms-4 mb-2 px-[2rem] flex justify-between">
                    <div className="flex items-center">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3"> 
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>teachers</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>themes</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-start ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                  <div className=" pt-3 ms-4 mb-2 px-[2rem]">
                    <div className="flex justify-center items-center mt-10">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex justify-center mt-7 gap-3"> 
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>teachers</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>themes</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl mt-3 text-center text-gray'>
                  Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis<br></br>
                  tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam<br></br>
                  maximus interdum. Duis ultrices sapien
                  </p>
                </div>
                <p className="text-primary text-lg font-semibold text-center mt-9">
                Polina Podolski
                </p>
                <div className=" flex justify-center mt-10 pb-10"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                  <p className=' text-center pt-8 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  Link Post Format
                  </p>
                  <div className=" pt-3 ms-4 mb-2 px-[2rem]">
                    <div className="flex justify-center items-center mt-10">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex justify-center mt-7 gap-3"> 
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>teachers</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>themes</div>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center mt-10 pb-10"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/gallery-2.png' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  Organized Classroom Blog from Student
                  </p>
                  <div className=" pt-3 ms-4 mb-2 flex justify-between px-[2rem]">
                    <div className="flex items-center">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      {/* <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div>  */}
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>class</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className="ps-1 text-gray hover:text-primary text-sm font-semibold">theme</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/gallery-1.png' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  Nullam erat dolor, hendrerit id turpis laoreet
                  </p>
                  <div className=" pt-3 ms-4 mb-2 flex justify-between px-[2rem]">
                    <div className="flex items-center">
                      <img src='../Images/gallery-1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      {/* <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div>  */}
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>class</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className="ps-1 text-gray hover:text-primary text-sm font-semibold">theme</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                  <div className="flex gap-6">
                  <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      school
                    </button>
                    <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      teachers
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/blog-1.png' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  Education is the Key to a Better Future
                  </p>
                  <div className=" pt-3 ms-4 mb-2 flex justify-between px-[2rem]">
                    <div className="flex items-center">
                      <img src='../Images/teacher1.png' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      {/* <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div>  */}
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>class</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className="ps-1 text-gray hover:text-primary text-sm font-semibold">theme</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                  <div className="flex gap-6">
                  <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      Lessons
                    </button>
                    <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      Sherry
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-[100%] mb-10 bg-white rounded-2xl hover:shadow-md hover:shadow-blue transform transition duration-150'>
                <div className="">
                    <img src='../Images/blog-2.jpg' className=' w-[100%] rounded-t-2xl border-b-4 border-secondary duration-150 transform hover:border-orange' alt="" />
                </div>
                <div className="">
                  <p className=' pt-8 pb-6 text-gray font-bold text-4xl duration-150 hover:text-primary ms-10'>
                  Status Post Format. Phasellus aliquet felis et dolor lacinia commodo
                  </p>
                  <div className=" pt-3 ms-4 mb-2 flex justify-between px-[2rem]">
                    <div className="flex items-center">
                      <img src='../Images/blog-2.jpg' className='w-7 h-7 rounded-full transform transition 
                      duration-[1s] hover:scale-125' alt="" />
                      <p className='text-gray ps-4 hover:text-primary'>merkulove</p>
                    </div>
                    <div className="flex gap-3">
                      {/* <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsPinFill className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div>  */}
                      <div className="flex items-center ">
                        <div className=" p-2 rounded-full">
                          <BsCalendar className=' text-primary'/>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'> November 28, 2020</div>
                      </div> 
                      <div className="flex items-center">
                        <div className=" p-2">
                          <span className=' text-primary'>#</span>
                        </div>
                        <div className=' text-gray hover:text-primary text-sm font-semibold'>class</div>
                        <div className="">,</div>
                        <div className=' ps-1 text-gray hover:text-primary text-sm font-semibold'>school</div>
                        <div className="">,</div>
                        <div className="ps-1 text-gray hover:text-primary text-sm font-semibold">theme</div>
                      </div> 
                    </div>
                  </div>
                  <p className='text-xl ms-10 pt-3 pb-5 text-gray'>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere.<br></br>
                  Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit<br></br>
                  augue non massa efficitur, varius placerat nibh consectetur. Cras maximus<br></br>
                  semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque.<br></br>
                  ...
                  </p>
                </div>
                <div className="flex justify-between ms-10 me-5 border-t-2 border-blue pt-8 pb-8"> 
                  <div className="">
                    <button className='text-lg w-40 text-white p-2 mt-2 bg-secondary 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                      Read more
                    <ImArrowRight className=' inline-block ps-2 '/>
                    </button>
                  </div>
                  <div className="flex gap-6">
                  <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      English
                    </button>
                    <button className='text-lg w-40 text-secondary hover:text-white p-2 mt-2 bg-background 
                    rounded-2xl hover:bg-btn-gradient duration-150'>
                    <BiBookOpen className=' inline-block me-2 '/>
                      teachers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-[30%]">
            <div className=" flex mb-10 items-center gap-5 bg-white p-4 rounded-xl border border-secondary active:border-primary hover:border-orange">
                <div className="">
                  <FaSearch className=' text-secondary hover:text-primary text-lg'/>
                </div>
                <div className="">
                  <input type="text" className='focus:outline-none ' placeholder='search...' />   
                </div>
            </div>
            <div className="">
              <div className="group">
              <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-16 group-hover:bg-primary duration-150"></p>
              <p className='text-gray font-bold text-xl mb-6 mt-2 '>Categories</p>
              </div>
              <div onClick={() => nav('/about-us')} className="flex items-center justify-start group gap-2 mb-1">
                <p className="w-1 rounded-full h-[4px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
                <span className="text-secondary group-hover:text-primary text-lg font-semibold">English</span>
              </div>
              <div onClick={() => nav('/classes')} className="flex items-center justify-start group gap-2 mb-1">
                <p className="w-1 rounded-full h-[4px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
                <span className="text-secondary group-hover:text-primary text-lg font-semibold">Lessons</span>
              </div>
              <div onClick={() => nav('/teachers')} className="flex items-center justify-start group gap-2 mb-1">
                <p className="w-1 rounded-full h-[4px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
                <span className="text-secondary group-hover:text-primary text-lg font-semibold">Shelly</span>
              </div>
              <div onClick={() => nav('/blog')} className="flex items-center justify-start group gap-2 mb-1">
                <p className="w-1 rounded-full h-[4px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
                <span className="text-secondary group-hover:text-primary text-lg font-semibold">Teachers</span>
              </div>
            </div>
            <div className="group mt-8">
              <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-16 group-hover:bg-primary duration-150"></p>
              <p className='text-gray font-bold text-xl mb-6 mt-2 '>Latest Posts</p>
              <div className=" pb-3 border-b-2 border-blue">
                <img src="../Images/girl-doing-homework.jpg" className=' cursor-pointer w-[300px] rounded-xl' alt="" />
                <p className=' mt-4 text-gray font-semibold text-lg hover:text-primary cursor-pointer'>
                  This Long-Awaited Technology May Finally
                </p>
                <div className="flex items-center ">
                  <div className=" p-2 rounded-full">
                    <BsCalendar className=' text-primary'/>
                  </div>
                  <div className=' ps-2 text-gray text-sm font-semibold'>November 28,2020</div>
                </div> 
              </div>
              <div className=" pb-3 mt-4 border-b-2 border-blue">
                <img src="../Images/blog.png" className=' cursor-pointer w-[300px] rounded-xl' alt="" />
                <p className=' mt-4 text-gray font-semibold text-lg hover:text-primary cursor-pointer'>
                  The digital revolution in higher educati
                </p>
                <div className="flex items-center ">
                  <div className=" p-2 rounded-full">
                    <BsCalendar className=' text-primary'/>
                  </div>
                  <div className=' ps-2 text-gray text-sm font-semibold'>November 28,2020</div>
                </div> 
              </div>
              <div className=" pb-3 border-b-2 border-blue">
                <p className=' mt-4 text-gray font-semibold text-lg hover:text-primary cursor-pointer'>
                College is Dying,Design Your Own Educat
                </p>
                <div className="flex items-center ">
                  <div className=" p-2 rounded-full">
                    <BsCalendar className=' text-primary'/>
                  </div>
                  <div className=' ps-2 text-gray text-sm font-semibold'>November 28,2020</div>
                </div> 
              </div>
              <div className=" pb-3 border-b-2 border-blue">
                <p className=' mt-4 text-gray font-semibold text-lg hover:text-primary cursor-pointer'>
                Gallery Post Fromat
                </p>
                <div className="flex items-center ">
                  <div className=" p-2 rounded-full">
                    <BsCalendar className=' text-primary'/>
                  </div>
                  <div className=' ps-2 text-gray text-sm font-semibold'>November 28,2020</div>
                </div> 
              </div>
              <div className=" border-b-2 border-blue">
                <p className=' mt-4 text-gray font-semibold text-lg hover:text-primary cursor-pointer'>
                Quote Post
                </p>
                <div className="flex items-center ">
                  <div className=" p-2 rounded-full">
                    <BsCalendar className=' text-primary'/>
                  </div>
                  <div className=' ps-2 text-gray text-sm font-semibold'>November 28,2020</div>
                </div> 
              </div>
            </div>
            <div className="group mt-14">
              <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-24 group-hover:bg-primary duration-150"></p>
              <p className='text-gray font-bold text-xl mb-6 mt-2 '>Recent Comments</p>
              <div className="flex">  
                <p className='text-lg text-secondary hover:text-primary'>
                <BiMessageDetail className='inline-block me-2 text-primary'/>merkulove{" "} 
                <span className='text-gray'>on{' '}</span>This Long-<br></br>
                Awaited Technology May Finally Change the World
                </p>
              </div>
            </div>
            <div>
              <div className="group mt-14">
                <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-24 group-hover:bg-primary duration-150"></p>
                <p className='text-gray font-bold text-xl mb-6 mt-2 '>Achieves</p>
              </div>
              <div onClick={() => nav('/teachers')} className="flex items-center justify-start group gap-2 mb-1">
                <p className="w-1 rounded-full h-[4px] bg-secondary relative  group-hover:w-8 group-hover:bg-primary duration-150"></p>
                <span className="text-secondary group-hover:text-primary text-lg font-semibold">November 2020</span>
              </div>
            </div>
            <div className="group mt-14">
              <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-24 group-hover:bg-primary duration-150"></p>
              <p className='text-gray font-bold text-xl mb-6 mt-2 '>Tags</p>
              <div className="">  
                 <div className="flex gap-5 mb-5">
                  <button className='p-1 w-20 rounded-full text-xl text-secondary border-2 border-blue hover:border-primary'>
                    Class
                  </button>
                  <button className='p-1 w-20 rounded-full text-xl text-secondary border-2 border-blue hover:border-primary'>
                    School
                  </button>
                 </div>
                <div className="flex gap-5">
                  <button className='p-1 w-32 rounded-full text-xl text-secondary border-2 border-blue hover:border-primary'>
                    Teachers
                  </button>
                  <button className='p-1 w-24 rounded-full text-xl text-secondary border-2 border-blue hover:border-primary'>
                    Theme
                  </button>
                </div>
              </div>
            </div>
            <div className="group mt-14">
              <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-24 group-hover:bg-primary duration-150"></p>
              <p className='text-gray font-bold text-xl mb-6 mt-2 '>Calendar</p>
              <div className="">
                <Calendar onChange={setDate} value={date} className=" border-none "/>
                {date.toString()}
              </div>
            </div>
            <div className="group mt-14">
              <p className="w-8 rounded-full h-[4px] bg-primary relative group-hover:w-24 group-hover:bg-primary duration-150"></p>
              <p className='text-gray font-bold text-xl mb-6 mt-2 '>Recent Posts</p>
              <div className=" flex items-baseline border-b-2 pb-4 border-blue">
                <MdDoubleArrow className=' text-primary text-lg'/>
                <p className='text-gray font-semibold ps-1 text-lg hover:text-primary'>This Long-Awaitd Technology May Finally Change the World</p>
              </div>
              <div className=" flex items-baseline border-b-2 pb-4 mt-4 border-blue">
                <MdDoubleArrow className=' text-primary text-lg'/>
                <p className='text-gray font-semibold ps-1 text-lg hover:text-primary'>The digital revolution in higher education</p>
              </div>
              <div className=" flex items-baseline border-b-2 pb-4 mt-4 border-blue">
                <MdDoubleArrow className=' text-primary text-lg'/>
                <p className='text-gray font-semibold ps-1 text-lg hover:text-primary'>College is Dying, Design Your Own Education</p>
              </div>
              <div className=" flex items-baseline border-b-2 pb-4 mt-4 border-blue">
                <MdDoubleArrow className=' text-primary text-lg'/>
                <p className='text-gray font-semibold ps-1 text-lg hover:text-primary'>Gallery Post Format</p>
              </div>
              <div className=" flex items-baseline border-b-2 pb-4 mt-4 border-blue">
                <MdDoubleArrow className=' text-primary text-lg'/>
                <p className='text-gray font-semibold ps-1 text-lg hover:text-primary'>Quote Post</p>
              </div>
            </div>
          </div>
        </div>
      <Counterbox/>
      <Footer/>
      </div>
  </div>
  )
}

export default Blog