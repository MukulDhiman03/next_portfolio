"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const testimonials = [
    {
        id: 1,
        name: "Vaibhav Rana",
        title: "Tech Lead at Agrex.ai",
        quote:
            "I had the pleasure of working alongside Mukul. His expertise in both front-end and back-end development greatly enhanced our collaboration. Mukul’s ability to bridge the gap between the two sides of the project, along with his strong skills in React.js. His dedication and problem-solving skills make him a valuable asset to any team. 💖",
    },
    {
        id: 2,
        name: "Vansh Chaudhary",
        title: "Specialist Programmer At Infosys",
        quote:
            "I have known Mukul for the past 5-6 years, and I can confidently say that he approaches every task with dedication and hard work. His unwavering focus on his work sets him apart, making him a reliable and valuable team member. Mukul's commitment to excellence is truly inspiring. 😊",

    },
    {
        id: 3,
        name: "Himanshu Kumar",
        title: "UI/UX Developer",
        quote: "I've had the pleasure of working with Mukul, who expertly converts Figma designs into functional user interfaces. His attention to detail and ability to bring our designs to life is impressive. Mukul's dedication to quality and his understanding of both design and development make him an invaluable partner in our projects. 👍",

    },
    {
        id: 4,
        name: "Arif Ansari",
        title: "Data Scientist at ZS",
        quote:
            "Mukul Dhiman possesses a remarkable ability, communicate effectively with team members and attention to details. He actively contributes ideas,and demonstrates a strong commitment to achieving shared goals. In summary,With utmost confidence in his abilities and believe he would be a valuable asset to any team or organization. 🚀",
    },
    {
        id: 5,
        name: "Abhishek Sharma",
        title: "SDE-I Cars 24",
        quote:
            "I highly recommend Mukul. He is incredibly hardworking and always ready to take on new challenges. His positive attitude and enthusiasm make him a joy to work with. Mukul is a valuable team member who excels in everything he does. Any team would be lucky to have him. 🚀",
    },

];

const Testimonials = () => {
    return (
        <div className="h-auto mt-[5vh] ">
            <div className="text-center font-bold text-5xl md:text-7xl">
                Colleagues <span className=" text-violet-500">Appreciations</span>
            </div>
            <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Testimonials