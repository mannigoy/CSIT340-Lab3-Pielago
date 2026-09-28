
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'

function App() {
 

  return (<div className="app">
    <header className="app-header">
 <Navbar />
     <AboutSection/>
      <ContactSection/>
      <Footer/>
    </header>
  </div>)
    
}

export default App
