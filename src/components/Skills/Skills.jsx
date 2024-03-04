import React from "react";
import { techs } from "./techs";
const Skills = () => {
  const skillList = techs;
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillList.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-500 hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={src} alt="HTML icon" />
              <p className="my-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
