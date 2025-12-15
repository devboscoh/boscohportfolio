// src/App.jsx
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import GISProjects from './components/Sections/GISProjects'; 
import PhotoAlbum from './components/Sections/PhotoAlbum';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <GISProjects /> 
      <PhotoAlbum />
      <Contact />
    </Layout>
  );
}

export default App;