import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
     <div className='max-w-[1240px] my-[100px] mx-auto text-center'>
       <div className=' text-xl  md:text-3xl font-bold md:p-[24px]'>
        Learn with us!
       </div>
       <h2 className='text-white font-bold text-3xl  md:text-[80px] md:p-[24px]'>
        Grow with us
        </h2> 
       <h3 className=' text-[20px] md:text-[50px] text-white font-bold md:p-[24px] ' >
        Learn
        <Typed className=' pl-2' 
        strings={['Web Development','React Development','Wordpress']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                    />
        </h3>
     </div>
    </div>
  )
}

export default Banner
