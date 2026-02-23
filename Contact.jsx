import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      language === "en"
        ? "Thank you! We will contact you soon."
        : language === "mr"
        ? "धन्यवाद! आम्ही लवकरच संपर्क करू."
        : "ಧನ್ಯವಾದಗಳು! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ."
    );
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="pt-40 pb-20 min-h-screen bg-yellow-300 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-red-700 mb-4 relative">
          {language === "en"
            ? "Contact Us"
            : language === "mr"
            ? "संपर्क करा"
            : "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ"}
        </h1>

        {/* Animated icon under heading */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <MapPin size={40} className="text-red-700 animate-bounce" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              {language === "en"
                ? "Get In Touch"
                : language === "mr"
                ? "आमच्याशी संपर्क साधा"
                : "ಸಂಪರ್ಕದಲ್ಲಿ ಇರಲು"}
            </h2>

            <p className="mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-red-700" />
              {language === "en"
                ? "Address: Khanadal, Tal. Gadhinglaj, Kolhapur, Maharashtra"
                : language === "mr"
                ? "पत्ता: खणदाळ, ता. गडहिंग्लज, जि. कोल्हापूर, महाराष्ट्र"
                : "ವಿಳಾಸ: ಖಾಣದಾಳ್, ತಾ. ಗಡ್ಹಿಂಗ್ಲಾಜ್, ಕೊಲ್ಹಾಪುರ, ಮಹಾರಾಷ್ಟ್ರ"}
            </p>

            <p className="mb-4 flex items-center gap-2">
              <Phone size={20} className="text-green-600" />
              <a href="tel:+919923071747" className="text-green-600 font-semibold">
                +91 9923071747
              </a>
            </p>

          <p className="mb-4 flex items-center gap-2">
              <Phone size={20} className="text-green-600" />
              <a href="tel:+919923071747" className="text-green-600 font-semibold">
                +91 9503926204
              </a>
            </p>

            <p className="mb-4 flex items-center gap-2">
              <Phone size={20} className="text-green-600" />
              <a href="tel:+919923071747" className="text-green-600 font-semibold">
                +91 9764877890
              </a>
            </p>

            <p className="mb-4 flex items-center gap-2">
              <Mail size={20} className="text-blue-600" />
              <a href="mailto:info@murtikala.com" className="text-blue-600 font-semibold">
                info@murtikala.com
              </a>
            </p>

            <p className="mt-6 text-gray-600">
              {language === "en"
                ? "We accept custom orders for all types of idols."
                : language === "mr"
                ? "सर्व प्रकारच्या मूर्तींसाठी सानुकूल ऑर्डर स्वीकारल्या जातात."
                : "ಎಲ್ಲಾ ರೀತಿಯ ಮೂರ್ತಿಗಳಿಗೆ ನಾವು ಕಸ್ಟಮ್ ಆದೇಶಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೇವೆ."}
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              {language === "en"
                ? "Send a Message"
                : language === "mr"
                ? "संदेश पाठवा"
                : "ಸಂದೇಶ ಕಳುಹಿಸಿ"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder={
                  language === "en"
                    ? "Your Name"
                    : language === "mr"
                    ? "तुमचे नाव"
                    : "ನಿಮ್ಮ ಹೆಸರು"
                }
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder={
                  language === "en"
                    ? "Your Phone"
                    : language === "mr"
                    ? "तुमचा फोन"
                    : "ನಿಮ್ಮ ಫೋನ್"
                }
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                name="message"
                rows="4"
                placeholder={
                  language === "en"
                    ? "Your Message"
                    : language === "mr"
                    ? "तुमचा संदेश"
                    : "ನಿಮ್ಮ ಸಂದೇಶ"
                }
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition"
              >
                {language === "en"
                  ? "Send Message"
                  : language === "mr"
                  ? "संदेश पाठवा"
                  : "ಸಂದೇಶ ಕಳುಹಿಸಿ"}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:+919923071747"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition text-xl"
      >
        📞
      </a>
   {/* Floating WhatsApp Button */}
<motion.a
  href={`https://wa.me/919923071747?text=${
    language === "en"
      ? "Hello, I want to inquire about your idols"
      : language === "mr"
      ? "नमस्कार, मला तुमच्या मूर्तीबद्दल विचारायचे आहे"
      : "ಹಲೋ, ನಾನು ನಿಮ್ಮ ಮೂರ್ತಿಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ"
  }`}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ scale: 0 }}
  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  whileHover={{ scale: 1.3, rotate: 0 }}
  className="fixed bottom- right- bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 flex items-center justify-center text-2xl cursor-pointer"
>
  💬
</motion.a>

    </div>
  );
};

export default Contact;