import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home = ({ language }) => {

  const content = {

  en: {
    explore: "Explore Gallery",
    aboutTitle: "About Our Workshop",
    aboutDesc:
      "We specialize in handcrafted brass and silver idols using traditional craftsmanship and modern precision.",
    whyTitle: "Why Choose Us?",
    features: [
      { title: "Premium Quality", desc: "Finest materials and detailed finishing." },
      { title: "Custom Orders", desc: "Idols made as per your requirement." },
      { title: "On-Time Delivery", desc: "Safe and timely delivery guarantee." }
    ],
    productTitle: "Our Idol Categories",
    products: [
      "Brass Idols",
      "Silver Idols",
      "Temple Idols",
      "Custom Idols",
      "Festival Idols",
      "Decorative Idols"
    ],
    ctaTitle: "Order Your Favorite Idol Today",
    contact: "Contact Now"
  },

  mr: {
    explore: "गॅलरी पहा",
    aboutTitle: "आमच्या कार्यशाळेबद्दल",
    aboutDesc:
      "आम्ही पारंपरिक तंत्रज्ञान वापरून पितळ व चांदीच्या मूर्ती तयार करतो.",
    whyTitle: "आम्हाला का निवडावे?",
    features: [
      { title: "उच्च दर्जा", desc: "उत्तम साहित्य आणि फिनिशिंग." },
      { title: "सानुकूल मूर्ती", desc: "तुमच्या मागणीनुसार तयार." },
      { title: "वेळेत वितरण", desc: "सुरक्षित वितरण." }
    ],
    productTitle: "मूर्तीचे प्रकार",
    products: [
      "पितळ मूर्ती",
      "चांदी मूर्ती",
      "मंदिर मूर्ती",
      "सानुकूल मूर्ती",
      "उत्सव मूर्ती",
      "सजावटी मूर्ती"
    ],
    ctaTitle: "आजच ऑर्डर करा",
    contact: "संपर्क करा"
  },

  kn: {
    explore: "ಗ್ಯಾಲರಿ ಅನ್ವೇಷಿಸಿ",
    aboutTitle: "ನಮ್ಮ ಕಾರ್ಯಾಗಾರದ ಬಗ್ಗೆ",
    aboutDesc:
      "ನಾವು ಪರಂಪರೆ ಕಲೆಯೊಂದಿಗೆ ಕೈಯಿಂದ ಮಾಡಿದ ಬಿಸುಪ್ಲೇಟ್ ಮತ್ತು ಬೆಳ್ಳಿ ಪ್ರತಿಮೆಗಳ ತಯಾರಿಯಲ್ಲಿ ಪರಿಣತಿಗಳು.",

    whyTitle: "ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?",
    features: [
      { title: "ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟ", desc: "ಉತ್ತಮ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ವಿವರವಾದ ಪೂರ್ಣತೆ." },
      { title: "ಕಸ್ಟಮ್ ಆದೇಶಗಳು", desc: "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಪ್ರತಿಮೆಗಳು ತಯಾರಿಸಲಾಗುತ್ತದೆ." },
      { title: "ಸಮಯಕ್ಕೆ ವಿತರಣಾ", desc: "ಸುರಕ್ಷಿತ ಮತ್ತು ಸಮಯೋಚಿತ ವಿತರಣಾ ಖಾತರಿ." }
    ],

    productTitle: "ನಮ್ಮ ಪ್ರತಿಮೆಗಳ ವರ್ಗಗಳು",
    products: [
      "ಬ್ರಾಸ್ ಪ್ರತಿಮೆಗಳು",
      "ಬೆಳ್ಳಿ ಪ್ರತಿಮೆಗಳು",
      " ದೇವಾಲಯದ ಪ್ರತಿಮೆಗಳು",
      "ಕಸ್ಟಮ್ ಪ್ರತಿಮೆಗಳು",
      "ಪೂಜೆ/ಹಬ್ಬದ ಪ್ರತಿಮೆಗಳು",
      "ಅಲಂಕಾರ ಪ್ರತಿಮೆಗಳು"
    ],

    ctaTitle: "ನಿಮ್ಮ ನೆಚ್ಚಿನ ಪ್ರತಿಮೆಯನ್ನು ಇಂದು ಆರ್ಡರ್ ಮಾಡಿ",
    contact: "ಸಂಪರ್ಕಿಸಿ"
  }
};

  const t = content[language] || content.en;

  /* HERO IMAGES */
  const heroImages = [
    "/images/14.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage(prev =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>

{/* HERO */}
<section className="relative w-full h-[calc(100vh-120px)] mt-[130px] overflow-hidden">

  {heroImages.map((img, index) => (

    <motion.img
      key={index}
      src={img}
      className="absolute w-full h-full object-cover"
      animate={{ opacity: index === currentImage ? 1 : 0 }}
      transition={{ duration: 1 }}
    />

  ))}

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">

    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Premium Handcrafted Idols
    </h1>

    <Link
      to="/gallery"
      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-110 transition"
    >
      {t.explore}
    </Link>

  </div>

</section>


{/* FEATURED IDOLS */}
<section className="py-20 bg-blue-200 text-center overflow-hidden">

  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold text-red-800 mb-14"
  >
    Featured Idols
  </motion.h2>


  <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

    {["02.jpeg","12.jpeg","406.jpeg","002.jpeg","23.jpeg","107.jpeg","404.jpeg","52.jpeg"].map((img, i) => (

      <motion.div
        key={i}

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{
          duration: 0.7,
          delay: i * 0.2
        }}

        viewport={{ once: true }}

        whileHover={{
          scale: 1.08
        }}

        className="relative group bg-white shadow-2xl rounded-2xl overflow-hidden cursor-pointer"
      >


        {/* IMAGE */}
        <motion.img
          src={`/images/${img}`}
          className="h-64 w-full object-cover"

          whileHover={{
            scale: 1.15
          }}

          transition={{ duration: 0.6 }}
        />


        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>


        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}

          className="absolute bottom-4 left-0 right-0 text-white font-semibold text-lg"
        >
          Idol Design {i + 1}
        </motion.div>


        {/* SHINE EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

          <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-white/30 skew-x-12 group-hover:left-[125%] transition-all duration-1000"></div>

        </div>


      </motion.div>

    ))}

  </div>

</section>


<section className="relative py-20 text-center overflow-hidden">

  {/* Background gradient */}
  <div className="absolute inset-0 bg-yellow-300"></div>

  {/* Decorative blur circles */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-400/30 rounded-full blur-3xl"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-3xl mx-auto px-6"
  >

    <h2 className="text-4xl font-bold mb-6 text-red-800">
      {t.aboutTitle}
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
      {t.aboutDesc}
    </p>

  </motion.div>

</section>

{/* STATISTICS */}
<section className="py-20 bg-red-500 text-white">

  <div className="grid md:grid-cols-4 text-center gap-8 max-w-6xl mx-auto">

    <div>
      <h2 className="text-4xl font-bold">25+</h2>
      <p>Years Experience</p>
    </div>

    <div>
      <h2 className="text-4xl font-bold">5000+</h2>
      <p>Happy Customers</p>
    </div>

    <div>
      <h2 className="text-4xl font-bold">8000+</h2>
      <p>Idols Created</p>
    </div>

    <div>
      <h2 className="text-4xl font-bold">100%</h2>
      <p>Quality Guarantee</p>
    </div>

  </div>

</section>


{/* FEATURES */}
<section className="py-20 bg-yellow-300 text-center">

  <h2 className="text-4xl font-bold mb-10">
    {t.whyTitle}
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

    {t.features.map((f, i) => (

      <motion.div
        key={i}
        whileHover={{ scale: 1.1 }}
        className="bg-white p-6 shadow-xl rounded-xl"
      >

        <h3 className="font-bold text-xl mb-2">
          {f.title}
        </h3>

        <p>{f.desc}</p>

      </motion.div>

    ))}

  </div>

</section>


{/* WORKSHOP */}
<section className="py-20 bg-blue-300 text-center">

  <h2 className="text-4xl font-bold mb-10 text-red-800">
    Our Workshop
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

    {["work1.jpeg","14.jpeg","11.jpeg","16.jpeg","201.jpeg","204.jpeg"].map((img, i) => (

      <motion.img
        key={i}
        src={`/images/${img}`}
        whileHover={{ scale: 1.1 }}
        className="rounded-xl shadow-xl h-64 w-full object-cover"
      />

    ))}

  </div>

</section>


{/* PRODUCTS */}
<section className="py-20 bg-yellow-300 text-center">

  <h2 className="text-4xl font-bold mb-10">
    {t.productTitle}
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

    {t.products.map((p, i) => (

      <motion.div
        key={i}
        whileHover={{ scale: 1.1 }}
        className="bg-white p-6 shadow-xl rounded-xl"
      >
        {p}
      </motion.div>

    ))}

  </div>

</section>


<section className="relative py-20 text-white text-center overflow-hidden">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-blue-300 bg-center"
  ></div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue/80 via-yellow-200/80 to-yellow-80"></div>

  {/* Glow effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative z-10"
  >

    <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
      {t.ctaTitle}
    </h2>

    <Link
      to="/contact"
      className="
        inline-block
        bg-yellow-400
        text-black
        px-8 py-4
        rounded-full
        font-bold
        text-lg
        shadow-xl
        hover:bg-white
        hover:scale-110
        transition
        duration-300
      "
    >
      {t.contact}
    </Link>

  </motion.div>

</section>


{/* FLOATING BUTTONS CONTAINER */}
<div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

  {/* CALL BUTTON */}
  <a
    href="tel:+919876543210"
    className="bg-blue-600 text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition flex items-center gap-2"
  >
    📞 Call
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
  className="bg-green-500 text-white px-5 py-4 rounded-full shadow-xl hover:scale-110 transition flex items-center gap-2 animate-bounce"

>
  💬
</motion.a>

</div>


    </div>
  );
};

export default Home;