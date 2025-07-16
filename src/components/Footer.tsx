import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/animations.module.css";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    "qwertyuiop",
    "qwertyuiop",
    "qwertyuiop",
    "qwertyuiop",
    "qwertyuiop",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div
              className={`flex items-center space-x-2 mb-6 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              }`}
            >
              <Leaf className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-playfair font-bold">
                InfiniteGreenSpace
              </span>
            </div>
            <p
              className={`text-gray-400 mb-6 leading-relaxed ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              } ${styles.delay100}`}
            >
              Creating beautiful, sustainable gardens that bring nature closer
              to home. Let us help you cultivate your dream outdoor space.
            </p>
            <div
              className={`flex space-x-4 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              } ${styles.delay200}`}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`bg-gray-800 hover:bg-emerald-600 p-3 rounded-full transition-colors duration-200 ${styles.hoverScale}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              }`}
            >
              Quick Links
            </h3>
            <ul
              className={`space-y-3 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              } ${styles.delay100}`}
            >
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              }`}
            >
              Services
            </h3>
            <ul
              className={`space-y-3 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              } ${styles.delay100}`}
            >
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              }`}
            >
              Contact Info
            </h3>
            <div
              className={`space-y-4 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              } ${styles.delay100}`}
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">hello@greenspace.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">1234567890</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5" />
                <span className="text-gray-400">
                  asdfghjkl
                  <br />
                  asdfghjkl 123
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 GreenSpace. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
