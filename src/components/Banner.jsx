import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px] h-[500px] md:h-[700px] flex justify-center'>
     <div className=' max-w-[1240px] my-[100px] mx-auto text-center'>
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
        <button className=" h-[40px] w-[120px] md:h-[50px] md:w-[150px] bg-black text-white p-3 rounded m-2 "> Get Started</button>
     </div>
    </div>
  )
}

export default Banner
