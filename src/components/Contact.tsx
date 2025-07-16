import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/animations.module.css";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you can implement your own notification system)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "qqqq@qqqqq.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "1234567890",
      description: "time ",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? styles.fadeInUp : styles.animateOnScroll
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Let's <span className="text-emerald-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Get in touch with us to
            discuss your garden dreams and receive a personalized consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`space-y-8 ${
              isVisible ? styles.fadeInLeft : styles.animateOnScroll
            } ${styles.delay200}`}
          >
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We'd love to hear about your garden project. Whether you're
                starting from scratch or looking to enhance an existing space,
                our team is here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 ${
                    isVisible ? styles.fadeInUp : styles.animateOnScroll
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-emerald-600 font-medium">{info.value}</p>
                    <p className="text-gray-500 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${
              isVisible ? styles.fadeInRight : styles.animateOnScroll
            } ${styles.delay400}`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your garden project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${styles.buttonHover}`}
                >
                  {isSubmitting ? (
                    <div
                      className={`w-6 h-6 border-2 border-white border-t-transparent rounded-full ${styles.spinner}`}
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
