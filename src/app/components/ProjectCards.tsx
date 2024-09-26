
/*
import React from 'react'
import { CardBody, CardItem } from "./ui/3d-card"; // Ensure these components are correctly set up
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
interface ProjectData {
    src: string; // Type for the image source
    title: string; // Type for the project title
    description: string; // Type for the project description
    techStack: string[]; // Type for tech stack (assuming it's an array of strings)
}

// Define the props interface
interface ProjectCardsProps {
    data: ProjectData; // The data prop should match the ProjectData type
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ data }) => {
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

            </div>
        </CardBody>
    )
}

export default ProjectCards;

*/
