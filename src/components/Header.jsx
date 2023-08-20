import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Header = () => {
    const [toggle,setToggle]=useState(false);



  return (
    
       <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] py-[15px] mt-[20px] items-center  mx-auto flex justify-between'>
        <div>
            Liverpool Football
        </div>
        {
            !toggle ? 
            <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white  text-2xl md:hidden block' />
            :
            <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white  text-2xl md:hidden block '/>
        }
        
        
        <ul className='hidden md:flex text-white gap-5'>
            <li>
                Home
                </li>
            <li>
                Company
                </li>
            <li>
                Resources
                </li>
            <li>
                About
                </li>
            <li>
                Contact
                </li>
        </ul>
      {/* {repkjh design} */}
        <ul className= {` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
        ${ toggle ? 'left-0':'left-[100%]'}
        `}>
            <li className='p-4'>
                Home
                </li>
            <li className='p-4'>
                Company
                </li>
            <li className='p-4'>
                Resources
                </li>
            <li className='p-4'>
                About
                </li>
            <li className='p-4'>
                Contact
                </li>
        </ul>
    </div>
     </div>
    
  )
}

export default Header
