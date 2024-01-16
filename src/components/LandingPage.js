import landingPage from "../Images/bg.png"
import Heba from "../Images/heba-rv.png"
import layer from "../Images/Layer.png"
import '../styles/landingPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AwesomeSlider from 'react-awesome-slider';
import { luxQuotes } from "../data/lux"
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);


export default function LandingPage() {
  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      className="custom-slider"
      buttons={false}
      bullets={false}

    >
      {luxQuotes.map((tex ,ind) => (
        <p key={ind}>{tex}</p>
      ))}

    </AutoplaySlider>
  );

  return (
    <div style={{  backgroundImage: `url(${landingPage})` }} className="relative  land h-screen overflow-hidden bg-cover bg-center p-0 m-0 h-full !w-full">
       <div className="container relative h-full w-full px-20 ">
          <div className="absolute top-[23%] left-1/2 -translate-y-1/2  -translate-x-1/2">
                <img src={layer} className="2xl:w-[450px]"/>
          </div>
          <div className="absolute container top-1/2 left-0 grid grid-cols-1 lg:grid-cols-2 mt-10 gap-30 w-full -translate-y-1/2 ">
            <div  className=" justify-start items-center hidden lg:flex ">
                <img className="2xl:w-[500px]" src={Heba} />
            </div>
              <div className="flex justify-center items-center text-white">
                <div className="h-fit landing-text bg-secondColor 2xl:py-30 py-20 w-full md:py-28 md:px-28 rounded-lg">
                   <h1 className="2xl:text-5xl text-4xl ">Welcome To My Website</h1>
                </div>
              </div>
          </div>
       </div>
      
       {slider}
    </div>
  )
}

