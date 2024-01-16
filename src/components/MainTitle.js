import React from 'react'

export default function MainTitle({Title,id})  {
    return (
        <div id={id} className="container pt-28 pb-10">
            <h1 className="text-2xl tracking-wide text-4xl 2xl:text-5xl font-mono text-secondColor">{Title}</h1>
        </div>
    )
}
