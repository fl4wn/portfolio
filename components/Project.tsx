import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProject {
  title: string;
  description: string;
  image: StaticImageData;
  tech: string[];
  liveLink: string;
  sourceLink: string;
}

const Project = ({
  title,
  description,
  image,
  tech,
  liveLink,
  sourceLink,
}: IProject) => {
  return (
    <div className="bg-slate-700 bg-opacity-20 border border-slate-800 rounded-2xl overflow-hidden shadow-lg w-full flex flex-col">
      <div className="w-full aspect-video relative transition duration-500">
        <Image src={image} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 flex flex-col gap-4 flex-1">
        <h3 className="text-slate-200 text-xl font-semibold">{title}</h3>
        <p className="text-slate-400">{description}</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {tech.map((e) => (
            <li
              key={Math.random()}
              className="px-2 bg-slate-700 bg-opacity-20 border border-slate-700 text-slate-500 font-medium rounded-md shadow-md"
            >
              {e}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4 mt-auto">
          <a
            href={liveLink}
            className="p-2 text-sky-500 font-semibold rounded-md w-24 text-center hover:shadow-md ring-1 ring-sky-500 hover:bg-sky-500 hover:text-white transition"
          >
            Live Demo
          </a>
          <a
            href={sourceLink}
            className="p-2 text-purple-500 font-semibold rounded-md w-24 text-center hover:shadow-md ring-1 ring-purple-500 hover:bg-purple-500 hover:text-white transition"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
