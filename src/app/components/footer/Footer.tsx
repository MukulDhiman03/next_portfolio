import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import img from "../../images/react.png"
import gmail from "../../images/social media/gmail.png"
import github from "../../images/social media/github.jpg"
import linkedin from "../../images/social media/linkedin.png"
import instagram from "../../images/social media/instagram.jpg"
import youtube from "../../images/social media/youtube.jpg"

const socialHandles = [
    {
        id: 1,
        name: "Gmail",
        designation: "dhimanmukul307@gmail.com",
        image: gmail,
        src: "https://mail.google.com", // Add the correct Gmail URL
    },
    {
        id: 2,
        name: "GitHub",
        designation: "MukulDhiman03",
        image: github,
        src: "https://github.com/MukulDhiman03", // Add the correct GitHub URL
    },
    {
        id: 3,
        name: "LinkedIn",
        designation: "mukuldhiman03",
        image: linkedin,
        src: "https://www.linkedin.com/in/mukuldhiman03/", // Add the correct LinkedIn URL
    },
    {
        id: 4,
        name: "Instagram",
        designation: "mukul_dhiman_03",
        image: instagram,
        src: "https://www.instagram.com/mukul_dhiman_03/", // Add the correct Instagram URL
    },
    {
        id: 5,
        name: "YouTube",
        designation: "CodeSadhak",
        image: youtube,
        src: "https://www.youtube.com/@CodeSadhak", // Add the correct YouTube URL
    },
];

const Footer = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-row items-center justify-center w-full my-6">
                <AnimatedTooltip items={socialHandles} />
            </div>

            <div className='text-2xl font-bold' >Copyright © 2024 Mukul Dhiman
            </div>
        </div>
    )
}

export default Footer