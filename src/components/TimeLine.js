import React from 'react';

function TimeLine({ arr }) {

    return (
        <div data-aos="zoom-in" className="flex justify-center items-center flex-col">
            {arr.map((ele, ind) => {
                if (ind % 2 == 0 && ind !== arr.length - 1) {
                    return (
                        <>
                            <div key={ind} className="flex">
                                <div className="w-3 h-3 rounded-3xl bg-mainColor relative"> <span className="absolute right-10 text-white -translate-y-1/2 top-1/2">{ele}</span></div>
                            </div>
                            <div className="w-1 h-10 2xl:h-16 my-3 bg-secondColor"></div>
                        </>
                    )
                } else if (ind % 2 != 0 && ind !== arr.length - 1) {
                    return (
                        <>
                            <div key={ind} className="flex">
                                <div className="w-3 h-3 rounded-3xl bg-mainColor relative"> <span className="absolute left-10 text-white -translate-y-1/2 top-1/2">{ele}</span></div>
                            </div>
                            <div className="w-1 h-10 2xl:h-16 my-3 bg-secondColor"></div>
                        </>
                    )
                } else if (ind == arr.length - 1 && ind % 2 == 0) {
                    return (
                        <>
                            <div key={ind} className="flex">
                                <div className="w-3 h-3 rounded-3xl bg-mainColor relative"> <span className="absolute right-10 text-white -translate-y-1/2 top-1/2">{ele}</span></div>
                            </div>
                        </>
                    )
                }else if (ind == arr.length - 1 && ind % 2 != 0) {
                    return (
                        <>
                        <div  key={ind} className="flex">
                            <div className="w-3 h-3 rounded-3xl bg-mainColor relative"> <span className="absolute left-10 text-white -translate-y-1/2 top-1/2">{ele}</span></div>
                        </div>
                    </>
                    )
                }
            })}
        </div>
    )
}

export default TimeLine
