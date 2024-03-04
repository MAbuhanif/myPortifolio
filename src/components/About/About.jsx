import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Mundino Hamure,</p>
            <p>Please take a look around.</p>
            <p>I am a Full Stack web Developer.</p>
          </div>
          <div>
            <p>
              I am a passionate Full Stack Web Developer with a strong
              foundation in both front-end and back-end development. I enjoy the
              process of transforming ideas and designs into functional websites
              that provide seamless user experiences.
            </p>
            <br />
            <p>
              In my development process, I prioritize writing clean, efficient,
              and maintainable code. I am proficient in a range of programming
              languages including HTML, CSS, JavaScript, and have expertise in
              various frameworks such as React.js and Node.js. I am also
              well-versed in database management, utilizing technologies like
              MongoDB and SQL to create efficient data models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
