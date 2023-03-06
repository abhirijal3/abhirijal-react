import HomePage from './Pages/HomePage';
import './App.css'
import {Routes, Route} from "react-router-dom";
import About from './Pages/About';

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
