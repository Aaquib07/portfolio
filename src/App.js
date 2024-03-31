import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact2 from './components/Contact2';
import Education from './components/Education'

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
