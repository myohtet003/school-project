// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

const Animation = () => {
	
	const [mouseEnter, setMouseEnter] = useState(false);

  return (
	<>
		<div
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}>

		</div>
		{mouseEnter && (
			<div className="">
			<div className=" absolute translate-x-[-50%] translate-y-[-50%] w-[8rem] h-[8rem] top-[2rem] right-[7rem] rounded-full bg-primary"></div>
			<div className="absolute w-[5rem] h-[5rem] top-[16rem] left-[1rem] rounded-full bg-orange"></div>
			<div className="absolute w-[4rem] h-[4rem] top-[10rem] right-[20rem] rounded-full bg-[orange]"></div>
			<div className="absolute w-[3rem] h-[3rem] bottom-[0.5rem] left-[10rem] rounded-full bg-primary"></div>
		</div>
      )}
	</>
  )
}

export default Animation