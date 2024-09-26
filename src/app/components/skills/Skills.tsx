import { HoverEffect } from "../ui/card-hover-effect";
import img from "../../images/react.png"
import html from "../../images/skills/html.jpg"
import css from "../../images/skills/css.jpg"
import js from "../../images/skills/js.png"
import redux from "../../images/skills/redux.png"
import nextjs from "../../images/skills/nextjs.png"
import tailwind from "../../images/skills/tailwind.png"
import mui from "../../images/skills/mui.jpg"
import node from "../../images/skills/node.png"
import express from "../../images/skills/express.png"
import mongodb from "../../images/skills/mongodb.jpg"
import graphql from "../../images/skills/graphql.png"
import javascript from "../../images/skills/js.png"
import typescript from "../../images/skills/typescript.png"
import cpp from "../../images/skills/c++.png"
import github from "../../images/skills/github.png"
import postman from "../../images/skills/postman.png"
import docker from "../../images/skills/docker.png"
import vscode from "../../images/skills/vs code.jpg"
import linux from "../../images/skills/linux.jpg"




const projects = [
    {
        title: "Frontend",
        skills: [
            {
                image: html,
                skill: "HTML",
            },
            {
                image: css,
                skill: "CSS",
            },
            {
                image: js,
                skill: "JavaScript",
            },
            {
                image: img,
                skill: "React Js",
            },
            {
                image: nextjs,
                skill: "Next Js",
            },
            {
                image: redux,
                skill: "Redux",
            },
            {
                image: tailwind,
                skill: "Tailwind Css",
            },
            {
                image: mui,
                skill: "MUI",
            },

        ],
    },
    {
        title: "Backend",
        skills: [
            {
                image: node,
                skill: "Node.js",
            },
            {
                image: express,
                skill: "Express.js",
            },
            {
                image: mongodb,
                skill: "MongoDb",
            },
            {
                image: graphql,
                skill: "GraphQL",
            },
        ],
    },
    {
        title: "Languages",
        skills: [
            {
                image: javascript,
                skill: "JavaScript",
            },
            {
                image: typescript,
                skill: "TypeScript",
            },
            {
                image: cpp,
                skill: "C++",
            },
        ],
    },
    {
        title: "Tools",
        skills: [
            {
                image: github,
                skill: "GitHub",
            },
            {
                image: postman,
                skill: "Postman",
            },
            {
                image: docker,
                skill: "Docker",
            },
            {
                image: vscode,
                skill: "VsCode",
            },
            {
                image: linux,
                skill: "Linux",
            },
        ],
    },
];

const Skills = () => {
    return (
        <div className="">
            <div className='text-center font-bold text-5xl md:text-7xl'>Overview of <span className="text-violet-500">Skills</span></div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    )
}

export default Skills