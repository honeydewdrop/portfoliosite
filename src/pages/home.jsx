import FunFacts from './/funfacts.jsx'
import { Link } from 'react-router-dom';
const Home = () => {
    return (    
<div className={`min-h-screen bg-gradient-to-r from-pink-500 via-blue-200 to-green-200 text-white flex flex-col justify-center items-center`}>
  <header className="text-6xl font-Ubuntu text-center mb-6 text-pink-400">
    Hello!
  </header>
<div className="flex-row">
<Link to={"/fun-facts"} 
     className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 mr-5 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300">
{"Fun facts about me"}
</Link>
<Link to={"/my-projects"} 
     className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300">
{"My Projects"}
</Link>
</div>
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="heart absolute animate-heart1"></div>
    <div className="heart absolute animate-heart2"></div>
    <div className="heart absolute animate-heart3"></div>
    <div className="heart absolute animate-heart4"></div>
    <div className="heart absolute animate-heart5"></div>
  </div>
  <div className="text-white-500 text-2xl text-center mb-5 mt-3">I'm Samantha Adams, a 3rd-year computer science (& geosciences)
    student at the College of the Holy Cross in Worcester, MA.
  </div>
  <div className="text-white-500 text-3xl text-center">⋆｡°✩⋆｡°✩⋆｡°✩⋆｡°✩
  </div>
  <div className="text-white-500 text-2xl text-center mt-5">I am interested in a career in software engineering. I enjoy both front-end & back-end work.
  </div>
  <div className="text-white-500 text-2xl text-center mt-5">I'm dedicated to learning new technical skills and putting them forth for social good.</div>
  <div>
  <i class="devicon-python-plain"></i>
  </div>
  <div className= "flex flex-row">
    <div className="w-56 h-56 overflow-hidden rounded-full mt-10">
        <img src="/meportfolio.png" alt="Samantha Adams" className="w-full h-full object-cover" />
    </div>
    <div className = "w-56 h-56 overflow-hidden mt-10">
  <img src="/miliofigure.png" alt="Faerie Court Milio from League of Legends"/>
  </div>
  </div>
</div>
    );
}
export default Home;