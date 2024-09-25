import React from 'react'
import { CardBody, CardItem } from "./ui/3d-card"; // Ensure these components are correctly set up
import Image from "next/image";
import Link from "next/link";
import { IconShare3 } from "@tabler/icons-react"
import { AnimatedTooltip } from "./ui/animated-tooltip";
// import img from "../images/sample.jpg"; // Correctly import the image path

// const people = [
//     {
//         id: 1,
//         name: "John Doe",
//         designation: "Software Engineer",
//         image: img
//     },
//     {
//         id: 2,
//         name: "Robert Johnson",
//         designation: "Product Manager",
//         image: img

//     },
//     {
//         id: 3,
//         name: "Jane Smith",
//         designation: "Data Scientist",
//         image: img

//     },
//     {
//         id: 4,
//         name: "Emily Davis",
//         designation: "UX Designer",
//         image: img

//     },
//     {
//         id: 5,
//         name: "Tyler Durden",
//         designation: "Soap Developer",
//         image: img

//     },
//     {
//         id: 6,
//         name: "Dora",
//         designation: "The Explorer",
//         image: img

//     },
// ];


const ProjectCards = ({ data }) => {
    return (
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full">
                <Image
                    src={data.src}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
            </CardItem>
            <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-3"
            >
                {data.title}
            </CardItem>
            <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
            >
                {data.description}
            </CardItem>
            <div className="flex justify-between items-center mt-8">
                <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                    <div className="flex flex-row items-center justify-center w-full">
                        <AnimatedTooltip items={data.techStack} />
                    </div>
                </CardItem>
                {/* <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white  font-bold flex"
                >
                    Link <span> <IconShare3 /></span>
                </CardItem> */}
            </div>
        </CardBody>
    )
}

export default ProjectCards;
