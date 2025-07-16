import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/animations.module.css";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: "Indoor plants",
      description: "qwertyui asdfghjk cvbnm wertyui dfgh xcvbnm",
      features: ["qwerty qwerty qwert"],
      image: "./images/indoor_5.jpeg",
    },
    {
      title: "Interior Design",
      description: "qwertyui asdfghjk cvbnm wertyui dfgh xcvbnm",
      features: ["qwerty qwerty qwert"],
      image: "./images/indoor_6.jpeg",
    },
    {
      title: "Landscaping",
      description: "qwertyui asdfghjk cvbnm wertyui dfgh xcvbnm",
      features: ["qwerty qwerty qwert"],
      image: "./garden.webp",
    },
    {
      title: "Welcome Gift",
      description: "qwertyui asdfghjk cvbnm wertyui dfgh xcvbnm",
      features: ["qwerty qwerty qwert"],
      image: "./images/small_1.jpeg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design concepts to ongoing maintenance, we provide
            comprehensive garden services to bring your outdoor vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${
                isVisible
                  ? styles[`cardStagger${index + 1}`]
                  : styles.animateOnScroll
              }`}
            >
              <div
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full ${styles.hoverLift}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
