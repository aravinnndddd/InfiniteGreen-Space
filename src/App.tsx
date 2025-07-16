import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PlantCard from "./components/PlantCard";

function App() {
  return (
    <Router>
      <div className="font-inter">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <PlantCard />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
