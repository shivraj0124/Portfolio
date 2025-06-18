import { IoIosHeartEmpty } from "react-icons/io";
import themeHook from "./ThemeContext";
function Footer() {
  const { theme, changeTheme } = themeHook();
  return (
      <div className='w-[100%] md:px-[10%] py-10 bg-black-900 text-white flex flex-col justify-center items-center bg-gradient-to-tr from-black  to-slate-900'>
      <h1 className={`text-2xl font-bold text-center flex flex-row justify-center items-center gap-x-2 ${theme === 'dark' ? 'text-white ':'text-black'}`}><IoIosHeartEmpty className="text-red-600" /> SHIVRAJ KOLWANKAR  <IoIosHeartEmpty className="text-red-600" /></h1>
          <div className='flex flex-col justify-start  items-center w-[100%] mt-5'>
                       
          </div>
                  
    </div>
  )
}

export default Footer
