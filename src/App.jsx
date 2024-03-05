import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/Nav/NavBar";
import Portifolio from "./components/Portifolio/Portifolio";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portifolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
