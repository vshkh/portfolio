import './App.css'
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import NoPage from "./pages/NoPage"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App
