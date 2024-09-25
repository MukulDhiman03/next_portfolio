import { HoverEffect } from "../ui/card-hover-effect";
import img from "../../images/react.png"
const projects = [
    {
        title: "Frontend",
        skills: [
            {
                image: img,
                skill: "HTML",
            },
            {
                image: img,
                skill: "CSS",
            },
            {
                image: img,
                skill: "JavaScript",
            },
            {
                image: img,
                skill: "React Js",
            },
            {
                image: img,
                skill: "Next Js",
            },
            {
                image: img,
                skill: "Redux",
            },
            {
                image: img,
                skill: "Tailwind Css",
            },
            {
                image: img,
                skill: "MUI",
            },

        ],
    },
    {
        title: "Backend",
        skills: [
            {
                image: img,
                skill: "Node.js",
            },
            {
                image: img,
                skill: "Express.js",
            },
            {
                image: img,
                skill: "MongoDb",
            },
            {
                image: img,
                skill: "GraphQL",
            },
        ],
    },
    {
        title: "Languages",
        skills: [
            {
                image: img,
                skill: "JavaScript",
            },
            {
                image: img,
                skill: "TypeScript",
            },
            {
                image: img,
                skill: "C++",
            },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                image: img,
                skill: "GitHub",
            },
            {
                image: img,
                skill: "Postman",
            },
            {
                image: img,
                skill: "Docker",
            },
            {
                image: img,
                skill: "VsCode",
            },
        ],
    },
];

const Skills = () => {
    return (
        <div className="">
            <div className='text-center text-2xl'>Skills</div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    )
}

export default Skills