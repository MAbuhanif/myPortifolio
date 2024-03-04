import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mundino Hamure
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          In my development process, I prioritize writing clean, efficient, and
          maintainable code. I am proficient in a range of programming languages
          including HTML, CSS, JavaScript, and have expertise in various
          frameworks such as React.js and Node.js. I am also well-versed in
          database management, utilizing technologies like MongoDB and SQL to
          create efficient data models.
        </p>
        <div>
          <Link
            to="portifolio"
            smooth
            duration={500}
            className="text-white group border-2 px-6 py-3 w-fit rounded-md my-2 flex items-center hover:bg-blue-600 hover:border-blue-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
