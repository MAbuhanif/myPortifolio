import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/paynlxeb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below  to get in touch with me! I'll respond as soon as possible, so don't hesitate to ask your questions or just say hello!
          </p>
        </div>
        <input
          className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white bg-blue-600 hover:border-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
