import HomePage from './Pages/HomePage';
import './App.css'
import {Routes, Route} from "react-router-dom";
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
    </Routes>
    </div>
  );
}

export default App;
