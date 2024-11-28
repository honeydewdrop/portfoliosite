import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import FunFacts from './pages/funfacts.jsx';
import Home from './pages/home.jsx'; // Import the Home component
import Projects from './pages/projects.jsx'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} /> {/* Home component at root path */}
        <Route path='/fun-facts' element={<FunFacts />} /> {/* FunFacts component at /fun-facts */}
        <Route path='/my-projects' element={<Projects />} />
      </Routes>
  );
}

export default App;