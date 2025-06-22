// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { useState } from "react";

import Footer from "./Footer";
import { HiSearch } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { BsCalendar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";

// import { useNavigate } from 'react-router-dom'
import Slider from "../Components/Slider";
import FormComponent from "../Components/FormComponent";

const Home = () => {
  const nav = useNavigate();
  const containerRef = useRef(null);

  // const [MousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  // const [MousePosition1, setMousePosition1] = useState({ left: 0, top: 0 });
  // const [MousePosition2, setMousePosition2] = useState({ left: 0, top: 0 });
  // const [MousePosition3, setMousePosition3] = useState({ left: 0, top: 0 });

  //       function handleMouseMove(ev) {
  //     setMousePosition({ left: ev.pageX * 0.4, top: ev.pageY * 0.4});
  //     setMousePosition1({ left: ev.pageX * 0.3, top: ev.pageY * 0.3});
  //     setMousePosition2({ left: ev.pageX * 0.2, top: ev.pageY * 0.2});
  //     setMousePosition3({ left: ev.pageX * 0.1, top: ev.pageY * 0.1});
  //       }

  const defaultPositions = [
    { left: 400, top: 50 },
    { left: 200, top: 200 },
    { left: 100, top: 420 },
    { left: 400, top: 450 },
  ];

  const [offsets, setOffsets] = useState([
    { left: 0, top: 0 },
    { left: 0, top: 0 },
    { left: 0, top: 0 },
    { left: 0, top: 0 },
  ]);

  const handleMouseMove = (ev) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = ev.clientX - rect.left - rect.width / 2;
    const offsetY = ev.clientY - rect.top - rect.height / 2;

    setOffsets([
      { left: offsetX * 0.06, top: offsetY * 0.06 },
      { left: offsetX * 0.03, top: offsetY * 0.03 },
      { left: offsetX * 0.02, top: offsetY * 0.02 },
      { left: offsetX * 0.01, top: offsetY * 0.01 },
    ]);
  };

  const handleMouseLeave = () => {
    setOffsets([
      { left: 0, top: 0 },
      { left: 0, top: 0 },
      { left: 0, top: 0 },
      { left: 0, top: 0 },
    ]);
  };

  return (
    <>
      <div className="flex border-b-blue border-b-2 pb-10 justify-around mt-10 mb-10">
        <div className="flex ml-[-7rem] gap-8 items-center">
          <img className=" w-10" src="../Images/logo.png" alt="" />
          <p className="text-gray text-xl font-bold uppercase">shelly</p>
        </div>
        <div className="flex justify-between gap-16">
          <div className="flex gap-5">
            <FaPhoneAlt className="text-primary mt-1 text-lg" />
            <div className="">
              <h4 className=" font-bold text-gray">Call Us</h4>
              <p className=" opacity-0.5 text-gray">+95 09-762256122</p>
            </div>
          </div>
          <div className="flex gap-5">
            <MdAccessTimeFilled className="text-primary mt-1 text-lg" />
            <div className="">
              <h4 className=" font-bold text-gray">Business hours</h4>
              <p className=" opacity-0.5 text-gray">Mon - Fri 8 AM - 5 PM</p>
            </div>
          </div>
          <div className="flex gap-5">
            <FaLocationDot className="text-primary mt-1 text-lg" />
            <div className="">
              <h4 className=" font-bold text-gray">Location</h4>
              <p className=" opacity-0.5 text-gray">
                Franklin St, Greenpoint Ave
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=' w-[97%] ml-auto mr-auto h-0.5 opacity-1 shadow-sm bg-[lightblue] '></div> */}
      <div className="flex items-center justify-between px-5 py-2 my-5 rounded">
        <ul className="flex items-center justify-start gap-10 flex-1">
          <Link to="/">
            <li className="inline-block font-medium relative text-secondary hover:text-primary duration-150 text-xl">
              Home
            </li>
          </Link>

          <li className="text-xl nav-link font-medium  relative  group flex items-center  justify-start gap-2">
            <span
              onClick={() => nav("/about-us")}
              className=" text-secondary duration-150 hover:text-primary"
            >
              About Us
            </span>
          </li>

          <li className="text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1">
            <div
              onClick={() => nav("/classes")}
              className=" flex gap-1 hover:text-primary"
            >
              Classes
              <AiOutlineCaretDown className=" mt-2 text-sm duration-150 hover:text-primary" />
            </div>
            <span
              onClick={() => nav("/class-single")}
              className="absolute pt-2 hidden w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary"
            >
              Class Single
            </span>
          </li>
          <li className="text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1">
            <div
              onClick={() => nav("/teachers")}
              className=" flex gap-1 hover:text-primary"
            >
              Teachers
              <AiOutlineCaretDown className=" mt-2 text-sm duration-150 hover:text-primary" />
            </div>
            <span
              onClick={() => nav("/teacher-single")}
              className="absolute hidden pt-2 w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary"
            >
              Teacher Single
            </span>
          </li>
          <li className="text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1">
            <div
              onClick={() => nav("/events")}
              className=" flex gap-1 hover:text-primary"
            >
              Events
              <AiOutlineCaretDown className=" mt-2 text-sm duration-150 hover:text-primary" />
            </div>
            <span
              onClick={() => nav("/event-single")}
              className="absolute hidden pt-2 w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary"
            >
              Event Single
            </span>
          </li>
          <li className="text-xl nav-link font-medium  text-secondary duration-150 relative  group flex items-center justify-start gap-1">
            <div
              onClick={() => nav("/blog")}
              className=" flex gap-1 hover:text-primary"
            >
              Blog
              <AiOutlineCaretDown className=" mt-2 text-sm duration-150 hover:text-primary" />
            </div>
            <span
              onClick={() => nav("/blog-single")}
              className="absolute hidden pt-2 z-10 w-[10rem] h-[50px] pl-2 bg-white shadow-3xl rounded-b-xl rounded-r-xl top-[30px] left-[0] group-hover:inline-block hover:text-primary"
            >
              Blog Single
            </span>
          </li>

          <li className="text-xl nav-link font-medium group flex items-center  justify-start gap-2">
            <span
              onClick={() => nav("/contact")}
              className=" text-secondary duration-150 hover:text-primary"
            >
              Contact
            </span>
          </li>
        </ul>
        <div className=" flex justify-start  items-center gap-10">
          <a
            target="_blank"
            onClick={() => nav("/teachers")}
            className=" w-8 h-8 rounded-full border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary border-primary grid place-items-center"
          >
            <AiOutlineTwitter className="hover:text-white text-primary text-xl" />
          </a>
          <a
            target="_blank"
            onClick={() => nav("/teachers")}
            className=" w-8 h-8 rounded-full border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary border-primary grid place-items-center"
          >
            <FaFacebookF className="hover:text-white text-primary text-xl" />
          </a>
          <a
            target="_blank"
            onClick={() => nav("/teachers")}
            className=" w-8 h-8 rounded-full border-2 transform transition-0.2s hover:scale-125 duration-150 hover:bg-primary border-primary grid place-items-center"
          >
            <BiLogoLinkedin className="hover:text-white text-primary text-xl" />
          </a>
        </div>
      </div>
      {/* <div onMouseMove={(ev) => handleMouseMove(ev)}
        onMouseEnter={() => setMousePosition(true)}
        onMouseLeave={ ()=>setMousePosition(false)}
        className="container flex items-center gap-10 px-[5rem] mx-auto"> */}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="container flex relative w-full h-[500px] items-center gap-10 px-[5rem] mx-auto overflow-visible"
      >
        <div className="basis-1/2">
          <h1 className="lg:text-7xl md:text-5xl text-4xl text-center font-bold text-header-text-color">
            <span className="lg:block">The Smarter</span> Way to Learn{" "}
            <span className="text-primary md:block">Anything</span>
          </h1>
          <p className="my-8 text-lg  text-para-text-color pl-5 border-l-4 border-primary">
            More than a pixel-perfect WordPress theme: bold design, innovative
            features, developed for education/academic websites.
          </p>
          <div
            className="flex items-center 
              justify-between border hover:border-primary 
              hover:duration-150 border-blue rounded-full px-5 py-4"
          >
            <input
              type="text"
              placeholder="Search here"
              className="focus:outline-none"
              name=""
              id=""
            />
            <a className="w-[2rem] h-[2rem] rounded-full hover:animate__pulse hover:bg-primary border-primary grid place-items-center">
              <HiSearch className="hover:text-white text-secondary text-xl" />
            </a>
          </div>
        </div>
        <div className="basis-1/2 w-full md:grid relative flex sm:hidden place-items-center">
          <img
            src="../Images/hero-1.jpg"
            className="justify-self-start w-[15rem] h-[15rem] animate__animated animate__fadeInUp rounded-full"
            alt=""
          />
          <div className="flex items-center justify-start gap-16">
            <img
              src="../Images/hero-2.jpg"
              className="w-[9rem] h-[9rem] animate__animated animate__fadeInUp rounded-full translate-y-[3rem]"
              alt=""
            />
            <img
              src="../Images/hero-3.jpg"
              className="w-[12rem] h-[12rem] animate__animated animate__fadeInUp rounded-full translate-y-[-3rem]"
              alt=""
            />
          </div>
          <img
            src="../Images/hero-4.jpg"
            className="w-[6rem] h-[6rem] animate__animated animate__fadeInUp mt-8 rounded-full"
            alt=""
          />
          {/* <div className="">
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className=" absolute w-[8rem] h-[8rem] top-[2rem] right-[7rem] rounded-full bg-primary"></div>
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className="absolute w-[5rem] h-[5rem] top-[16rem] left-[1rem] rounded-full bg-orange"></div>
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className="absolute w-[4rem] h-[4rem] top-[10rem] right-[20rem] rounded-full bg-[orange]"></div>
                  <div style={{left:MousePosition.left, top: MousePosition.top}} className="absolute w-[3rem] h-[3rem] bottom-[0.5rem] left-[10rem] rounded-full bg-primary"></div>
              </div> */}

          {/* <div className="">
          <div  
             onMouseLeave={ ()=>setMousePosition(false)}
            style={{ left: (MousePosition.left) , top: (MousePosition.top)}}
            className="absolute opacity-70 w-[8rem] h-[8rem] top-[2rem] right-[7rem] rounded-full bg-bubble-1-gradient"
          ></div>
          <div
            onMouseLeave={ ()=>setMousePosition1(false)}
            style={{ left: (MousePosition1.left) , top: (MousePosition1.top) }}
            className="absolute opacity-70 w-[5rem] h-[5rem] top-[16rem] left-[1rem] rounded-full bg-orange"
          ></div>
          <div 
            onMouseLeave={ ()=>setMousePosition2(false)}
            style={{ left: (MousePosition2.left), top: (MousePosition2.top)}}
            className="absolute opacity-70 w-[4rem] h-[4rem] top-[10rem] right-[20rem] rounded-full bg-[orange]"
          ></div>
          <div
            onMouseLeave={ ()=>setMousePosition3(false)}
            style={{ left: (MousePosition3.left), top: (MousePosition3.top)}}
            className="absolute opacity-70 w-[3rem] h-[3rem] bottom-[0.5rem] left-[10rem] rounded-full bg-primary"
          ></div>
        </div>       */}

          {defaultPositions.map((pos, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${
            index === 0
              ? "bg-orange w-[120px] h-[120px]"
              : index === 1
              ? "bg-yellow w-[80px] h-[80px]"
              : index === 2
              ? "bg-orange w-[60px] h-[60px]"
              : "bg-orange w-[40px] h-[40px]"
          }`}
          style={{
            left: pos.left + offsets[index].left,
            top: pos.top + offsets[index].top,
            transition: "all 0.1s linear",
          }}
        ></div>
      ))}
        </div>
      </div>
      <div className=" bg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" absolute top-[41.6rem]"
        >
          <path
            fill="#f5fcff"
            opacity=""
            d="M0,192L40,186.7C80,181,160,171,240,149.3C320,128,400,96,480,112C560,128,640,192,720,218.7C800,245,880,235,960,202.7C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <section className=" mt-48 px-[5rem]">
          <div className=" container mx-auto ">
            <div className=" flex justify-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#a2d9ff" d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,128C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
              </svg> */}
              <div className=" text-center">
                <p className="text-gray font-bold text-5xl">
                  Welcome To <span className=" text-primary">Sherry</span>
                </p>
                <p className=" mt-8 text-gray font-normal text-lg">
                  Ecosystem blended learning off-the-shelf learning storytelling
                  explainer<br></br>animation completion criteria.
                </p>
              </div>
            </div>
            <div className=" flex mt-5 gap-5 items-center justify-center">
              <div className=" w-80 h-56 bg-white text-gray p-5 text-center relative rounded-3xl hover:shadow-lg hover:shadow-blue">
                <img
                  src="../Images/teacher.svg"
                  className="w-10 rounded-full mx-auto my-3"
                  alt=""
                />
                <div className=" absolute w-10 opacity-50 hover:opacity-70 h-10 transform duration-[2s] rounded-full top-[2.2rem] left-[9.6rem] bg-primary"></div>
                <h3 className="  font-bold text-2xl mt-3 mb-3">
                  Experienced Teachers
                </h3>
                <p className=" ">
                  Morbi vel augue et metus <br></br> pellentesque lacinia eu non
                  odio.
                </p>
              </div>
              <div className=" w-80 bg-white text-gray p-5 text-center rounded-3xl hover:shadow-lg hover:shadow-blue">
                <img
                  src="../Images/kids-at-lesson.jpg"
                  className=" h-[150px] rounded-full mx-auto my-3"
                  alt=""
                />
                <h3 className="  font-bold text-2xl mt-3 mb-3">
                  Best <br></br> Learning Programm
                </h3>
                <p className=" mb-6 ">
                  Morbi vel augue et metus <br></br> pellentesque lacinia eu non
                  odio.
                </p>
                <button
                  className=" border-2 border-primary text-lg text-primary font-semibold rounded-full 
                text-center py-2 px-4 transform transition duration-[0.5s] 
                hover:scale-90 hover:text-white hover:bg-btn-gradient"
                >
                  Learn more
                </button>
              </div>
              <div className=" w-80 h-56 bg-white relative text-gray p-5 text-center rounded-3xl hover:shadow-lg hover:shadow-blue">
                <img
                  src="../Images/certificate.svg"
                  className="w-10 rounded-full mx-auto my-3"
                  alt=""
                />
                <div className=" absolute w-10 opacity-50 hover:opacity-70 h-10 rounded-full transform duration-[2s] top-[2.2rem] left-[9.6rem] bg-primary"></div>
                <h3 className="  font-bold text-2xl mt-3 mb-3">
                  Global Certificate
                </h3>
                <p className=" ">
                  Etiam risus neque, volutpat vel <br></br> laoreet a, finibus
                  volutpa.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[5rem]">
          <div className=" container mx-auto ps-4 pt-32 gap-10 flex justify-between">
            <div className=" basis-1/2  ">
              <div className="">
                <h1 className="lg:text-5xl md:text-5xl text-5xl font-bold text-header-text-color">
                  Upcoming <span className="text-primary">Event</span>
                </h1>
                <p className="my-8 text-lg  text-para-text-color pl-5 border-l-4 border-primary">
                  Learning record store (lrs) bite-sized learning avatar{" "}
                  <br></br> elearning, multimedia scenario serious games
                </p>
              </div>
              <div className="hidden md:flex items-start justify-between gap-8 flex-1 mt-8">
                <div className="">
                  <img
                    className=" max-h-[100%] rounded-2xl"
                    src="../Images/gallery-12-1.jpg"
                    alt=""
                  />
                </div>
                <div className="basis-1/3 pb-[-2rem] self-end ">
                  <img
                    src="../Images/gallery-12-2.jpg"
                    className="max-h-[100%] rounded-2xl"
                    alt=""
                  />
                  <img
                    src="../Images/gallery-12-3.jpg"
                    className="max-h-[100%] rounded-2xl mt-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" basis-1/2 flex-wrap  ">
              <div className="card mb-8 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[80%] h-56 rounded-2xl shadow-md pr-7">
                <div className=" flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <div className="bg-blue p-2 rounded-full">
                        <BsCalendar className=" text-secondary" />
                      </div>
                      <div className=" ps-3 text-secondary text-sm font-semibold">
                        2022-12-30
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue p-2 rounded-full">
                        <IoMdTime className=" text-secondary" />
                      </div>
                      <div className=" ps-3 text-secondary text-sm font-semibold">
                        12:00
                      </div>
                    </div>
                  </div>
                  <div className=" text-primary text-xl font-bold">$8</div>
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">
                  Explore Watercolor Illustration
                </div>
                <div className="flex mt-3 items-center">
                  <CiLocationOn className=" text-primary mr-2" />
                  <p className=" text-gray text-lg font-medium">
                    25 Grafton St, Worcester
                  </p>
                </div>
              </div>
              <div className="card lg:ml-8 mb-8 bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[80%] h-56 rounded-2xl shadow-md pr-7">
                <div className=" flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <div className="bg-blue p-2 rounded-full">
                        <BsCalendar className=" text-secondary" />
                      </div>
                      <div className=" ps-3 text-secondary text-sm font-semibold">
                        2022-12-30
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue p-2 rounded-full">
                        <IoMdTime className=" text-secondary" />
                      </div>
                      <div className=" ps-3 text-secondary text-sm font-semibold">
                        11AM to 15PM
                      </div>
                    </div>
                  </div>
                  <div className=" text-primary text-xl font-bold">$16</div>
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">
                  Environment Conference
                </div>
                <div className="flex mt-3 items-center">
                  <CiLocationOn className=" text-primary mr-2" />
                  <p className=" text-gray text-lg font-medium">
                    9 Grafton St, Worcester
                  </p>
                </div>
              </div>
              <div className="card bg-white hover:shadow-lg hover:shadow-blue ps-7 pt-8 w-[80%] h-56 rounded-2xl shadow-md pr-7">
                <div className=" flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <div className="bg-blue p-2 rounded-full">
                        <BsCalendar className=" text-secondary" />
                      </div>
                      <div className=" ps-3 text-secondary text-sm font-semibold">
                        2022-12-30
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue p-2 rounded-full">
                        <IoMdTime className=" text-secondary" />
                      </div>
                      <div className=" ps-3 text-secondary text-sm font-semibold">
                        17:00
                      </div>
                    </div>
                  </div>
                  <div className=" text-primary text-xl font-bold">$free</div>
                </div>
                <div className=" mt-5 text-gray hover:text-primary text-2xl font-bold">
                  Digital Transformation Conference
                </div>
                <div className="flex mt-3 items-center">
                  <CiLocationOn className=" text-primary mr-2" />
                  <p className=" text-gray text-lg font-medium">
                    88 Grafton St, Worcester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-32">
          <div className=" container mx-auto ">
            <div className=" flex justify-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#a2d9ff" d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,128C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                  </path>
                </svg> */}
              <div className=" text-center">
                <p className="text-gray font-bold text-5xl">
                  Our <span className=" text-primary">Classes</span>
                </p>
                <p className=" mt-8 text-gray font-normal text-lg">
                  Application programming interface voice-over (vo) instructor
                  led training
                  <br></br>curation, user created content
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-[5rem] my-14">
            <Slider className="" />
          </div>
        </section>
        <section className=" pt-12 px-[5rem]">
          <div className=" container mx-auto ">
            <div className=" flex justify-center">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#a2d9ff" d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,128C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
              </path>
            </svg> */}
              <div className=" text-center">
                <p className="text-gray font-bold text-5xl">
                  Study Process <span className=" text-primary"> Gallery</span>
                </p>
                <p className=" mt-8 text-gray font-normal text-lg">
                  Instructor led training digital learning cbt completion
                  criteria learning
                  <br></br>management system cognitive load byod self-directed
                  learning knowledge
                </p>
              </div>
            </div>
            <div className=" flex mx-auto mt-16 justify-start gap-5 ">
              <div className=" w-[17%] h-[30rem] relative ">
                <div className="w-20 h-16 bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 top-28 right-0 absolute rounded-xl overflow-hidden duration-200">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-1.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" w-40 h-[16rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 bottom-7 right-0 absolute rounded-xl overflow-hidden duration-200">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10.2.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" w-[22%] h-[30rem] relative">
                <div
                  className=" h-[20rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 
              group-hover:z-10 top-0 left-0 
              absolute rounded-xl overflow-hidden duration-200"
                >
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-3.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className=" w-[12rem] h-[9rem] bg-orange group bg-opacity-0 
                group-hover:bg-opacity-30 group-hover:z-10 bottom-0 
                left-0 absolute rounded-xl overflow-hidden duration-200"
                >
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-4.png"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" w-[13%] h-[30rem] relative ">
                <div className="w-40 h-[16rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 top-7 left-0 absolute rounded-xl overflow-hidden duration-200 float-right">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-5.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" w-[7rem] h-[7rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 bottom-16 left-0 absolute rounded-xl overflow-hidden duration-200 float-right">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-6.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" w-[15%] h-[30rem] relative ">
                <div className="w-[7rem] h-[5rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 top-16 left-0 absolute rounded-xl overflow-hidden duration-200 float-right">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-7.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" w-46 h-[15rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 bottom-20 left-0 absolute rounded-xl overflow-hidden duration-200 float-right">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-8.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" w-[15%] h-[30rem] relative ">
                <div className="w-[17rem] h-[12rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 top-0 let-0 absolute rounded-xl overflow-hidden duration-200 float-right">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-9.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" w-52 h-[14rem] bg-orange group bg-opacity-0 group-hover:bg-opacity-30 group-hover:z-10 bottom-12 left-0 absolute rounded-xl overflow-hidden duration-200 float-right">
                  <div className=" w-full h-full">
                    <img
                      src="../Images/gallery10-10.jpg"
                      className=" object-cover h-[100%] rounded-lg group-hover:scale-110 duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12 px-[5rem]">
          <div className="container mx-auto ">
            <div className=" flex justify-center">
              <div className=" text-center">
                <p className="text-gray font-bold text-5xl">
                  Our Awesome <span className=" text-primary"> Teachers</span>
                </p>
                <p className=" mt-8 text-gray font-normal text-lg">
                  Rapid learning rapid authoring tools web based training (wbt)
                  informal
                  <br></br>learning virtual classroom, roi instructional
                  designer big data
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 mt-8">
              <div className="xl:basis-1/4 basis-[48%] ">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="../Images/teacher1.png"
                    className=" w-full rounded-2xl hover:scale-110 duration-500"
                    alt=""
                  />
                  <div className="p-4 rounded-full cursor-pointer grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0 group">
                    <FaFacebookF className="text-white group-hover:block hidden" />
                    <FaLinkedinIn className="text-white group-hover:block hidden my-4" />
                    <AiOutlineTwitter className="text-white group-hover:block hidden mb-4" />
                    <FaShareAlt className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl text-gray font-semibold hover:text-primary mt-6">
                    Polina Kerston
                  </h6>
                  <p className="text-secondary">English Teacher</p>
                </div>
              </div>
              <div className="xl:basis-1/4 basis-[48%] ">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="../Images/teacher2.png"
                    className="w-full rounded-2xl hover:scale-110 duration-500"
                    alt=""
                  />
                  <div className="p-4 rounded-full cursor-pointer grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0 group">
                    <FaFacebookF className="text-white group-hover:block hidden" />
                    <FaLinkedinIn className="text-white group-hover:block hidden my-4" />
                    <AiOutlineTwitter className="text-white group-hover:block hidden mb-4" />
                    <FaShareAlt className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl text-gray font-semibold hover:text-primary mt-6">
                    Polina Kerston
                  </h6>
                  <p className="text-secondary">English Teacher</p>
                </div>
              </div>
              <div className="xl:basis-1/4 basis-[48%] ">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="../Images/teacher3.png"
                    className="w-full rounded-2xl hover:scale-110 duration-500"
                    alt=""
                  />
                  <div className="p-4 rounded-full cursor-pointer grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0 group">
                    <FaFacebookF className="text-white group-hover:block hidden" />
                    <FaLinkedinIn className="text-white group-hover:block hidden my-4" />
                    <AiOutlineTwitter className="text-white group-hover:block hidden mb-4" />
                    <FaShareAlt className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl text-gray font-semibold hover:text-primary mt-6">
                    Polina Kerston
                  </h6>
                  <p className="text-secondary">English Teacher</p>
                </div>
              </div>
              <div className="xl:basis-1/4 basis-[48%]  ">
                <div className="relative overflow-hidden rounded-2xl ">
                  <img
                    src="../Images/teacher4.png"
                    className="w-full rounded-2xl hover:scale-110 duration-500"
                    alt=""
                  />
                  <div className="p-4 rounded-full cursor-pointer grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0  group">
                    <FaFacebookF className="text-white group-hover:block hidden" />
                    <FaLinkedinIn className="text-white group-hover:block hidden my-4" />
                    <AiOutlineTwitter className="text-white group-hover:block hidden mb-4" />
                    <FaShareAlt className="text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h6 className="text-2xl text-gray font-semibold hover:text-primary mt-6">
                    Polina Kerston
                  </h6>
                  <p className="text-secondary">English Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24 px-[5rem]">
          <FormComponent />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
