
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Actions from "./components/Actions";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </div>
  );
}

export default App;
