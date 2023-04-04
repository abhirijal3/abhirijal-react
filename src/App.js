import HomePage from './Pages/HomePage';
import './App.css'
import {Routes, Route} from "react-router-dom";
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
    </Routes>
    </div>
  );
}

export default App;
