import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoMongodb } from 'react-icons/bi'
function Skills() {
    return (
        <div className='w-[100%] px-[10%] py-10  text-black  z-[-2]' id='skills'>
            <div className='flex flex-col  justify-center items-center'>
                <h1 className='font-bold text-3xl '>My Skills</h1>
                <div className='py-10 grid grid-cols-4 max-md:grid-cols-2 max-[300px]:grid-cols-1 max-lg:grid-cols-3 gap-10 text-center'>
                    <div className='flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-orange-500 cursor-pointer'>
                        <AiOutlineHtml5 size={60}/>
                        <h2 className='text-xl font-bold text-black'>Html</h2>
                    </div>
                    <div className='flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-blue-600 cursor-pointer'>
                        <BiLogoCss3 size={60}/>
                        <h2 className='text-xl font-bold text-black'>Css</h2>
                    </div>
                    <div className='flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-[#61DBFB] cursor-pointer'>
                        <BiLogoTailwindCss  size={60}/>
                        <h2 className='text-xl font-bold text-black'>Tailwind</h2>
                    </div>
                    <div className='flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-[#61DBFB] cursor-pointer'>
                        <BiLogoReact size={60}/>
                        <h2 className='text-xl font-bold text-black'>React js</h2>
                    </div>
                    <div className='flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-green-800 cursor-pointer'>
                        <FaNodeJs  size={60}/>
                        <h2 className='text-xl font-bold text-black'>Node js</h2>
                    </div>
                    <div className='flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-[#4DB33D] cursor-pointer'>
                        <BiLogoMongodb  size={60}/>
                        <h2 className='text-xl font-bold text-black'>MongoDB</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
