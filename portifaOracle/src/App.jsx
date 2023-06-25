import './App.css';
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



  return (
    <>
      <Header />
      <Home />
      <SobreMim />
      <Skills />
      <Hobbies />
      <Formacao />
      <Experiencia />
      <Contato />
      <Footer />
    </>
  )
}

export default App
