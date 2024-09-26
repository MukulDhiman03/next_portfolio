"use client";
import img from "../images/sample.jpg"; // Correctly import the image path
import { CardContainer } from "./ui/3d-card";
import ProjectCards from './ProjectCards';
import { TextGenerateEffect } from "./ui/text-generate-effect";

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

const words = `Some thrilling web tech projects are in the works, and I can't wait to share them soon!`;

const Projects = () => {
    return (
        <div className='py-12  '>
            <div>
                <p className='text-center font-bold text-5xl md:text-7xl text-white'>
                    My <span className="text-violet-500">Projects</span>
                </p>
            </div>
            <div className="text-center">
                <TextGenerateEffect words={words} />
            </div>
            {/* <div className="flex flex-wrap justify-around">
                {
                    projectData.map((project) => (
                        <CardContainer key={project.id} >
                            <ProjectCards data={project} />
                        </CardContainer>
                    ))
                }
            </div> */}
        </div>
    );
};

export default Projects;
