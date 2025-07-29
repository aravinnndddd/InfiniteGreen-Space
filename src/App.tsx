import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PlantCard from "./components/PlantCard";
import { useEffect, useState } from "react";
import GreenSpaceLoader from "./components/loader"; // your loader component

function App() {
  const [loading, setLoading] = useState(true); // show loader initially

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <GreenSpaceLoader />
      ) : (
        <Router>
          <div className="font-inter">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <PlantCard />
              {/* <Contact /> */}
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
