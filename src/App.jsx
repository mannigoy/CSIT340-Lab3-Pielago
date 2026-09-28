
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
function App() {
 

  return (<div className="app">
    <header className="app-header">
 <Navbar />
 <Hero/>
     <AboutSection/>
     <SkillsSection/>
      <ContactSection/>
      <ProjectsSection/>
      <Footer/>
    </header>
  </div>)
    
}

export default App
