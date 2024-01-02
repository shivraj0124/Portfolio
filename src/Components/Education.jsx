import { BiSolidSchool } from 'react-icons/bi'
import { Zoom } from "react-awesome-reveal";
import themeHook from './ThemeContext';
function Education() {
    const {theme}=themeHook()
    return (
     
        <div className={`w-[100%] md:px-[10%] px-4  py-10  id='about  ${theme === 'dark' ? 'text-white bg-[#121212]':'text-black bg-white'} `} id='education'>
            <div className="flex flex-col max-md:flex-col justify-center items-center ">
                <Zoom>
                <h1 className='font-bold text-3xl '>Education</h1>
                </Zoom>
                
                <div className="flex flex-row gap-x-16 max-md:flex-col justify-center items-center mt-10 py-10  w-[100%]">
                    
                    <div className='w-[100%] py-5 flex flex-row items-start justify-between md:gap-x-8 max-md:gap-x-4'>
                        <div className='bg-cyan-500 p-3 rounded-[50%]'>
                            <BiSolidSchool size={20} />
                        </div>

                        <div className='w-[100%]'>
                            <h1 className='bg-cyan-700 text-white font-semibold px-6 pr-10 py-2 rounded-l-[20px] rounded-br-[50px] w-max'>2021-2024</h1>
                            <div className={`w-[100%] mt-5 p-4 rounded-md ${theme === 'dark' ? 'text-white bg-[#262525]':'text-black bg-gray-100'}`}>
                                <h1 className='text-lg font-semibold'>Diploma</h1>
                                <h3 className=' text-cyan-700 font-semibold'>Government Polytechnic Mumbai</h3>
                                <h2 className='mt-2'>Diploma in Information Technology</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-[100%] py-5 flex flex-row items-start justify-between md:gap-x-10 max-md:gap-x-4'>
                        <div className='bg-cyan-500 p-3 rounded-[50%]'>
                            <BiSolidSchool size={20} />
                        </div>

                        <div className={`w-[100%] `}>
                            <h1 className='bg-cyan-700 font-semibold px-6 pr-10 py-2 rounded-l-[20px] rounded-br-[50px] w-max'>2020-2021</h1>
                            <div className={`w-[100%] mt-5   p-4 rounded-md  ${theme === 'dark' ? 'text-white bg-[#262525]':'text-black bg-gray-100'}`}>
                                <h1 className='text-lg font-semibold'>SSC</h1>
                                <h3 className=' text-cyan-700 font-semibold'>Sarawati Vidyamandir Pachal</h3>
                                <h2 className='mt-2'>SSC - Percentage: 97.80%</h2>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div >

    );
}
export default Education