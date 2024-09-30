import React from 'react';
import Link from 'next/link';

interface ProjectData {
    id: number;
    title: string;
    description: string;
    src: string;
    link: string;
    skills?: string[]; // Optional skills property
}

interface ProjectCardsProps {
    data: ProjectData;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ data }) => {
    return (
        <div className="md:mx-auto mx-2 max-w-sm border p-5 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mb-3 bg-gray-800">
            <img
                src={data.src}
                alt={data.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{data.title}</h2>
                <p className="text-gray-300 text-base mb-4">{data.description}</p>
                <div className="flex flex-wrap mb-4">
                    {data.skills && data.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-600 text-white text-sm px-2 py-1 rounded mr-2 mb-2">
                            {skill}
                        </span>
                    ))}
                </div>
                <Link
                    href={data.link}
                    className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded hover:shadow-lg transition"
                >
                    View
                </Link>
            </div>
        </div>
    );
};

export default ProjectCards;
