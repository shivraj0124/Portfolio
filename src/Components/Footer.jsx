import { IoIosHeartEmpty } from "react-icons/io";
function Footer() {
  return (
      <div className='w-[100%] md:px-[10%] py-10 bg-cyan-900 text-white flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold text-center flex flex-row justify-center items-center gap-x-2'><IoIosHeartEmpty className="text-red-600" /> SHIVRAJ KOLWANKAR  <IoIosHeartEmpty className="text-red-600" /></h1>
          <div className='flex flex-col justify-start  items-center w-[100%] mt-5'>
                       
          </div>
                  <h2 className='mt-5 text-gray-400'>Copyright ©2023. All Rights Reserved.</h2>
    </div>
  )
}

export default Footer
