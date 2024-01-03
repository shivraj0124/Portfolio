import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import img1 from '../assets/contact.png'
import { CgMail } from 'react-icons/cg'
import { FiPhone } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { Zoom } from "react-awesome-reveal";
import toast from 'react-hot-toast'
import ClipLoader from "react-spinners/ClipLoader";
import themeHook from './ThemeContext'

function Contact() {
    const {theme}=themeHook()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMessage] = useState("")
    const [loader,setLoader]=useState(false)
    const urlBackend = import.meta.env.VITE_BACKEND_API
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoader(true)
        
        const data={
            name:name,
            email:email,
            message:msg
        }

        try {
            const response = await fetch(`${urlBackend}api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    toast.success('Message sent successfully');
                } else {
                    toast.error(`Error: ${result.message}`);
                }
            } else {
                toast.error(`Error! Something went wrong..`);
            }
        } catch (error) {
            toast.error(`Error: ${error}`);
        }
        setName("")
        setEmail("")
        setMessage("")
        setLoader(false)
    }
    return (
            <div className={`w-[100%] px-4 md:px-[10%] pt-10  ${theme === 'dark' ? 'text-white bg-[#121212]':'text-black bg-white'} flex flex-col justify-center items-center`} id='contact'>
               <Zoom>
                <h1 className='font-bold text-3xl text-center'>Contact</h1>
                </Zoom>
                <div className='flex flex-row-reverse max-md:flex-col-reverse justify-center items-center max-md:w-[100%] md:w-[90%]'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-[100%] py-10 max-md:mt-10'>
                        <input type='text' value={name} className={`rounded-md p-2   border-2 border-cyan-600 ${theme === 'dark' ? 'text-white bg-[#121212]':'text-black bg-white focus:bg-white focus:text-black'} `} onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        } placeholder='Your Name' required /><br />
                        <input type='email' value={email} className={` sm:w-[100%] rounded-md p-2   border-2 border-cyan-600  ${theme === 'dark' ? '  text-white bg-[#121212]':'bg-white focus:bg-white focus:text-black'}`}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder='Email Address' required /><br />
                        <textarea rows={8} value={msg} className={` sm:w-[100%] rounded-md p-2   border-2 border-cyan-600 ${theme === 'dark' ? '  text-white bg-[#121212]':'bg-white focus:bg-white focus:text-black'}`}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }} placeholder='Enter message here..' required ></textarea><br />
                        <button className=' flex flex-row justify-center items-center gap-x-2 w-max py-1 px-3 h-[40px] hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md'>
                            Send Message{ !loader ? '':
                                <ClipLoader color="#f8fafc" size={30}  />}
                            </button>
                    </form>
                    <div className='w-[70%] max-md:mt-10 text-left flex flex-col  md:px-10 text-cyan-600'>
                        {/* <img className='' src={img1} alt="" /> */}

                        <div className='flex flex-col  justify-start cursor-pointer hover:text-red-500 w-max'>
                            <CgMail size={44} />
                            <a href='mailto:shivrajsk0124@gmail.com' target='_blank' className=' text-lg '>shivrajsk0124@gmail.com</a>
                        </div>
                        <div className='flex flex-col  justify-start mt-5   cursor-pointer hover:text-green-500 w-max '>
                            <FiPhone size={36} />
                            <h5 href='mailto:shivrajsk0124@gmail.com' target='_blank' className='  text-lg'>+91 9356455929</h5>
                        </div>
                        <div className='flex flex-col  justify-start mt-5 cursor-pointer hover:text-blue-500 w-max'>
                            <BsLinkedin size={36} />
                            <a href='https://www.linkedin.com/in/shivraj-kolwankar0124' target='_blank' className='  text-lg'>Shivraj Kolwankar</a>
                        </div>
                        <div className='flex flex-col  justify-start mt-5 cursor-pointer hover:text-violet-900 w-max'>
                            <AiFillGithub size={36} />
                            <a href='https://github.com/shivraj0124' target='_blank' className='  text-lg'>Shivraj0124</a>
                        </div>



                    </div>
                </div>
               
            </div>
     
    )
}

export default Contact
