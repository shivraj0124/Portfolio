import it_dept from '../assets/it-dept.png'
import byteStudy from '../assets/bytestudy.png'
import nasaAE from '../assets/nasa-ae-24.png'
import imageGallery from '../assets/image-gallery.png'
import muxic from '../assets/muxic.png'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { Zoom } from "react-awesome-reveal";
import themeHook from './ThemeContext'
function Project() {
    const {theme}=themeHook()
    return (
        
            <div className={`w-[100%] px-4 md:px-[10%] py-10 ${theme === 'dark' ? 'text-white bg-[#121212]':'text-black bg-white'} `} id='project'>
                <Zoom>
                <div className='flex flex-col  justify-center items-center'>
                    <h1 className='font-bold text-3xl '>My Projects</h1>
                    <div className='py-24 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3 gap-10 '>

                        <Zoom>
                            <div className='card shadow-xl'>
                                <img src={it_dept} className='card-img opacity-1' alt="" />
                                <div className=' card-body flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-cyan-200 opacity-90'>
                                    <h1 className='text-3xl font-bold  p-2 rounded-md text-white '>IT-DEPT</h1>
                                    <div className='flex flex-row mt-2 gap-2'>
                                        <a href='https://information-technology.netlify.app' target='_blank'><BiLink className='hover:text-blue-700  bg-white rounded-[50%] p-2 ' size={40} /></a>
                                        <a href='https://github.com/shivraj0124/it_dept_frontend' target='_blank'><AiFillGithub className='hover:text-blue-700   bg-white rounded-[50%] p-2 ' size={40} /></a>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>

                            <div className='card shadow-xl'>
                                <img src={byteStudy} className='card-img' alt="" />
                                <div className=' card-body flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-cyan-200 opacity-90 '>
                                    <h1 className='text-3xl font-bold  p-2 rounded-md text-white'>ByteStudy</h1>
                                    <div className='flex flex-row mt-2 gap-2'>
                                        <a href='https://bytestudy.netlify.app' target='_blank'><BiLink className='hover:text-blue-700  bg-white rounded-[50%] p-2 ' size={40} /></a>
                                        <a href='https://github.com/shivraj0124/ByteStudy' target='_blank'><AiFillGithub className='hover:text-blue-700   bg-white rounded-[50%] p-2 ' size={40} /></a>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>

                            <div className='card shadow-xl'>
                                <img src={nasaAE} className='card-img' alt="" />
                                <div className=' card-body flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-cyan-200 opacity-90 '>
                                    <h1 className='text-3xl font-bold  p-2 rounded-md text-white'>NASA AE</h1>
                                    <div className='flex flex-row mt-2 gap-2'>
                                        <a href='https://nasa-ae-24.netlify.app' target='_blank'><BiLink className='hover:text-blue-700  bg-white rounded-[50%] p-2 ' size={40} /></a>
                                        <a href='https://github.com/shivraj0124/NASA-AE' target='_blank'><AiFillGithub className='hover:text-blue-700   bg-white rounded-[50%] p-2 ' size={40} /></a>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>

                            <div className='card shadow-xl'>
                                <img src={imageGallery} className='card-img' alt="" />
                                <div className=' card-body flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-cyan-200 opacity-90 '>
                                    <h1 className='text-3xl font-bold  p-2 rounded-md text-white'>ImageGallery</h1>
                                    <div className='flex flex-row mt-2 gap-2'>
                                        <a href='https://img-gallery-five.vercel.app' target='_blank'><BiLink className='hover:text-blue-700  bg-white rounded-[50%] p-2 ' size={40} /></a>
                                        <a href='https://github.com/shivraj0124/ImageSearcher-App' target='_blank'><AiFillGithub className='hover:text-blue-700   bg-white rounded-[50%] p-2 ' size={40} /></a>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>

                            <div className='card shadow-xl'>
                                <img src={muxic} className='card-img' alt="" />
                                <div className=' card-body flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-cyan-200 opacity-90 '>
                                    <h1 className='text-3xl font-bold  p-2 rounded-md text-white'>Muxic</h1>
                                    <div className='flex flex-row mt-2 gap-2'>
                                        <a href='https://music-app-sk.netlify.app' target='_blank'><BiLink className='hover:text-blue-700  bg-white rounded-[50%] p-2 ' size={40} /></a>
                                        <a href='https://github.com/shivraj0124/Music-App' target='_blank'><AiFillGithub className='hover:text-blue-700   bg-white rounded-[50%] p-2 ' size={40} /></a>
                                    </div>
                                </div>
                            </div>
                        </Zoom>

                    </div>
                </div>
                </Zoom>
            </div>
    )
}

export default Project
