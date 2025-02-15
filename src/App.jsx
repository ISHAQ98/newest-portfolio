import { useState } from "react";
import LoadingScreen from "./Ui/LoadingScreen";
import "./index.css";
import Navbar from "./Ui/Navbar";
import MobileMenu from "./Ui/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import AnimationOnScroll from "./Ui/AnimationOnScroll";
import Contact from "./components/sections/Contact";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={` min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimationOnScroll>
          <Home />
        </AnimationOnScroll>
        <AnimationOnScroll>
          <About />
        </AnimationOnScroll>
        <AnimationOnScroll>
          <Projects />
        </AnimationOnScroll>
        <AnimationOnScroll>
          <Contact />
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default App;
