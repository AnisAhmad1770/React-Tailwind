
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className=' max-w-[1240] p-2 mx-auto my-10  md:grid grid-cols-2 '>
      
      <div className='  col-span-1 '>
        <img src={laptop} alt=''/>
      </div>
<div className='  col-span-1 md:flex flex-col justify-center'>
    <h1 className=" text-[#00fd9a] font-bold my-2 ">Learn From Experts</h1>
    <p className="my-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid repellendus odit corrupti harum iure asperiores, molestias possimus voluptatibus quae deleniti facere officia modi consequuntur quo in nam iste esse?</p>
    <button className=" h-[40px] w-[120px] md:h-[50px] md:w-[150px] bg-black text-white p-3 rounded"> Get Started</button>
    
</div>
    </div>
  )
}

export default Analytics
