import { motion } from "framer-motion";
import { Wrench, Hammer, Sparkles, ShieldCheck, Settings, Star } from "lucide-react";

const Services = ({ language }) => {

  const text = {

    en: {
      title: "Our Services",
      subtitle: "We provide high quality brass idol and temple work services",
      services: [
        { name: "Brass Idols Making", icon: <Star size={40} /> },
        { name: "Temple Work", icon: <Hammer size={40} /> },
        { name: "Custom Orders", icon: <Settings size={40} /> },
        { name: "Silver Work", icon: <Sparkles size={40} /> },
        { name: "Repair Service", icon: <Wrench size={40} /> },
        { name: "Polishing Service", icon: <ShieldCheck size={40} /> }
      ]
    },

    mr: {
      title: "आमच्या सेवा",
      subtitle: "आम्ही उच्च दर्जाच्या पितळ मूर्ती आणि मंदिर काम सेवा देतो",
      services: [
        { name: "पितळ मूर्ती बनवणे", icon: <Star size={40} /> },
        { name: "मंदिर काम", icon: <Hammer size={40} /> },
        { name: "कस्टम ऑर्डर", icon: <Settings size={40} /> },
        { name: "चांदी काम", icon: <Sparkles size={40} /> },
        { name: "दुरुस्ती सेवा", icon: <Wrench size={40} /> },
        { name: "पॉलिश सेवा", icon: <ShieldCheck size={40} /> }
      ]
    },

    kn: {
      title: "ನಮ್ಮ ಸೇವೆಗಳು",
      subtitle: "ನಾವು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಪಿತ್ತಳ ಮೂರ್ತಿ ಮತ್ತು ದೇವಸ್ಥಾನ ಕೆಲಸ ಸೇವೆ ನೀಡುತ್ತೇವೆ",
      services: [
        { name: "ಪಿತ್ತಳ ಮೂರ್ತಿ ತಯಾರಿ", icon: <Star size={40} /> },
        { name: "ದೇವಾಲಯ ಕೆಲಸ", icon: <Hammer size={40} /> },
        { name: "ಕಸ್ಟಮ್ ಆರ್ಡರ್", icon: <Settings size={40} /> },
        { name: "ಬೆಳ್ಳಿ ಕೆಲಸ", icon: <Sparkles size={40} /> },
        { name: "ರಿಪೇರಿ ಸೇವೆ", icon: <Wrench size={40} /> },
        { name: "ಪಾಲಿಶ್ ಸೇವೆ", icon: <ShieldCheck size={40} /> }
      ]
    }

  };

  const t = text[language] || text.en;

  return (

    <div className="pt-40 pb-20 min-h-screen bg-yellow-300">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 px-4"
      >

        <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
          {t.title}
        </h1>

        <p className="text-gray-700 text-lg">
          {t.subtitle}
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto mt-4 rounded-full"></div>

      </motion.div>


      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">

        {t.services.map((service, i) => (

          <motion.div
            key={i}

            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: i * 0.15 }}

            whileHover={{
              scale: 1.08,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
            }}

            className="bg-white rounded-2xl p-8 text-center cursor-pointer border border-yellow-200 hover:bg-gradient-to-br hover:from-yellow-100 hover:to-orange-100 transition-all duration-500"
          >

            {/* ICON */}
            <div className="text-orange-600 flex justify-center mb-4">
              {service.icon}
            </div>

            {/* TEXT */}
            <h2 className="text-xl font-semibold text-red-800">
              {service.name}
            </h2>

          </motion.div>

        ))}

      </div>

    </div>

  );

};

export default Services;