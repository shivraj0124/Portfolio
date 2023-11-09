import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FiPhone } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
function Footer() {
  return (
      <div className='w-[100%] md:px-[10%] py-10 bg-cyan-900 text-white flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center'>SHIVRAJ SANTOSH KOLWANKAR</h1>
          <div className='flex flex-col justify-start  items-center w-[100%] mt-5'>
              
              <div className='flex flex-col gap-y-4'>
                  <div className='flex flex-row justify-center items-center gap-x-4'>
                      <a href='mailto:shivrajsk0124@gmail.com' target='_blank'><CgMail className='bg-gray-300 text-xl p-2 rounded-[50%] text-red-500' size={40} /></a>
                     <a href='mailto:shivrajsk0124@gmail.com' target='_blank' className='max-[362px]:text-[80%] text-xl'>shivrajsk0124@gmail.com</a>
                  </div>
                  <div className='flex flex-row justify-center items-center gap-x-4 text-xl '>
                      <FiPhone className='bg-gray-300 text-xl  rounded-[50%] p-2 text-green-500' size={40} />
                      <h3>9356455929</h3>
                  </div>
                  <div className='flex flex-row justify-center items-center gap-4 mt-5 '>
                      <a href='https://www.linkedin.com/in/shivraj-kolwankar0124' target='_blank'><BsLinkedin className='cursor-pointer hover:text-blue-600' size={32} /></a> 
                      <a href='https://github.com/shivraj0124' target='_blank'><AiFillGithub className='cursor-pointer hover:text-blue-600' size={32} /></a>
                      <a href='https://instagram.com/_shivraj.24?igshid=MWl2Z2U1a2NtZHNhYQ==' target='_blank'><BsInstagram className='cursor-pointer hover:text-blue-600' size={32} /></a>
                  </div>
              </div>
          </div>
                  <h2 className='mt-5 text-gray-400'>Copyright ©2023. All Rights Reserved.</h2>
    </div>
  )
}

export default Footer
