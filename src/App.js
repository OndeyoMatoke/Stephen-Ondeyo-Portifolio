import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </>
    
  );
}

export default App;
