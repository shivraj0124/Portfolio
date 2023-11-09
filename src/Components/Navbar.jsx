import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
function Navbar() {
    let [open, setOpen] = useState(false);
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToSkills = () => {
        const aboutSection = document.getElementById('skills');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToEducation = () => {
        const aboutSection = document.getElementById('education');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        const aboutSection = document.getElementById('project');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        const aboutSection = document.getElementById('contact');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            {/* New */}
            <div className='shadow-md w-full '>
                <div className='md:flex items-center justify-between bg-white py-4  px-[10%] z-20'>
                    <div className='font-bold text-3xl cursor-pointer flex items-center  text-cyan-600 z-20'>
                        {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                          <ion-icon name="logo-ionic"></ion-icon>
                      </span> */}
                        Shivraj
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open ? <MdOutlineClose size={20} /> : <HiOutlineMenu size={20} />}
                    </div>
                    
                    <ul className={`md:flex md:items-center  absolute md:static max-md:bg-gray-200 md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>                        
                                <li className='md:ml-8 md:my-0 my-2' >
                            <a className='text-gray-800 hover:text-cyan-600 duration-500 cursor-pointer' >Home</a>
                                </li>
                                <li className='md:ml-8 md:my-0 my-2'>
                            <a className='text-gray-800 hover:text-cyan-600 duration-500 cursor-pointer' onClick={() => scrollToAbout()}>About</a>
                                </li>
                                <li className='md:ml-8 md:my-0 my-2'>
                            <a className='text-gray-800 hover:text-cyan-600 duration-500 cursor-pointer' onClick={() => scrollToSkills()}>Skills</a>
                                </li>
                                <li className='md:ml-8 md:my-0 my-2'>
                            <a className='text-gray-800 hover:text-cyan-600 duration-500 cursor-pointer' onClick={() => scrollToEducation()}>Education</a>
                                </li>
                                <li className='md:ml-8 md:my-0 my-2'>
                            <a className='text-gray-800 hover:text-cyan-600 duration-500 cursor-pointer' onClick={() => scrollToProjects()}>Projects</a>
                                </li>
                                <li className='md:ml-8 md:my-0 my-2'>
                            <a className='text-gray-800 hover:text-cyan-600 duration-500 cursor-pointer' onClick={() => scrollToContact()}>Contact</a>
                                </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
