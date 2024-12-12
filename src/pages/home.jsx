import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
      const animationName = `floatStar${index + 1}`;
      const keyframes = `
        0% { transform: translate(${randomPosition()}); }
        50% { transform: translate(${randomPosition()}); }
        100% { transform: translate(${randomPosition()}); }
      `;
      addKeyframes(animationName, keyframes);

      star.style.animation = `${animationName} 30s linear infinite`;
    });
  }, []);

  function randomPosition() {
    return `${Math.random() * 100}vw, ${Math.random() * 100}vh`;
  }

  function addKeyframes(name, keyframes) {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`@keyframes ${name} { ${keyframes} }`, styleSheet.cssRules.length);
  }

  return (
    <div
    className={`min-h-screen bg-gradient-to-r from-pink-500 via-blue-200 to-green-200 text-white flex flex-col justify-center items-center relative`}
    >
      <header
        className="text-6xl font-Ubuntu text-center mb-6 text-pink-400"
        style={{ zIndex: 1 }}
      >
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        Hello!
      </header>
      <div className="flex-row" style={{ zIndex: 1 }}>
        <Link
          to={"/fun-facts"}
          className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 mr-5 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
          style={{ zIndex: 1 }}
        >
          {"Fun Facts About Me"}
        </Link>
        <Link
          to={"/my-projects"}
          className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
          style={{ zIndex: 1 }}
        >
          {"My Projects"}
        </Link>
        <a
        href="/Samantha Adams Resume.pdf"
        target="_blank" // Opens up in browser not download
        className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 mr-5 ml-5 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
        style={{ zIndex: 1 }}
        >
      {"Resume"}
      </a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="star absolute"></div>
        ))}
      </div>
      <div
        className="text-gray-500 text-2xl text-center mb-5 mt-3"
        style={{ zIndex: 1 }}
      >
        I'm Samantha Adams, a 3rd-year computer science (& geosciences) student
        at the College of the Holy Cross in Worcester, MA.
      </div>
      <div
        className="text-gray-500 text-2xl text-center mt-1 mb-4"
        style={{ zIndex: 1 }}
      >
        Income SWE intern @ Pantex.
      </div>
      <div
        className="text-gray-500 text-3xl text-center"
        style={{ zIndex: 1 }}
      >
        ⋆｡°✩⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
      <div
        className="text-gray-500 text-2xl text-center mt-5"
        style={{ zIndex: 1 }}
      >
        I am interested in a career in software engineering. I enjoy both
        front-end & back-end work.
      </div>
      <div
        className="text-gray-500 text-2xl text-center mt-5 mb-6"
        style={{ zIndex: 1 }}
      >
        I'm dedicated to learning new technical skills - what I'd like to learn next: .NET with C#.
      </div>
      <div className="text-gray-500" style={{ zIndex: 0}}>
        <i className="devicon-python-plain text-6xl mr-5"></i>
        <i class="devicon-javascript-plain text-6xl mr-5"></i>
        <i class="devicon-cplusplus-plain text-6xl mr-5"></i>
        <i class="devicon-react-original text-6xl mr-3"></i>
        <i class="devicon-java-plain text-6xl mr-0.5"></i>
        <i class="devicon-mongodb-plain text-6xl"></i>
      </div>
      <div className="flex flex-row" style={{ zIndex: 1 }}>
        <div className="w-56 h-56 overflow-hidden rounded-full mt-5">
          <img
            src="/meportfolio.png"
            alt="Samantha Adams"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-56 h-56 overflow-hidden mt-5"
          style={{ zIndex: 1 }}
        >
          <img
            src="/miliofigure.png"
            alt="Faerie Court Milio from League of Legends"
          />
        </div>
      </div>
      <div className= "text-gray-500 mt-5 flex flex-row" style={{ zIndex: 0}}>
          <a href="https://www.linkedin.com/in/samantha-adams-a17917166/" target="_blank" rel="noopener noreferrer">
            <i class="devicon-linkedin-plain text-4xl mr-5"></i>
          </a>
          <a href="https://github.com/honeydewdrop/" target="_blank" rel="noopener noreferrer">
            <i class="devicon-github-original text-4xl mr-5"></i>
          </a>
          <div class="text-4xl mt-0.5 mr-4">
          <a href="mailto:samanthaadams200311@gmail.com" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail />
          </a>
          </div>
      </div>
    </div>
  );
};

export default Home;
