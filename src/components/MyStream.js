import React, { useState } from 'react'
import myStream from "../Images/myStream.png"
import video from "../Images/vio.mp4"
import porder from "../Images/porder.png"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Twitch } from "../Icons/twitch.svg"
import { ReactComponent as Facebook } from "../Icons/facebook-f.svg"
import { ReactComponent as Discord } from "../Icons/discord.svg"
import '../styles/myStream.css';
import 'react-awesome-slider/dist/styles.css';
import TimeLine from "./TimeLine"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getValue } from "../RTK/slices/value"
import { clear } from "../RTK/slices/value"
import { supports } from "../data/supports"
import 'aos/dist/aos.css';



export default function MyStream() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        initialSlide: 0,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
    const getValueFromRedux = useSelector((state) => state.streemValue);
    const names = ["Saturday", "Sunday", "Monday", "Tuesday"]
    const btnsInfo = [<Twitch className="w-5 h-5 m-2 fill-mainColor" />, <Facebook className="w-5 h-5 m-2 fill-mainColor" />, <Discord className="w-5 h-5 m-2 fill-mainColor" />]

    return (
        <div style={{ backgroundImage: `url(${myStream})` }} className="bg-cover bg-center bg-fixed ">
            <div className="container py-10">
                <div className="w-fit ">
                    <a className="text-secondColor flex gap-2 text-xl" href="https://www.twitch.tv/Violetism?fbclid=IwAR2CHSP6VPAtW6LKdLXvrg_QG9M-c4EP5Xa3Y6qeWJh44x_3ZW4GahZp5MQ"><span><Twitch className="w-12 h-12 fill-secondColor" /></span>Follow me in twitch</a>
                </div>
                <div className="bg-[#a78bfaa6] ">
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 py-10 md:py-20 px-5 md:px-10 ">
                        <div className="">
                            <video className="border-[10px] bg-mainColor 2xl:border-[16px] min-w-full border-mainColor mb-20 md:mb-0" src={video} autoPlay="true" loop muted />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col">
                                <TimeLine arr={names} />
                            </div>
                        </div>
                    </div>
                    <div className=" gap-10   py-10 p-3 sm:p-10">
                        <h1 className="text-2xl lg:text-2xl text-white text-start  my-10">OUR SUPPORTS</h1>
                        <div className="flex justify-center items-center mb-10 gap-4">
                            {
                                <SliderBtn btnsInfo={btnsInfo} />
                            }
                        </div>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" className="relative overflow-hidden  h-[300px]  ">
                            <div className={`bg-mainColor  w-full h-full absolute p-5 px-10 duration-500 ${getValueFromRedux[0] == 0 ? '  left-0 ' : ' left-[-4000px]'} `}>
                                <Slider {...settings} className="absolute ">
                                    {supports.map((obj,ind) => {
                                        if (obj.type == "twitch") { 
                                            return (
                                                <div key={ind} className="flex justify-center relative rounded-xl bg-secondColor items-center flex-col p-10">
                                                    <Twitch className="w-7 h-7 absolute top-[10%] left-[10%]" />
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 rounded-full border-mainColor p-1">
                                                            <img src={obj.img} className="roundend-full w-32 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <h1 className="text-white">{obj.nameOfSupport}</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Slider>

                            </div>
                            <div className={`bg-mainColor w-full h-full absolute p-5 px-10 duration-500 ${getValueFromRedux[0] == 1 ? '  right-0 ' : ' right-[-4000px]'} `}>
                                <Slider {...settings} className="absolute ">
                                    {supports.map((obj,ind) => {
                                        if (obj.type == "facebook") {
                                            return (
                                                <div key={ind} className="flex justify-center relative rounded-xl bg-secondColor items-center flex-col p-10">
                                                    <Facebook className="w-7 h-7 absolute top-[10%] left-[10%]" />
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 rounded-full border-mainColor p-1">
                                                            <img src={obj.img} className="roundend-full w-32 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <h1 className="text-white">{obj.nameOfSupport}</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Slider>
                            </div>
                            <div className={`bg-mainColor w-full h-full absolute p-5 px-10 duration-500 ${getValueFromRedux[0] == 2 ? '  right-0 ' : ' right-[-4000px]'} `}>
                                <Slider {...settings} className="absolute ">
                                    {supports.map((obj,ind) => {
                                        if (obj.type == "discord") {
                                            return (
                                                <div key={ind} className="flex justify-center relative rounded-xl bg-secondColor items-center flex-col p-10">
                                                    <Discord className="w-7 h-7 absolute top-[10%] left-[10%]" />
                                                    <div className="flex justify-center items-center">
                                                        <div className="border-2 rounded-full border-mainColor p-1">
                                                            <img src={obj.img} className="roundend-full w-32 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <h1 className="text-white">{obj.nameOfSupport}</h1>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const SliderBtn = ({ btnsInfo }) => {
    const [activeBtn, setActiveBtn] = useState(0)
    const dispatch = useDispatch()


    const change = (ind) => {
        setActiveBtn(ind)
        dispatch(clear())
        dispatch(getValue(ind))
    }
    return (
        <>
            {
                btnsInfo.map((btnInfo, ind) => (
                    <div onClick={() => { change(ind) }} className="relative p-2 cursor-pointer flex justify-center items-center" key={ind}>
                        <div className={`absolute w-full h-full rounded-full ${activeBtn === ind ? 'butt' : ''}`}>
                        </div>
                        <span className="z-10 bg-secondColor rounded-full p-1 flex justify-center items-center">
                            {btnInfo}
                        </span>
                    </div>
                ))
            }
        </>
    )
}