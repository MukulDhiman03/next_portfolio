import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import img from "../../images/react.png"

const socialHandles = [
    {
        id: 1,
        name: "GitHub",
        designation: "Software Engineer",
        image: img
    },
    {
        id: 2,
        name: "LinkedIn",
        designation: "Software Engineer",
        image: img
    },
    {
        id: 3,
        name: "Instagram",
        designation: "Software Engineer",
        image: img
    },
    {
        id: 4,
        name: "Youtube",
        designation: "Software Engineer",
        image: img
    },
]

const Footer = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="bg-gradient-to-r bg-gray-700 text-white p-6 rounded-lg shadow-lg text-center space-y-4 my-8">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Reach out to me today and let's discuss how I can help you achieve your goals.
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider">
                    Let's Get In Touch
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full my-6">
                <AnimatedTooltip items={socialHandles} />
            </div>

            <div className='text-1xl' >Copyright © 2024 Mukul Dhiman | All Rights Reserved
            </div>
        </div>
    )
}

export default Footer