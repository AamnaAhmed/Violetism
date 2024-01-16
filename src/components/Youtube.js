import React, { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/myStream.css';
import { ReactComponent as YoutubeIcon } from "../Icons/youtube.svg"




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: '1000', }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: '1000', }}
      onClick={onClick}
    />
  );
}



export default function Youtube() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 8000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const apiKey = process.env.REACT_APP_API_KEY;
  const channelId = process.env.REACT_APP_CHANNELId;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`

  const [allvideos, setallvideos] = useState([])
  useEffect(() => {
    fetch(url).then((res) => res.json()).then((resj) => {
      if (resj.error) {
        const videos = JSON.parse(localStorage.getItem("videos"));
        setallvideos(videos)
      } else {
        const result = resj.items.map(doc => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId
        }));
        localStorage.setItem("videos", JSON.stringify(result))
        setallvideos(result)
      }
    })
  }, [])
  

  return (
    <div>
      <div className="container pt-10">
        <div className="flex">
          <div className="flex justify-center items-center relative h-fit">
            <span className="bg-slate-50 w-[60%] h-[50%] absolute"></span>
            <YoutubeIcon className=" w-10 h-10 mr-2 fill-red-500 z-10"/>
          </div>
        <h1 className="text-2xl text-white text-start mb-10"> Youtube!</h1>  
        </div>
        <div className="mx-7 lg:mx-20">
          {
            allvideos.length != 0 ?
              <Slider {...settings} className="">
                {allvideos.map((item, ind) => {
                  return (
                    <div key={ind} className="">
                      <iframe className="w-full  p-1 h-80 lg:h-[450px] 2xl:h-[510px]"  src={item.Videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " allowFullScreen></iframe>
                      <p className="text-xl text-white mt-5">{item.snippet.title}</p>
                    </div>
                  )
                })}
              </Slider>
              : ""
          }
        </div>
      </div>
    </div>
  )
}