import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Router>
      <Navbar/>
      <Hero/>
      <Routes>
      </Routes>
    </Router>
  )
}

export default App
