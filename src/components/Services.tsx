import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/animations.module.css";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: "Indoor plants",
      description:
        "Bring life to your space with our handpicked indoor plants. Ideal for homes and offices, they boost mood, purify air, and add a modern, green touch.",

      image: "./images/indoor_5.jpeg",
    },
    {
      title: "Interior Design",
      description:
        "We design interiors that breathe. Our nature-inspired setups combine greenery with elegance to create tranquil, uplifting environments.",

      image: "./images/interior.jpeg",
    },
    {
      title: "Landscaping",
      description:
        "From planning to planting, we craft beautiful, sustainable landscapes tailored to your space be it a cozy garden or a grand outdoor area.",

      image: "./images/landscaping.jpeg",
    },
    {
      title: "Welcome Gift",
      description:
        "Make a lasting impression with our plant-based gift packages. Thoughtful, eco-friendly, and perfect for any occasion  green is the new gesture.",

      image: "./images/welcome.jpeg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-200 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className={` rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden border border-gray-100 h-full backdrop-blur-2xl ${styles.hoverLift}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-gray-200 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
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
