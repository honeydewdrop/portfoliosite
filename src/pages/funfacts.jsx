import { Link } from 'react-router-dom';
import "../FunFacts.css";

function FunFacts() {
    return (
      <div
        className={`min-h-screen bg-gradient-to-r from-pink-500 via-blue-200 to-green-200 text-white flex flex-col justify-center items-center relative`}
      >
        <header className="text-6xl font-Ubuntu text-center mb-6 text-pink-400 relative" style={{ zIndex: 1 }}>
          Fun Facts About Me
        </header>
        <Link to={"/"} 
          className="text-sm font-mono hover:underline hover:text-amber-700 mb-3 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300">
          {"Home"}
        </Link>
        <ul className="text-gray-500 text-xl text-center list-disc list-inside relative" style={{ zIndex: 1 }}>
          <li>I am an only child.</li>
          <li>I collect pens and pencils.</li>
          <li>I am originally from rural Arizona.</li>
          <li><u>I am MBTI INFJ-T and Enneagram 5w4.</u>
          <li>Besides English, my household language is Spanish.</li>
          <span className="tooltip text-wrap">I share these traits with Johan Liebert (Monster), Zelda (The Legend of Zelda), & Aurora (League of Legends).</span>
          </li>
          <li>My favorite video games include League of Legends, The Legend of Zelda: Breath of the Wild, and Final Fantasy 6.</li>
        </ul>
        {/* <img 
          src="/viktorchibi.png" 
          alt="Chibi Viktor from League of Legends" 
          style={{ 
            width: '4%', 
            height: '11%', 
            transform: 'translateY(80px)', 
            marginLeft: '850px', 
            position: 'absolute', 
            zIndex: 0 // Place the image behind text
          }} 
        /> */}
      </div>
    );
}

export default FunFacts;
