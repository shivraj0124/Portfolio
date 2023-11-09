import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import img1 from '../assets/contact.png'
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMessage] = useState("")
    const [submit,setSubmit]=useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setMessage("")
        setEmail("")
        setSubmit(true)
    }
    return (
        <div className='w-[100%] px-4 md:px-[10%] py-10  text-black  flex flex-col justify-center items-center' id='contact'>
            <h1 className='font-bold text-3xl text-center'>Contact</h1>
            { submit ? <>
            <div className="bg-cyan-500 px-4 py-2 border rounded-lg flex gap-x-2 mt-4 ">
                    <p>Your message has been sent successfully</p>
                    <MdOutlineCancel className='flex right-0 text-red-500' size={20} onClick={()=>setSubmit(false)}/> 
                </div>
            </>:''
            }
            <div className='flex flex-row max-md:flex-col justify-center items-center max-md:w-[100%] md:w-[90%]'>
                <form onSubmit={handleSubmit} className='flex flex-col w-[100%] py-10'>
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
               <div className='w-[70%] max-md:hidden '>
                <img className='' src={img1} alt="" />
               </div>
            </div>
        </div>
    )
}

export default Contact
