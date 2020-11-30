
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/heroSection/Hero';
import About from './components/pages/About/About';
import Sevices from './components/pages/services/Services';
import Portfolio from './components/pages/portfolio/Portfolio';
import Contact from './components/pages/contact/Contact';
import './App.css';
import Footer  from './components/pages/footer/Footer';


function App() {
   
  return (
    <div className="App"> 
        <Navbar />   
        <div id="home">
            <Hero />
        </div>
        <div id="about" className="bg-light">
            <About />
        </div>
        <div id="service">
            <Sevices />
        </div>
        <div id="portfolio" className="bg-lavender">
            <Portfolio />
        </div>
        <div id="contact" style={{backgroundColor : '#FDFDFD'}}>
            <Contact />
        </div>
        <div id="footer">
           <Footer />
        </div>
    </div>
  );
}

export default App;
