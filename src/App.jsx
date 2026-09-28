
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
function App() {
 

  return (<div className="app">
    <header className="app-header">
 <Navbar />
 <Hero/>
     <AboutSection/>
     <SkillsSection/>
     <ProjectsSection/>
     <ExperienceSection/>
      <ContactSection/>
      
      <Footer/>
    </header>
  </div>)
    
}

export default App
