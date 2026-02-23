import { motion } from "framer-motion";
import { Award, Users, Hammer, Star } from "lucide-react";

const About = ({ language }) => {

  const text = {

    en: {
      title: "About Us",
      subtitle: "Traditional Brass Idol Makers with Quality and Trust",
      description:
        "Shri Kalikadevi Brass Articles Industries is a traditional idol making workshop located in Khanadal, Tal. Gadhinglaj, Dist. Kolhapur. We specialize in making high quality brass and silver idols, temple works, kalash, and custom religious items. With many years of experience, we are known for our fine craftsmanship, durability, and beautiful finishing.",
      highlights: [
        "20+ Years Experience",
        "5000+ Idols Created",
        "Temple Work Specialists",
        "Custom Orders Available"
      ],
      missionTitle: "Our Mission",
      mission:
        "Our mission is to preserve traditional art and provide high quality idols and temple works to our customers with trust, devotion, and perfection.",
      stats: [
        { icon: <Award size={40} />, value: "20+", label: "Years Experience" },
        { icon: <Users size={40} />, value: "5000+", label: "Happy Customers" },
        { icon: <Hammer size={40} />, value: "300+", label: "Temple Projects" },
        { icon: <Star size={40} />, value: "100%", label: "Quality Work" }
      ]
    },

    mr: {
      title: "आमच्याबद्दल",
      subtitle: "पारंपरिक पितळ मूर्ती निर्माते",
      description:
        "श्री कालिकादेवी ब्रास आर्टिकल्स इंडस्ट्रीज, खणदाळ, ता. गडहिंग्लज, जि. कोल्हापूर येथे स्थित आहे. आम्ही उच्च दर्जाच्या पितळ व चांदी मूर्ती, मंदिर काम, कळस, आणि कस्टम धार्मिक वस्तू बनवतो. अनेक वर्षांच्या अनुभवामुळे आम्ही उत्कृष्ट गुणवत्ता व सुंदर कामासाठी ओळखले जातो.",
      highlights: [
        "20+ वर्षांचा अनुभव",
        "5000+ मूर्ती तयार",
        "मंदिर काम तज्ञ",
        "कस्टम ऑर्डर उपलब्ध"
      ],
      missionTitle: "आमचे ध्येय",
      mission:
        "पारंपरिक कला जतन करणे आणि ग्राहकांना उत्कृष्ट दर्जाच्या मूर्ती व मंदिर काम सेवा देणे हे आमचे ध्येय आहे.",
      stats: [
        { icon: <Award size={40} />, value: "20+", label: "वर्षांचा अनुभव" },
        { icon: <Users size={40} />, value: "5000+", label: "समाधानी ग्राहक" },
        { icon: <Hammer size={40} />, value: "300+", label: "मंदिर प्रोजेक्ट" },
        { icon: <Star size={40} />, value: "100%", label: "उत्तम गुणवत्ता" }
      ]
    },

    kn: {
      title: "ನಮ್ಮ ಬಗ್ಗೆ",
      subtitle: "ಪಾರಂಪರಿಕ ಪಿತ್ತಳ ಮೂರ್ತಿ ತಯಾರಕರು",
      description:
        "ಶ್ರೀ ಕಾಲಿಕಾದೇವಿ ಬ್ರಾಸ್ ಆರ್ಟಿಕಲ್ಸ್ ಇಂಡಸ್ಟ್ರೀಸ್ ಖಾಣದಾಳ್, ತಾ. ಗಡ್ಹಿಂಗ್ಲಜ್, ಜಿ. ಕೊಲ್ಹಾಪುರದಲ್ಲಿ ಇರುವ ಪಾರಂಪರಿಕ ಮೂರ್ತಿ ತಯಾರಿಕಾ ಕಾರ್ಯಾಗಾರವಾಗಿದೆ. ನಾವು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಪಿತ್ತಳ ಮತ್ತು ಬೆಳ್ಳಿ ಮೂರ್ತಿಗಳು, ದೇವಾಲಯ ಕೆಲಸಗಳು, ಕಲಶಗಳು ಮತ್ತು ಕಸ್ಟಮ್ ಧಾರ್ಮಿಕ ವಸ್ತುಗಳನ್ನು ತಯಾರಿಸಲು ಪರಿಣತಿ ಹೊಂದಿದ್ದೇವೆ. ಅನೇಕ ವರ್ಷಗಳ ಅನುಭವದಿಂದ, ನಾವು ನಿಖರವಾದ ಕೌಶಲ್ಯ, ಸ್ಥಿರತೆ ಮತ್ತು ಸುಂದರ ಪೂರ್ಣತೆಯಿಗಾಗಿ ಪ್ರಸಿದ್ಧರಾಗಿದ್ದೇವೆ.",
      highlights: [
        "20+ ವರ್ಷಗಳ ಅನುಭವ",
        "5000+ ಮೂರ್ತಿಗಳು ತಯಾರಿಸಿದವು",
        "ದೇವಾಲಯ ಕೆಲಸ ತಜ್ಞರು",
        "ಕಸ್ಟಮ್ ಆದೇಶಗಳು ಲಭ್ಯ"
      ],
      missionTitle: "ನಮ್ಮ ಧ್ಯೇಯ",
      mission:
        "ಪಾರಂಪರಿಕ ಕಲೆ ಮತ್ತು ಕೈಗಾರಿಕೆಯನ್ನು ಉಳಿಸಿಕೊಂಡು, ಗ್ರಾಹಕರಿಗೆ ವಿಶ್ವಾಸ, ಭಕ್ತಿ ಮತ್ತು ಪರಿಪೂರ್ಣತೆಯೊಂದಿಗೆ ಉನ್ನತ ಗುಣಮಟ್ಟದ ಮೂರ್ತಿಗಳು ಮತ್ತು ದೇವಾಲಯ ಕೆಲಸಗಳನ್ನು ಒದಗಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ.",
      stats: [
        { icon: <Award size={40} />, value: "20+", label: "ಅನುಭವ ವರ್ಷಗಳು" },
        { icon: <Users size={40} />, value: "5000+", label: "ಸಂತೋಷದ ಗ್ರಾಹಕರು" },
        { icon: <Hammer size={40} />, value: "300+", label: "ದೇವಾಲಯ ಪ್ರಾಜೆಕ್ಟ್" },
        { icon: <Star size={40} />, value: "100%", label: "ಗುಣಮಟ್ಟ" }
      ]
    }

  };

  const t = text[language] || text.en;

  return (
    <div className="pt-40 pb-20 bg-yellow-300 min-h-screen">

      {/* TITLE */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">{t.title}</h1>
        <p className="text-lg text-gray-700">{t.subtitle}</p>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mt-4"></div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto text-center px-6 mb-16">
        <p className="text-lg text-gray-700 leading-relaxed">{t.description}</p>
      </motion.div>

      {/* HIGHLIGHTS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-16">
        {t.highlights.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} whileHover={{ scale: 1.08 }} className="bg-white p-6 rounded-xl shadow-lg text-center border border-yellow-200">
            <h3 className="font-semibold text-red-800">{item}</h3>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-16">
        {t.stats.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }} className="bg-gradient-to-br from-yellow-100 to-orange-200 p-6 rounded-xl text-center shadow-xl">
            <div className="text-red-700 flex justify-center mb-3">{stat.icon}</div>
            <h2 className="text-2xl font-bold text-red-800">{stat.value}</h2>
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* MISSION */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-4">{t.missionTitle}</h2>
        <p className="text-lg text-gray-700">{t.mission}</p>
      </motion.div>

      {/* OWNER SECTION */}
      <section className="py-20 mt-16 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
        <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-12">
          {language === "en" ? "Meet Our Owner" : language === "mr" ? "आमचे मालक" : "ನಮ್ಮ ಮಾಲೀಕರು"}
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          {/* OWNER IMAGE */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex justify-center">
            <img src="/images/13.jpeg" alt="Owner" className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-yellow-400 hover:scale-105 transition duration-500"/>
          </motion.div>

          {/* OWNER DETAILS */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-bold text-red-800 mb-3">
              {language === "en" ? "Mr. Ramchandra Yarakadawar" : language === "mr" ? "श्री. रामचंद्र यरकदावर" : "ಶ್ರೀ ರಾಮಚಂದ್ರ ಯಾರಕಡವಾರ"}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {language === "en" 
                ? "Mr. Ramchandra Yarakadawar is a highly experienced traditional brass idol craftsman with over 20 years of expertise. He has dedicated his life to preserving traditional craftsmanship and delivering premium quality idols."
                : language === "mr"
                ? "श्री. रामचंद्र यरकदावर हे 20+ वर्षांचा अनुभव असलेले पारंपरिक पितळ मूर्ती कारागीर आहेत. त्यांनी पारंपरिक कला जपत उत्कृष्ट दर्जाच्या मूर्ती तयार केल्या आहेत."
                : "ಶ್ರೀ ರಾಮಚಂದ್ರ ಯಾರಕಡವಾರ ಅವರು 20+ ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿದ ಪರಂಪರಾಗತ ಪಿತ್ತಳ ಮೂರ್ತಿ ತಯಾರಕರು. ಅವರು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಮೂರ್ತಿಗಳನ್ನು ತಯಾರಿಸುವಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದ್ದಾರೆ."}
            </p>

            {/* EXPERIENCE BADGES */}
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white px-4 py-2 rounded-lg shadow font-semibold">
                {language === "en" ? "20+ Years Experience" : language === "mr" ? "20+ वर्षांचा अनुभव" : "20+ ವರ್ಷಗಳ ಅನುಭವ"}
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow font-semibold">
                {language === "en" ? "Temple Specialist" : language === "mr" ? "मंदिर तज्ज्ञ" : "ದೇವಾಲಯ ತಜ್ಞ"}
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow font-semibold">
                {language === "en" ? "Expert Craftsman" : language === "mr" ? "तज्ज्ञ कारागीर" : "ನಿಪುಣ ಶಿಲ್ಪಿ"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;