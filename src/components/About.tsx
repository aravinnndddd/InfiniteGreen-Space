import { Leaf, Users, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/animations.module.css";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Leaf, number: "100+", label: "Gardens Created" },
    { icon: Award, number: "2+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-b from-green-950 to-black"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          {" "}
          <span className="text-white text-[20px] font-bold"> About</span>
          <h3 className="text-3xl font-playfair font-bold  relative text-gray-200">
            <span className="text-emerald-400 text-[30px]  md:justify-center md:items-center Fugaz">
              Infinite Green Space
            </span>
            <span className="font-thin text-[25px] pl-1 hidden md:flex md:justify-center md:  jino ">
              by Jino
            </span>
            <span className="font-thin text-[25px] pl-1 absolute left-[258px] top-6 md:hidden  jino ">
              by Jino
            </span>
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mt-10">
            Discover a wide variety of plants from vibrant flowers to lush
            indoor greens, all in one place. Whether you're a seasoned gardener
            or just starting out, Infinite Green Space by Jino helps you
            transform any space into a living, breathing paradise. Shop, learn,
            and grow with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-center mb-16">
          <div
            className={`${
              isVisible ? styles.fadeInLeft : styles.animateOnScroll
            } ${styles.delay200}`}
          >
            <div className="relative">
              <img
                src="./images/indoor_7.jpeg"
                alt="Beautiful garden design"
                className="rounded-2xl shadow-2xl object-cover w-[80%] mx-8 h-[300px] md:h-[400px]"
              />
            </div>
          </div>

          <div
            className={`space-y-6 ${
              isVisible ? styles.fadeInRight : styles.animateOnScroll
            } ${styles.delay400}`}
          >
            <h3 className="text-3xl font-playfair font-bold  relative text-gray-200">
              <span className="text-emerald-600 text-[30px]  md:justify-center md:items-center Fugaz">
                Infinite Green Space
              </span>
              <span className="font-thin text-[25px] pl-1 absolute left-[255px] top-6 flex justify-end md:justify-center md:items-center jino">
                by Jino
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              At Infinite Green Space by Jino, we turn spaces into soulful green
              sanctuaries blending elegance, wellness, and a touch of fun. From
              curated indoor plants and aesthetic pots to personalized green
              decor and plant gifts, we bring calm, class, and character into
              every home or workspace.
            </p>
            <br />
            <p className="text-gray-400 leading-relaxed">
              Whether you're a plant lover, a busy beginner, or someone seeking
              peace in your daily routine, we design with care and creativity.
              It’s not just about adding greens it’s about styling a lifestyle
              that breathes. Discover the art of living with nature beautifully
              rooted, consciously curated, and always full of fresh vibes.
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
