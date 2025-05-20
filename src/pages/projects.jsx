import React, { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null); // New state to store content

  // Function to open overlay and set content based on the clicked image
  const on = (project) => {
    setOverlayContent(project);
    setIsOverlayVisible(true);
  };

  // Function to close the overlay
  const off = () => setIsOverlayVisible(false);

  // Data for the projects
  const projects = [
    {
      id: 1,
      name: "Pantry to Plate",
      image: "/pantrytoplatesample.png",
      description: (
        <>
          <header className="text-white-500 text-6xl mb-3">
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            Pantry to Plate
          </header>
          <i className="devicon-csharp-plain text-4xl mb-2"></i>
          <i className="devicon-unity-plain text-4xl ml-5 mb-2"></i>
          <li>This was a project for CSCI324 Programming Languages: Design & Implementation with two teammates.</li>
          <li>We used Spoonacular API to make GET requests asynchronously for recipe info.</li>
          <li>Our front-end was made with Blazor and we filtered what data was displayed with LINQ.</li>
          <div className="mt-3 mb-2 hover:underline">
            <a href="https://github.com/honeydewdrop/recipes">Github repository</a>
          </div>
        </>
      ),
    },
    {
      id: 1,
      name: "Althea",
      image: "/AltheaDemo.png",
      description: (
        <>
          <header className="text-white-500 text-6xl mb-3">
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            Althea
          </header>
          <ul className="mr-5 mb-2">My parts:
            <i className="devicon-javascript-plain text-4xl ml-5 mb-2"></i>
            <i className="devicon-react-original text-4xl ml-5 mb-2"></i>
            <i className="devicon-postman-plain text-4xl ml-5 mb-2"></i>
          </ul>
          <ul className="mr-2 mb-2">Teammates':
            <i className="devicon-python-plain text-4xl ml-5"></i>
            <i className="devicon-django-plain text-4xl ml-5"></i>
            <i className="devicon-flutter-plain text-4xl ml-5"></i>
          </ul>
          <li>I collaborated with 3 teammates to create this app at HackHarvard 2024 and we were on the patient safety track.</li>
          <li>Drug data was parsed from the official FDA website using Google Cloud SDK's Gemini for accurate information.</li>
          <li>After wrapping up the front-end, I helped test the API endpoints with Postman.</li>
          <div className="mt-3 mb-2 hover:underline">
            <a href="https://github.com/Givikap/Althea">Github repository</a>
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: "BearChat",
      image: "/bearChatDemo.png",
      description: (
        <>
          <header className="text-white-500 text-6xl mb-3">
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            BearChat
          </header>
          <i className="devicon-javascript-plain text-4xl ml-5 mb-2"></i>
          <i className="devicon-react-original text-4xl ml-5 mb-2"></i>
          <i className="devicon-nodejs-plain text-4xl ml-5 mb-2"></i>
          <i className="devicon-mongodb-plain text-4xl ml-5 mb-2"></i>
          <li>This was my first web/full-stack project that I did to learn new things over summer 2024.</li>
          <li>Created a real-time messaging app with user authentication and live status updates using Socket.io.</li>
          <li>Used MongoDB for data storage and Express.js for the backend.</li>
          <div className="mt-3 mb-2 h hover:underline">
            <a href="https://github.com/honeydewdrop/BearChat-site">Github repository</a>
          </div>
        </>
      ),
    },
    {
      id: 4,
      name: "PlayVault",
      image: "/PlayVaultDemo.png",
      description: (
        <>
          <header className="text-white-500 text-6xl mb-3">
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            PlayVault
          </header>
          <i className="devicon-django-plain text-4xl ml-2 mb-2"></i>
          <i className="devicon-postgresql-plain text-4xl ml-5 mb-2"></i>
          <i className="devicon-jira-plain text-4xl ml-5 mb-2"></i>
          <li>I worked with another teammate on this in a software engineering project course.</li>
          <li>I used IDGB's database to get information about ~286,000 games and storing them locally in a PostgreSQL database.</li>
          <li>I created stories on Jira for my teammate and I and working in 2-week sprints, Agile style.</li>
          <div className="mt-3 mb-2 hover:underline">
            <a href="https://github.com/honeydewdrop/BearChat-site">Github repository</a>
          </div>
        </>
      ),
    },
    {
      id: 5,
      name: "FPS Game",
      image: "/FPSGameDemo.png",
      description: (
        <>
          <header className="text-white-500 text-6xl mb-3">
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            FPS Game
          </header>
          <i className="devicon-csharp-plain text-4xl mb-2"></i>
          <i className="devicon-unity-plain text-4xl ml-5 mb-2"></i>
          <li>This was my first ever personal project.</li>
          <li>This project helped me visualize object-oriented programming techniques.</li>
          <li>I incorporated both button and mouse controls for the player.</li>
          <div className="mt-3 mb-2 hover:underline">
            <a href="https://github.com/honeydewdrop/BearChat-site">Github repository</a>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-blue-200 to-green-200 text-white flex flex-col justify-center items-center relative">
      <header className="text-6xl font-Ubuntu text-center mb-6 text-pink-400 relative" style={{ zIndex: 1 }}>
        My projects so far
      </header>
      <Link
        to={"/"}
        className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300"
      >
        {"Home"}
      </Link>
      <div className="grid grid-cols-2 gap-2 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="relative">
            <img
              src={project.image}
              alt={`${project.name} project screenshot`}
              onClick={() => on(project)}
              className="w-9/12 h-full cursor-pointer mx-auto"
            />
          </div>
        ))}
      </div>
      {isOverlayVisible && (
        <div
          style={{
            position: "fixed",
            top: "20vh",
            left: "45vh",
            width: "50%",
            height: "55%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            {overlayContent && overlayContent.description}
            <button
              onClick={off}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
