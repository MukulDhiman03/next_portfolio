"use client";
import { cn } from "../../utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from 'next/image';
import { useState } from "react";
import Image from 'next/image'; // Import Image component from next/image


export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        skills: {
            image: StaticImageData; // Ensure this matches your image type
            skill: string;
        }[];
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Change let to const

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item.title} // Using title as a key for better readability
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle className="text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-600">{item.title}</CardTitle>
                        <div className="mt-4 flex flex-wrap justify-center">
                            {item.skills.map((skill, skillIdx) => (
                                <div key={skillIdx} className="flex items-center mt-2 mx-2 p-2 border border-zinc-600 rounded-md">
                                    <Image
                                        src={skill.image.src} // Use skill.image.src to access the URL
                                        alt={skill.skill}
                                        width={24} // Adjust width as needed
                                        height={24} // Adjust height as needed
                                        className="object-cover rounded-full mr-2" // Keep your class for styling
                                    />
                                    <span className="text-zinc-100">{skill.skill}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
