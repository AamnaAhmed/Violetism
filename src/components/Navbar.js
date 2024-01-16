import logo from "../Images/logo.png"
import { useState, useEffect } from "react"
import { ReactComponent as Bars } from "../Icons/bars-solid.svg"
import { ReactComponent as Xmark } from "../Icons/xmark-solid.svg"

export default function Navbar() {
    const [value, setValue] = useState(false)
    const [navValue, setNavValue] = useState(false)
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

      window.onscroll = () => {
        if (window.scrollY <= 0) {
            setNavValue(false)
          }else {
            setNavValue(true)
          }
      }

      const liFun = () => {
        setValue(false)

      }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    return (
        <nav className={`fixed top-0 left-0 w-full z-[2000] drop-shadow-md pt-2 pb-4 ${navValue == false ? 'bg-transparent ' : 'bg-mainColor/50 backdrop-blur-lg'}`}>

            <div className="container flex justify-between items-center !text-white">
                <div className="w-16">
                    <img src={logo} />
                </div>
                <Bars onClick={() => setValue(!value)} className={screenSize.width < 777 ? `w-7 h-7 mr-2 fill-white` : `md:hidden`} />
                <div className={screenSize.width < 777 && value ? `fixed right-0 h-full top-0 bg-mainColor  h-screen w-3/4 p-4 drop-shadow-lg z-20  duration-200` : screenSize.width < 777 ? `fixed z-20 right-[-100%] h-full top-0 bg-mainColor w-3/4 p-4 h-screen drop-shadow-lg duration-200` : ``}>
                    <Xmark onClick={() => setValue(!value)} className={screenSize.width < 777 ? "w-7 h-7 fill-white" : "w-0 h-0"} />
                    <ul className={screenSize.width < 777 ? `flex flex-col mt-[30px] ` : `flex text-white`}>
                        <li onClick={()=> liFun()} className="sm:mx-3 2xl:text-2xl text-lg cursor-pointer my-3 hover:text-violet-400 duration-200">
                            <a href="#About-Me">About-Me</a>
                        </li>
                        <li onClick={()=> liFun()} className="sm:mx-3 2xl:text-2xl text-lg cursor-pointer my-3 hover:text-violet-400 duration-200">
                            <a href="#My-Streams">My-Streams</a>
                        </li>
                        <li onClick={()=> liFun()} className="sm:mx-3 2xl:text-2xl text-lg cursor-pointer my-3 hover:text-violet-400 duration-200">
                            <a href="#My-Links">My-Links</a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}