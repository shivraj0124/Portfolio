import React from 'react'
import img1 from '../assets/home-image.png'
function About() {
    return (
        <div className='w-[100%] px-[10%] py-12  text-black  z-[-2] ' id='about'>
            <div className='flex flex-row-reverse max-md:flex-col justify-center items-center'>
                <div className='w-[100%] flex flex-col justify-start items-start'>
                    <h1 className='font-bold text-3xl'>About Me</h1>
                    <h1 className='text-2xl  font-semibold text-cyan-700'>Web Developer</h1>
                    <p>Hello !!! I am Shivraj Santosh Kolwankar.Currently pursuing diploma in Information Technology from Government Polytechnic Mumbai.I am very mush interested in programming and web development.Enthusiastic to improve my knowledge and learn new Technolgies.Programming Language and Frameworks known: Javascript React js Node js Express js Python C C++ Java</p>
                    <div className='text-sm mt-5 flex flex-row gap-4 '>
                        <button className='py-1 px-3 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md'>Download CV</button>
                        
                    </div>
                </div>
                <div className='w-[100%]'>
                    <img className='w-[100%]' src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
