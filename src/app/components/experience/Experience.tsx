import React from "react";
import { Timeline } from "../ui/timeline";
const data = [
    {
        title: "2024",
        content: (
            <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
                    Front-End Developer
                </div>
                <div className="text-gray-300 mt-2">
                    <p className="text-xl font-semibold">Agrex.ai</p>
                    <p className="text-sm text-gray-400">Sept 2023 - Present</p>
                    <p className="text-sm text-gray-400">Dwarka, Delhi, India · On-Site</p>
                </div>

                <div className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg shadow-md mt-4">
                    <ul className="list-disc list-inside text-gray-400 space-y-3">
                        <li>Developed frontend application for a video analytics product.</li>
                        <li>Integrated front-end and back-end components for seamless communication and data flow in a video analytics dashboard.</li>
                        <li>Used Git for version control to collaborate with team members and manage codebase history.</li>
                        <li>Designed an internal dashboard to streamline database management and task automation.</li>
                        <li>Incorporated live video functionality into our product, enhancing real-time insights and user experience.</li>
                        <li>Dockerized the code for improved deployment and scalability.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <p className="text-lg text-gray-200 font-bold">Skills:
                        <span className="text-gray-400 font-semibold">   · React Js · React Redux · MUI · Bootstrap · Docker</span>
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "2023",
        content: (
            <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
                    Full Stack Intern
                </div>
                <div className="text-gray-300 mt-2">
                    <p className="text-xl font-semibold">IEEE</p>
                    <p className="text-sm text-gray-400">Jul 2022 - Sep 2022 · 3 mos</p>
                    <p className="text-sm text-gray-400">Dehradun, Uttarakhand, India · Remote</p>
                </div>
                <div className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg shadow-md mt-4">
                    <ul className="list-disc list-inside text-gray-400 space-y-3">
                        <li>Designed a Full Stack Web Application for Artisans using React JS, MUI, Bootstrap, Express.js, and MongoDB.</li>
                        <li>Built features for adding, updating, and deleting products. Ensured that product information was displayed accurately and attractively.</li>
                        <li>Implemented order processing workflows, including shopping cart management, checkout processes, and order tracking.</li>
                        <li>Developed secure user authentication and authorization mechanisms to protect user data and provide personalized experiences.</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <p className="text-lg text-gray-200 font-bold">Skills:
                        <span className="text-gray-400 font-semibold"> · Back-End Web Development · React Js · Express Js · MongoDB · Front-End Development</span>
                    </p>
                </div>
            </div>
        ),
    },

    {
        title: "2019-2023",
        content: (
            <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 sm:mb-5 md:mb-6">
                    Graphic Era Deemed To Be University
                </h1>
                <div className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg shadow-md">
                    <h1 className="text-gray-300">
                        Graduated in B.Tech (CSE) from Graphic Era Deemed to be University, Dehradun, with a CGPA of 8.6.
                    </h1>
                </div>
            </div>
        ),
    }

];
const Experience = () => {
    return (
        <div >
            <div className='text-center font-bold text-5xl md:text-7xl'><span className="text-violet-500">Experience</span> and <span className="text-violet-500">Graduation</span></div>
            <div className="w-full">
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default Experience