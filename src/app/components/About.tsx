import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const About = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Hi, I am <span className='text-yellow-300'>Mukul Dhiman</span>
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    I'm a passionate software engineer specialized in crafting efficient and scalable solutions. Delivering top-notch web applications is my forte.
                </p>
                <div className='mt-5'>
                    <Link href="#">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Check Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About