// eslint-disable-next-line no-unused-vars
import React from 'react'
import {HiSearch} from 'react-icons/hi'
import { useState } from 'react'


const Home = () => {

  const [MousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [MousePosition1, setMousePosition1] = useState({ left: 0, top: 0 });
  const [MousePosition2, setMousePosition2] = useState({ left: 0, top: 0 });
  const [MousePosition3, setMousePosition3] = useState({ left: 0, top: 0 });

  function handleMouseMove(ev) {
setMousePosition({ left: ev.pageX * 0.4, top: ev.pageY * 0.4});
setMousePosition1({ left: ev.pageX * 0.3, top: ev.pageY * 0.3});
setMousePosition2({ left: ev.pageX * 0.2, top: ev.pageY * 0.2});
setMousePosition3({ left: ev.pageX * 0.1, top: ev.pageY * 0.1});
  }

  return (
    < >
     
      <div onMouseMove={(ev) => handleMouseMove(ev)}
      onMouseLeave={ ()=>setMousePosition(false)}
        className="container  flex items-center gap-10 mx-auto">
        
        <div className="basis-1/2">
              <h1 className="lg:text-7xl md:text-5xl text-4xl text-center font-bold text-header-text-color">
                <span className="lg:block">The Smarter</span> Way to Learn {' '}
                <span className="text-primary md:block">Anything</span>
              </h1>
              <p className="my-8 text-lg  text-para-text-color pl-5 border-l-4 border-primary">
                More than a pixel-perfect WordPress theme: bold design, innovative
                features, developed for education/academic websites.
              </p>
              <div className="flex items-center 
              justify-between border hover:border-primary 
              hover:duration-150 border-blue rounded-full px-5 py-4">
                <input
                  type="text"
                  placeholder="Search here"
                  className="focus:outline-none"
                  name=""
                  id=""
                />
                <a className='w-[2rem] h-[2rem] rounded-full hover:animate__pulse hover:bg-primary border-primary grid place-items-center'>
                  <HiSearch className='hover:text-white text-secondary text-xl'/>
                </a>
              </div>
        </div>
        <div className="basis-1/2 w-full md:grid relative flex sm:hidden place-items-center">
              <img
                src="../Images/hero-1.jpg"
                className="justify-self-start w-[15rem] h-[15rem] rounded-full"
                alt=""
              />
              <div className="flex items-center justify-start gap-16">
                <img
                  src="../Images/hero-2.jpg"
                  className="w-[9rem] h-[9rem] rounded-full translate-y-[3rem]"
                  alt=""
                />
                <img
                  src="../Images/hero-3.jpg"
                  className="w-[12rem] h-[12rem] rounded-full translate-y-[-3rem]"
                  alt=""
                />
              </div>
              <img
                src="../Images/hero-4.jpg"
                className="w-[6rem] h-[6rem] mt-8 rounded-full"
                alt=""
              />
              {/* <div className="">
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className=" absolute w-[8rem] h-[8rem] top-[2rem] right-[7rem] rounded-full bg-primary"></div>
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className="absolute w-[5rem] h-[5rem] top-[16rem] left-[1rem] rounded-full bg-orange"></div>
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className="absolute w-[4rem] h-[4rem] top-[10rem] right-[20rem] rounded-full bg-[orange]"></div>
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className="absolute w-[3rem] h-[3rem] bottom-[0.5rem] left-[10rem] rounded-full bg-primary"></div>
              </div> */}

        <div className="">
          <div  
      onMouseLeave={ ()=>setMousePosition(false)}

            style={{ left: (MousePosition.left) , top: (MousePosition.top)}}
            className="absolute w-[8rem] h-[8rem] top-[2rem] right-[7rem] rounded-full bg-bubble-1-gradient"
          ></div>
          <div
            onMouseLeave={ ()=>setMousePosition1(false)}
            style={{ left: (MousePosition1.left) , top: (MousePosition1.top) }}
            className="absolute w-[5rem] h-[5rem] top-[16rem] left-[1rem] rounded-full bg-orange"
          ></div>
          <div 
            onMouseLeave={ ()=>setMousePosition2(false)}
            style={{ left: (MousePosition2.left), top: (MousePosition2.top)}}
            className="absolute w-[4rem] h-[4rem] top-[10rem] right-[20rem] rounded-full bg-[orange]"
          ></div>
          <div
            onMouseLeave={ ()=>setMousePosition3(false)}
            style={{ left: (MousePosition3.left), top: (MousePosition3.top)}}
            className="absolute w-[3rem] h-[3rem] bottom-[0.5rem] left-[10rem] rounded-full bg-primary"
          ></div>
        </div>
               
        </div>
      </div>
      <section className=' pt-52 bg-slate-300'>
          <div className=" container mx-auto ">
            <div className=" flex justify-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#a2d9ff" d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,128C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
              </svg> */}
              <div className=" text-center">
                <p className='text-gray font-bold text-5xl'>Welcome To <span className=' text-primary'>Sherry</span></p>
                <p className=" mt-8 text-gray font-normal text-lg">Ecosystem blended learning off-the-shelf learning storytelling explainer<br></br>animation completion criteria.</p>
              </div>
            </div>
            <div className=" flex mt-5 gap-5 items-center justify-center">
              <div className=' w-80 h-56 bg-white text-gray p-5 text-center relative rounded-3xl hover:shadow-lg hover:shadow-secondary'>
                <img src="../Images/teacher.svg" className='w-10 rounded-full mx-auto my-3' alt="" />
                <div className=" absolute w-10 opacity-50 hover:opacity-70 h-10 rounded-full top-[2.2rem] left-[9.6rem] bg-primary"></div>
                <h3 className='  font-bold text-2xl mt-3 mb-3'>Experienced Teachers</h3>
                <p className=" ">Morbi vel augue et metus{" "} <br></br> pellentesque lacinia eu non odio.</p>
              </div>
              <div className=' w-80 bg-white text-gray p-5 text-center rounded-3xl hover:shadow-lg hover:shadow-secondary'>
                <img src="../Images/kids-at-lesson.jpg" className=' h-[150px] rounded-full mx-auto my-3' alt="" />
                <h3 className='  font-bold text-2xl mt-3 mb-3'>Best{" "} <br></br> Learning Programm
                </h3>
                <p className=" mb-6 ">Morbi vel augue et metus{" "} <br></br> pellentesque lacinia eu non odio.</p>
                <a href="" className=" border-2 border-primary text-lg text-primary font-semibold rounded-full text-center py-2 px-4 transform transition hover:scale-90 hover:text-white hover:bg-btn-gradient">Learn more</a>
              </div>
              <div className=' w-80 h-56 bg-white relative text-gray p-5 text-center rounded-3xl hover:shadow-lg hover:shadow-secondary'>
                <img src="../Images/certificate.svg" className='w-10 rounded-full mx-auto my-3' alt="" />
                <div className=" absolute w-10 opacity-50 hover:opacity-70 h-10 rounded-full top-[2.2rem] left-[9.6rem] bg-primary"></div>
                <h3 className='  font-bold text-2xl mt-3 mb-3'>Global Certificate
                </h3>
                <p className=" ">Etiam risus neque, volutpat vel {" "} <br></br> laoreet a, finibus volutpa.</p>
              </div>
            </div>
          </div>
      </section>
    </>  
  )
}

export default Home