"use-client"

import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  demo: string;
  code: string;
}

const ProjectCard = ({ src, title, description, demo, code }: Props) => {
  return (
    <div className="z-20 relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] group">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {demo && <a href={demo}><button className="bg-white text-blue-600 font-semibold py-2 px-4 m-2 rounded">Demo</button></a>}
        {code && <a href={code}><button className="bg-white text-blue-600 font-semibold py-2 px-4 m-2 rounded">Code</button></a>}
      </div>
    </div>
  );
}

export default ProjectCard;
