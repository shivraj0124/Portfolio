import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import img1 from '../assets/contact.png'
import { CgMail } from 'react-icons/cg'
import { FiPhone } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { Zoom } from "react-awesome-reveal";
import toast from 'react-hot-toast'
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setMessage("")
        setEmail("")
        toast.success('Message sent successfully !',{
            position:'top-center'
        })
    }
    return (
        <Zoom>
        <div className='w-[100%] px-4 md:px-[10%] pt-10  text-black  flex flex-col justify-center items-center' id='contact'>
            <h1 className='font-bold text-3xl text-center'>Contact</h1>
            
            <div className='flex flex-row-reverse max-md:flex-col-reverse justify-center items-center max-md:w-[100%] md:w-[90%]'>
                <form onSubmit={handleSubmit} className='flex flex-col w-[100%] py-10 max-md:mt-10'>
                    <input type='text' value={name} className=' rounded-md p-2  focus:bg-white focus:text-black border-2 border-cyan-600' onChange={
                        (e) => {
                            setName(e.target.value)
                        }
                    } placeholder='Your Name' required /><br />
                    <input type='email' value={email} className=' sm:w-[100%] rounded-md p-2  focus:bg-white focus:text-black border-2 border-cyan-600'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} placeholder='Email Address' required /><br />
                    <textarea rows={8} value={msg} className=' sm:w-[100%] rounded-md p-2  focus:bg-white focus:text-black border-2 border-cyan-600'
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }} placeholder='Enter message here..' required ></textarea><br />
                    <button className='w-max py-1 px-3 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md'>Send Message</button>
                </form>
                <div className='w-[70%] max-md:mt-10 text-left flex flex-col  md:px-10 text-cyan-600'>
                    {/* <img className='' src={img1} alt="" /> */}

                    <div className='flex flex-col  justify-start cursor-pointer hover:text-red-500'>
                        <CgMail size={44} />
                        <a href='mailto:shivrajsk0124@gmail.com' target='_blank' className='  text-lg'>shivrajsk0124@gmail.com</a>
                    </div>
                    <div className='flex flex-col  justify-start mt-5   cursor-pointer hover:text-green-500 '>
                        <FiPhone size={36} />
                        <h5 href='mailto:shivrajsk0124@gmail.com' target='_blank' className='  text-lg'>+91 9356455929</h5>
                    </div>
                    <div className='flex flex-col  justify-start mt-5 cursor-pointer hover:text-blue-500'>
                        <BsLinkedin size={36} />
                        <a href='https://www.linkedin.com/in/shivraj-kolwankar0124' target='_blank' className='  text-lg'>Shivraj Kolwankar</a>
                    </div>
                    <div className='flex flex-col  justify-start mt-5 cursor-pointer hover:text-slate-900'>
                        <AiFillGithub size={36} />
                        <a href='https://github.com/shivraj0124' target='_blank' className='  text-lg'>Shivraj0124</a>
                    </div>



                </div>
            </div>
        </div>
        </Zoom>
    )
}

export default Contact
