import { Leaf, Users, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/animations.module.css";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { icon: Users, number: "x+", label: "Happy Clients" },
    { icon: Leaf, number: "x+", label: "Gardens Created" },
    { icon: Award, number: "x+", label: "Years Experience" },
    { icon: Heart, number: "x+", label: "Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-green-900 to-black"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            About <span className="text-emerald-600">GreenSpace</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover a wide variety of plants from vibrant flowers to lush
            indoor greens, all in one place. Whether you're a seasoned gardener
            or just starting out, GreenSpace helps you transform any space into
            a living, breathing paradise. Shop, learn, and grow with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            className={`${
              isVisible ? styles.fadeInLeft : styles.animateOnScroll
            } ${styles.delay200}`}
          >
            <div className="relative">
              <img
                src="./garden.webp"
                alt="Beautiful garden design"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div
            className={`space-y-6 ${
              isVisible ? styles.fadeInRight : styles.animateOnScroll
            } ${styles.delay400}`}
          >
            <h3 className="text-3xl font-playfair font-bold text-gray-200">
              GreenSpace
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Discover a wide variety of plants from vibrant flowers to lush
              indoor greens, all in one place. Whether you're a seasoned
              gardener or just starting out, GreenSpace helps you transform any
              space into a living, breathing paradise. Shop, learn, and grow
              with us.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Discover a wide variety of plants from vibrant flowers to lush
              indoor greens, all in one place. Whether you're a seasoned
              gardener or just starting out, GreenSpace helps you transform any
              space into a living, breathing paradise. Shop, learn, and grow
              with us.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                Sustainable Design
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                Native Plants
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                Eco-Friendly
              </span>
            </div> */}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          } ${styles.delay600}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-900 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-emerald-100" />
              </div>
              <div className="text-3xl font-bold text-gray-300 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
