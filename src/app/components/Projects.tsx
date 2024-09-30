"use client";
import React from "react";
import ProjectCards from "./ProjectCards";

const projectData = [
    {
        id: 1,
        title: "Blockchain Based Smart City Application",
        description: `Smart city includes various aspects such as smart housing, smart policy, smart toilets, smart transportation etc, 
        the main motive was to create one of these real-time applications using blockchain technology.`,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP991evv7DlmkaOzWI5eHtA-m-6kZYDh0nSQ&s",
        link: "https://github.com/MukulDhiman03/smartcity/",
        skills: ["Blockchain", "Smart Cities", "React"],
    },
    {
        id: 2,
        title: "Ballot: Secure Online Voting System",
        description: `Designed intuitive user interfaces enabling seamless participation in elections and real-time tracking of results
        through visually appealing Apex Charts.`,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4qbyRv-Qhww8HCAqghYEGjcA5F4rI78_Sw&s",
        link: "https://github.com/MukulDhiman03/EvotingSystem",
        skills: ["React Js", "Django", "OpenCV", "Redis", "Apex Chart"],
    },
    {
        id: 3, // Changed ID to be unique
        title: "Movie Review Website",
        description: `Created an engaging website tailored for movie enthusiasts, offering features such as movie exploration, sharing
        reviews, providing ratings, adding movies for feedback, building watchlists, and facilitating easy sharing with
        friends and more.`,
        src: "https://i0.wp.com/blog.favoree.io/wp-content/uploads/2023/10/image-18.png?resize=1024%2C509&ssl=1",
        link: "https://movie-reviewer-jet.vercel.app/",
        skills: ["React Js", "Django", "Tailwind Css"],
    },
];

const Projects = () => {
    return (
        <div className='py-12'>
            <div>
                <p className='text-center font-bold text-5xl md:text-7xl text-white'>
                    My <span className="text-violet-500">Projects</span>
                </p>
            </div>
            <div className="flex flex-wrap mt-5 justify-center">
                {projectData.map((project) => (
                    <ProjectCards key={project.id} data={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
