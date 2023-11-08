import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FiPhone } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
function Footer() {
  return (
      <div className='w-[100%] px-4 md:px-[10%] py-10 bg-cyan-900 text-white flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center'>SHIVRAJ SANTOSH KOLWANKAR</h1>
          <div className='flex flex-col justify-start  items-center w-[100%] mt-5'>
              
              <div className='flex flex-col gap-y-4'>
                  <div className='flex flex-row justify-center items-center gap-x-4 text-xl'>
                      <CgMail className='bg-gray-300 text-xl p-2 rounded-[50%] text-red-500' size={40} />
                      <h3>shivrajkolwankar24@gmail.com</h3>
                  </div>
                  <div className='flex flex-row justify-center items-center gap-x-4 text-xl '>
                      <FiPhone className='bg-gray-300 text-xl  rounded-[50%] p-2 text-green-500' size={40} />
                      <h3>9356455929</h3>
                  </div>
                  <div className='flex flex-row justify-center items-center gap-4 mt-5'>
                      <AiFillGithub size={32} />
                      <BsLinkedin size={32} />
                      <BsInstagram size={32} />
                  </div>
              </div>
          </div>
                  <h2 className='mt-5 text-gray-400'>Copyright ©2023. All Rights Reserved.</h2>
    </div>
  )
}

export default Footer
