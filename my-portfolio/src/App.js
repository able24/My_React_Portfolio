import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectGallery from './pages/ProjectGallery';
import Contact from './pages/Contact';

import Work from './Project.json';

function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/project" element = {<Project work = {Work} />} />
      <Route path="/projectgallery" element = {<ProjectGallery />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>
      
    </>
  );
}

export default App;
