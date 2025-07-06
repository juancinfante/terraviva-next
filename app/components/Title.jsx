import React from 'react'

const Title = ({ title }) => {
    return (
        <h1 className="relative text-black pb-5 text-xl font-bold w-full mb-4 border-section col-span-4">
           {title}
        </h1>
    )
}

export default Title