import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-r from-pink-500 via-blue-200 to-green-200 text-white flex flex-col justify-center items-center relative"
    >
      <header
        className="text-6xl font-Ubuntu text-center mb-6 text-purple-400"
        style={{ zIndex: 1 }}
      >
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        Samantha Adams
      </header>
      <div className="flex-row w-100" style={{ zIndex: 1 }}>
        <Link
          to={"/fun-facts"}
          className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 mr-5 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
          style={{ zIndex: 1 }}
        >
          {"Fun Facts"}
        </Link>
        <Link
          to={"/my-projects"}
          className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
          style={{ zIndex: 1 }}
        >
          {"Projects"}
        </Link>
        <a
          href="/SamanthaAdamsResume2025.pdf"
          target="_blank"
          className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 mr-5 ml-5 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
          style={{ zIndex: 1 }}
        >
          {"Resume"}
        </a>
      </div>
      <div
        className="text-gray-500 text-xl text-center mb-5 mt-3"
        style={{ zIndex: 1 }}
      >
        I am a 3rd-year computer science (& geosciences) student
        at the College of the Holy Cross in Worcester, MA.
      </div>
      <div
        className="text-gray-500 text-xl text-center"
        style={{ zIndex: 1 }}
      >
        ⋆｡°✩⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
      <div
        className="text-gray-500 text-xl text-center mt-5"
        style={{ zIndex: 1 }}
      >
        <p>I am a summer 2025 intern at The Hanover Insurance Group with the application engineering team.</p>
        <p>Here, I am working with Java + Spring Boot and JavaScript + React.</p>
      </div>
      <div
        className="text-gray-500 text-xl text-center mt-5"
        style={{ zIndex: 1 }}
      >
        <p>I am particularly interested in ClimateTech, EdTech, E-Commerce and gaming industry enterprise application opportunities.</p>
      </div>
      <div
        className="text-gray-500 text-xl text-center mt-5 mb-6"
        style={{ zIndex: 1 }}
      >
        I'm dedicated to learning new technical skills -- what I'd like to learn next: AWS, CI/CD.
      </div>
      <div className="w-auto text-gray-500" style={{ zIndex: 0 }}>
        <i className="devicon-python-plain text-5xl mr-2"></i>
        <i class="devicon-django-plain text-5xl mr-2"></i>
        <i className="devicon-javascript-plain text-5xl mr-2"></i>
        <i className="devicon-react-original text-5xl mr-1.5"></i>
        <i class="devicon-csharp-plain text-5xl mr-1.5"></i>
        <i class="devicon-dotnetcore-plain text-5xl mr-1.5"></i>
        <i className="devicon-java-plain text-5xl" ></i>
      </div>
      <div className="flex flex-row w-100" style={{ zIndex: 1 }}>
        <div className="w-70 h-72 size-50 overflow-x-hidden rounded-full mt-8 ml-2">
          <img
            src="/meportfolio.png"
            alt="Samantha Adams"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div
          className="w-59 h-80 size-50 overflow-hidden mt-10"
          style={{ zIndex: 1 }}
        >
          <img
            src="/miliofigure.png"
            alt="Faerie Court Milio from League of Legends"
          />
        </div> */}
      </div>
      <div className="text-gray-500 mt-5 ml-4 flex flex-row" style={{ zIndex: 0 }}>
        <a href="https://www.linkedin.com/in/samantha-adams-a17917166/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-linkedin-plain text-4xl mr-5"></i>
        </a>
        <a href="https://github.com/honeydewdrop/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original text-4xl mr-5"></i>
        </a>
        <div className="text-4xl mt-0.5 mr-4">
          <a href="mailto:samanthaadamsSMA@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
      <div
        className="text-gray-500 text-l text-center mb-5 mt-3"
        style={{ zIndex: 1 }}
      >
       Made with JavaScript + React
      </div>
    </div>
  );
};

export default Home;
