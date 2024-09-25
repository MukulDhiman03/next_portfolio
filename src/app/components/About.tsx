import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
// import { Button } from "./ui/moving-border";

const About = () => {
    return (
        <div className='min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-16'>

            {/* Spotlight Decoration */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 opacity-70"
                fill="white"
            />

            <div className='p-4 relative z-10 w-full text-center'>
                {/* Heading */}
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Hi, I am <span className='text-yellow-300'>Mukul Dhiman</span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-xl mx-auto">
                    I'm a passionate software engineer specialized in crafting efficient and scalable solutions. Delivering top-notch web applications is my forte.
                </p>

                {/* Call-to-Action Button */}
                <div className='mt-8'>
                    {/* <Link href="#" aria-label="Check Mukul's Resume">
                        <Button
                            borderRadius="1.2rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-800 transition-transform duration-300 transform hover:scale-105"
                        >
                            Check Resume
                        </Button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default About;
