import './App.css';
import Navbar from "./components/navbar/Navbar";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/footer/Footer";

const app_style = { width: '100%', height: 'auto' };

function App() {
  return (
    <div className="App" style= {app_style}>
      <Navbar />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
