import React from 'react';
import img from "../images/sample.jpg"; // Correctly import the image path
import { CardContainer } from "./ui/3d-card";
import ProjectCards from './ProjectCards';

const projectData = [
    {
        id: 1,
        title: "Block Chain Smart City Application",
        description: "lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn",
        src: img, // Directly pass the image path here
        techStack: [{
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: img
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: img

        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: img

        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: img

        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: img

        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image: img

        },],
    },
    {
        id: 2,
        title: "Block Chain Smart City Application",
        description: "lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn",
        src: img,
        techStack: [{
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: img
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: img

        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: img

        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: img

        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: img

        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image: img

        },],
    },
    {
        id: 3,
        title: "Block Chain Smart City Application",
        description: "lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn lorem ipsun dico gytur shof dsov ofn dpsvn",
        src: img,
        techStack: [{
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image: img
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: img

        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image: img

        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image: img

        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image: img

        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image: img

        },],
    },
];


const Projects = () => {
    return (
        <div className='py-12 min-h-screen'>
            <div>
                <p className='text-center text-3xl text-white'>
                    A small section of recent projects
                </p>
            </div>
            <div className="flex flex-wrap justify-around">
                {
                    projectData.map((project) => (
                        <CardContainer key={project.id} >
                            <ProjectCards data={project} />
                        </CardContainer>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
