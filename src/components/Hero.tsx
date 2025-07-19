import { ArrowRight, ArrowUp, Play } from "lucide-react";
import styles from "../styles/animations.module.css";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-green-900 to-black" />

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        // style={{ backgroundImage: "url('./garden.webp')" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight ${styles.heroTitle}`}
          >
            Grow your green dreams
            <span className="text-emerald-400"> With Us</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${styles.heroSubtitle}`}
          >
            Time spent among plants is never wasted. Choose the best indoor and
            outdoor plants to beautify your favorite spaces.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${styles.heroButtons}`}
          >
            <a
              href="https://ig.me/m/infinite_green_space"
              className={`bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 shadow-xl hover:shadow-2xl ${styles.buttonHover}`}
            >
              <span>Shop Now</span>
              <ArrowRight size={20} />
            </a>

            <button
              onClick={() => scrollToSection("services")}
              className={`border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 ${styles.buttonHover}`}
            >
              <Play size={20} />
              <span>Show more</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-[-20vh] left-1/2 transform -translate-x-1/2 ${styles.heroScroll}`}
        >
          <ArrowUp
            className={`h-10 bg-gradient-to-b from-emerald-400 to-transparent rounded-full ${styles.bounce}`}
          />
        </div>
      </div>
      <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-[90%] h-[1px]  bg-gradient-to-r from-transparent via-white to-transparent  " />
    </section>
  );
};

export default Hero;
