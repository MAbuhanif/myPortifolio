import React from "react";
import { data } from "./data";

const Portifolio = () => {
  const portifolios = data;

  return (
    <div
      name="portifolio"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Portifolio
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portifolios.map(({ id, image, github, live }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 group rounded-lg"
            >
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex item-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github} target="_blank">
                    Github
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={live} target="_blank">
                    Live
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
