// eslint-disable-next-line no-unused-vars
import React from 'react'

const FormComponent = () => {
  return (
    <div className=" bg-bubble-1-gradient 
		w-[100%] h-[20rem] 
		rounded-[3rem] flex justify-start ps-16 gap-10 items-center">
      <div className="lg:w-[40%] md:w-[100%]">
        <div className="">
          <p className=" text-[2rem] mb-3 text-white font-bold ">Join us {" "} 
          <span className='block'>and stay tuned!</span></p>
          <p className=" text-white font-semibold text-lg">Curation active learning ecosystem learning {" "}<br></br>
          content management system lxd lxp rapid{" "}<br></br> learning </p>
        </div>
      </div>
      <form action="" className=' lg:w-[50%] md:w-[100%]'>
        <div className="lg:flex block gap-10 md:gap-y-5">
          <input type="text" placeholder='Your name' required className=' p-4 rounded-xl focus:outline-none'/>
          <input type="text" placeholder='Your email' required className=' p-4 rounded-xl focus:outline-none' />
        </div>
        <div className=" mt-7">
          <textarea name="" placeholder=' message' required id="" cols="58" rows="3" className='rounded-xl p-3 focus:outline-none'></textarea>
        </div>
        <button className='text-xl text-white p-2 mt-3 bg-secondary 
        rounded-2xl hover:bg-primary duration-150'>
          send a message
        </button>
      </form>
    </div>
  )
}

export default FormComponent