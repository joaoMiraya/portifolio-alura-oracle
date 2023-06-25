import './App.css';
import { useRef } from 'react';

import Header from './components/patterns/Header';
import Home from './components/pages/Home';
import SobreMim from './components/pages/SobreMim';
import Skills from './components/pages/Skills';
import Hobbies from './components/pages/Hobbies';
import Formacao from './components/pages/Formacao';
import Experiencia from './components/pages/Experiencia';
import Contato from './components/pages/Contato';
import Footer from './components/patterns/Footer';


function App() {
  const sobreRef = useRef();
  const skillsRef = useRef();
  const hobbiesRef = useRef();
  const formacaoRef = useRef();
  const projetosRef = useRef();


  function handleBackToAbout() {
    const aboutPosition = sobreRef.current.offsetTop;
    window.scrollTo({ top: aboutPosition, behavior: 'smooth' });
  }
  function handleBackToSkills() {
    const skillsPosition = skillsRef.current.offsetTop;
    window.scrollTo({ top: skillsPosition, behavior: 'smooth' });
  }
  function handleBackToHobbies() {
    const hobbiesPosition = hobbiesRef.current.offsetTop;
    window.scrollTo({ top: hobbiesPosition, behavior: 'smooth' });
  }
  function handleBackToFormation() {
    const formationPosition = formacaoRef.current.offsetTop;
    window.scrollTo({ top: formationPosition, behavior: 'smooth' });
  }
  function handleBackToProjects() {
    const projectPosition = projetosRef.current.offsetTop;
    window.scrollTo({ top: projectPosition, behavior: 'smooth' });
  }
  return (
    <>
      <Header
        handleBackToAbout={handleBackToAbout}
        handleBackToSkills={handleBackToSkills}
        handleBackToHobbies={handleBackToHobbies}
        handleBackToFormation={handleBackToFormation}
        handleBackToProjects={handleBackToProjects}
      />
      <Home />
      <div ref={sobreRef}>
        <SobreMim />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={hobbiesRef}>
        <Hobbies />
      </div>

      <div ref={formacaoRef}>
        <Formacao />
      </div>

      <div ref={projetosRef}>
        <Experiencia />
      </div>

      <Contato />
      <Footer />
    </>
  )
}

export default App
