"use client";
import { Spotlight } from './ui/Spotlight';
import { MdRocketLaunch } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


const About = () => {
    const notify = () => toast.success("CV is under construction 😂");
    return (
        <div className='min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-16 '>

            {/* Spotlight Decoration */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 opacity-70"
                fill="white"
            />
            <div className='p-4 relative z-10 w-full text-center'>
                <div className="text-center mt-12 md:mt-20">
                    {/* Subtitle */}
                    <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-xl mx-auto">
                        Building Full-stack web applications, in love with the web.
                    </p>

                    {/* Main Heading */}
                    <h1 className="mt-10 md:mt-6 text-4xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-text">
                        I'm Mukul Dhiman
                    </h1>

                    {/* Subheading Description */}
                    <p className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto">
                        I'm a passionate software engineer specializing in crafting efficient and scalable solutions, delivering top-notch web applications. Let's connect and create something amazing together!
                    </p>
                </div>

                {/* Call-to-Action Button */}
                <div className='mt-8'>
                    <button className="p-[3px] relative" onClick={notify}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center gap-2">
                            <span>Check My CV</span>
                            <MdRocketLaunch size="3vh" />
                        </div>

                    </button>

                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default About;
