import React, {useEffect} from 'react'
import { LoremIpsum } from 'react-lorem-ipsum';
import Heba2 from "../Images/Heba-2.jpg"
import '../styles/aboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




export default function AboutMe() {
  useEffect(()=> {
    AOS.init()
  },[])
    return (
        <div className="container grid py-10 grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
            <div data-aos="fade-right" className="bg-secondColor p-10 rounded-lg text-[#eee] 2xl:text-xl flex justify-center items-center">
              <LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={60}/>
            </div>
            <div data-aos="fade-left" className="flex justify-center items-center ">
               <div className=" img relative">
                 <img className="w-[300px] sm:w-[350px] 2xl:w-[450px] " src={Heba2}/>
               </div>
            </div>
        </div>
    )
}
