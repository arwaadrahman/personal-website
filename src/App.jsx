import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main className="site">
        <Hero />
        <About />
        <Projects />
        <Coursework />
        <Contact />
      </main>
    </>
  );
}

export default App;