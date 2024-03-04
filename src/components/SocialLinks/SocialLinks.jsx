import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      url: "https://www.linkedin.com/in/mundino",
      style: "rounded-tr-md bg-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      url: "https://github.com/MAbuhanif",
      style: "bg-[#333333]",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      url: "mailto:mundinoabete@gmail.com",
      style: "bg-[#6fc2b0]",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      url: "/mundaCv.pdf",
      style: "rounded-br-md bg-gray-500",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
       {links.map(({id, child, url, style, download})=>(
        <li key={id} className={"w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href={url} download={download} target="_blank"  rel="noreferrer" 
          >
           {child}
          </a>
        </li>
       ))}
        
      </ul>
    </div>
  );
};

export default SocialLinks;
