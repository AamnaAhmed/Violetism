import  {useState,useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar"
import Youtube from "./components/Youtube"
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe"
import MainTitle from "./components/MainTitle"
import MyStream from "./components/MyStream"
import Footer from "./components/Footer"
import cat from "./Images/62110995_iMUrog3HTuL7Bdr.gif"

function App() {
  const [navValue, setNavValue] = useState(false)
  const [catValue, setCat] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition + windowHeight === documentHeight) {
        setCat(true)
      }else {
        setCat(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  

  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 200){
        setNavValue(true)
      }else {
        setNavValue(false)
      }
    })
  },[])

  const scrollUp = () => {
     window.scrollTo({
       top:0,
       behavior:"smooth"
     })
  }
  return (
    <div className="App">
         <div onClick={scrollUp} className={`fixed cursor-pointer w-20 2xl:w-32 h-20 2xl:h-32 text-lg z-[1000] duration-700 ${catValue ? 'bottom-[24%] sm:bottom-[15%]':'bottom-16'} ${navValue ? 'right-5 lg:right-10':'duration-700 right-[-1000px]'}`}>
            <img src={cat}/>
            <p className="bg-purple-700 text-white text-2xl">UP</p>
         </div>
       <Navbar />
       <LandingPage />
       <MainTitle id="About-Me" Title="About Me"/>
       <AboutMe />
        <Youtube />
       <MainTitle id="My-Streams" Title="My Streams"/>
       <MyStream/>
       <MainTitle id="My-Links" Title="My Links"/>
       <Footer />
    </div>
  );
}

export default App;
