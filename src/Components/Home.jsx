import React from 'react'
import img1 from '../assets/home-image.png'
function Home() {
  const scrollToProjects = () => {
    const aboutSection = document.getElementById('project');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='w-[100%] px-[10%]  text-black z-[-2] max-md:pt-10 '>
     <div className='flex flex-row max-md:flex-col justify-center items-center'>
        <div className='w-[100%] flex flex-col justify-start items-start'>
            <h1 className='font-semibold'>Hey There!</h1>
            <h1 className='font-bold text-3xl'>I am Shivraj Santosh Kolwankar</h1>
                  <h1 className='text-2xl  font-semibold'>Web <span className='text-cyan-700 '>Developer</span></h1>
                  <p>Passionate Web Developer with skills in React,Tailwind CSS,Node js,MongoDB. Developing User friendly applications </p>
                  <div className='text-sm mt-5 flex flex-row gap-4 '>
            <button className='py-1 px-3 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md' onClick={scrollToProjects}>See Projects</button>
            <button className='py-1 px-3 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md'><a href="mailto:shivrajkolwankar24@gmail.com" target='_blank'>Send Email</a></button>
                  </div>
        </div>
        <div className='w-[100%]'>
            <img className='w-[100%]' src={img1} alt="" />
        </div>
     </div>
    </div>
  )
}

export default Home
