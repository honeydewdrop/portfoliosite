import { Link } from 'react-router-dom';

function FunFacts() {
    return (
      <div
        className={`min-h-screen bg-gradient-to-r from-pink-500 via-blue-200 to-green-200 text-white flex flex-col justify-center items-center relative`}
      >
                <Link to={"/"} 
     className="text-sm font-mono hover:underline hover:text-amber-700 mt-1 inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white-300">
{"Home"}
</Link>
        <header className="text-6xl font-Ubuntu text-center mb-6 text-pink-400 relative" style={{ zIndex: 1 }}>
          Fun Facts About Me
        </header>
        <div className="text-white-500 text-3xl text-center mb-4 relative" style={{ zIndex: 1 }}>
          Here are some interesting facts about me:
        </div>
        <ul className="text-white-500 text-3xl text-center list-disc list-inside relative" style={{ zIndex: 1 }}>
          <li>I am an only child.</li>
          <li>I collect pens and pencils.</li>
          <li>I am originally from rural Arizona.</li>
          <li>My favorite show is Arcane, and my favorite character is Viktor.</li>
          <li>My favorite video games include League of Legends, The Legend of Zelda: Breath of the Wild, and Final Fantasy 6.</li>
        </ul>
        <img 
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
        />
      </div>
    );
}

export default FunFacts;
