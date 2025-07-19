import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "../styles/animations.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="w-full flex justify-center">
      <nav
        className={`fixed  top-5 w-[90%] items-center rounded-3xl  z-50 transition-all duration-300 ${
          styles.navbarSlide
        } ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
            : "bg-white/80 py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-2 cursor-pointer ${styles.hoverScale}`}
              onClick={() => scrollToSection("hero")}
            >
              <img src="./logo.png" alt="logo" className="w-30" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                    isScrolled ? "text-gray-700" : "text-black/90"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div
              className={`md:hidden mt-4  rounded-lg shadow-lg p-4 ${styles.fadeInUp}`}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
