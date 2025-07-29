import { Mail, Phone, Instagram } from "lucide-react";
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
    "Indoor plants",
    "Interior Design",
    "Landscaping",
    "Welcome Gift",
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/infinite_green_space/",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "#",
      label: "Mail",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-b  border-t-emerald-600 from-green-800 to-black text-white pt-16 pb-5"
      ref={ref}
    >
      <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent flex rounded-full justify-center mx-auto mb-12"></div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div
              className={`flex items-center space-x-2 mb-6 ${
                isVisible ? styles.fadeInUp : styles.animateOnScroll
              }`}
            >
              <h3 className="text-3xl font-playfair font-bold  text-gray-200">
                <span className="text-green-500">InfiniteGreenSpace</span>
                <span className="font-thin text-[15px] pl-1 jino">by Jino</span>
              </h3>
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
                  className={`bg-green-800 w-[120px] flex justify-center items-center px-3 hover:bg-emerald-600 p-3 gap-2 rounded-full transition-colors duration-200 ${styles.hoverScale}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg  mb-6 ${
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
              className={`text-lg  mb-6 ${
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
              className={`text-lg  mb-6 ${
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
                <span className="text-gray-400">
                  infinitegreenspace@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-gray-400">9446611887</span>
                  <br />
                  <span className="text-gray-400">9074569608</span>
                </div>
              </div>
              {/* <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5" />
                <span className="text-gray-400">
                  asdfghjkl
                  <br />
                  asdfghjkl 123
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div
          className={` pt-8 flex text-center flex-col md:flex-row  justify-evenly items-center ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          <p className="text-gray-400 text-center text-sm mb-4 md:mb-0">
            © 2025 InfiniteGreenSpace. All rights reserved.
          </p>
          <p className="flex gap-2 justify-center items-center ">
            <span>Made with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.82587 1.81074C2.43755 1.19924 3.26705 0.85572 4.13197 0.85572C4.99689 0.85572 5.82639 1.19924 6.43807 1.81074L7.39379 2.76563L8.3495 1.81074C8.65039 1.4992 9.01031 1.25071 9.40827 1.07976C9.80622 0.908809 10.2342 0.818828 10.6673 0.815065C11.1004 0.811301 11.53 0.893831 11.9308 1.05784C12.3317 1.22184 12.6959 1.46404 13.0021 1.77031C13.3084 2.07657 13.5506 2.44075 13.7146 2.84162C13.8786 3.24248 13.9611 3.672 13.9574 4.1051C13.9536 4.5382 13.8636 4.96622 13.6927 5.36417C13.5217 5.76213 13.2732 6.12205 12.9617 6.42294L7.39379 11.9917L1.82587 6.42294C1.21437 5.81126 0.87085 4.98176 0.87085 4.11684C0.87085 3.25192 1.21437 2.42242 1.82587 1.81074Z"
                fill="#FF4048"
              ></path>
            </svg>
            <span>| by</span>
            <a
              className="font-bold"
              target="_blank"
              href="https://ig.me/m/cad__designs/"
            >
              Cad Design
            </a>
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
