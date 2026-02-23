import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ language, setLanguage }) => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  /* TEXT */
  const navText = {

    en: {
      industry: "Shri Kalikadevi Brass Articles Industries",
      address: "Factory & Home: Khanadal, Tal. Gadhinglaj, Dist. Kolhapur",
      home: "Home",
      gallery: "Gallery",
      services: "Services",
      about: "About",
      contact: "Contact"
    },

    mr: {
      industry: "श्री कालिकादेवी ब्रास आर्टिकल्स इंडस्ट्रीज",
      address: "फॅक्टरी व घर : खणदाळ, ता. गडहिंग्लज, जि. कोल्हापूर",
      home: "मुख्यपृष्ठ",
      gallery: "गॅलरी",
      services: "सेवा",
      about: "माहिती",
      contact: "संपर्क"
    },

    kn: {
      industry: "ಶ್ರೀ ಕಾಲಿಕಾದೇವಿ ಬ್ರಾಸ್ ಆರ್ಟಿಕಲ್ಸ್ ಇಂಡಸ್ಟ್ರೀಸ್",
      address: "ಫ್ಯಾಕ್ಟರಿ ಮತ್ತು ಮನೆ : ಖಣದಾಳ, ತಾ. ಗಡಹಿಂಗ್ಲಜ್, ಜಿ. ಕೊಲ್ಲಾಪುರ",
      home: "ಮುಖಪುಟ",
      gallery: "ಗ್ಯಾಲರಿ",
      services: "ಸೇವೆಗಳು",
      about: "ಮಾಹಿತಿ",
      contact: "ಸಂಪರ್ಕ"
    }

  };

  const t = navText[language] || navText.en;

  const navItems = [
    { name: t.home, path: "/" },
    { name: t.gallery, path: "/gallery" },
    { name: t.services, path: "/services" },
    { name: t.about, path: "/about" },
    { name: t.contact, path: "/contact" }
  ];


  return (
    

    <motion.nav
    
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-gradient-to-r from-orange-700 via-yellow-600 to-orange-700 shadow-2xl"
          : "bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 shadow-xl"
      }`}
    >

      {/* INDUSTRY NAME */}
      <div className="text-center py-3 border-b border-yellow-300/40">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-xl md:text-3xl font-bold tracking-wide"
        >
          {t.industry}
        </motion.h1>

        {/* ADDRESS */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-100 text-xs md:text-sm mt-1"
        >
          {t.address}
        </motion.p>

      </div>


      {/* MENU ROW */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-white font-bold text-lg md:text-xl"
          >
            श्री कालिकादेवी
          </motion.div>
        </Link>


        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item, i) => (

            <Link key={i} to={item.path}>

              <motion.span
                whileHover={{ scale: 1.15 }}
                className={`font-semibold text-lg transition duration-300 cursor-pointer ${
                  location.pathname === item.path
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-yellow-100 hover:text-white"
                }`}
              >
                {item.name}
              </motion.span>

            </Link>

          ))}


          {/* LANGUAGE */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white text-black px-3 py-1 rounded shadow"
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>

        </div>


        {/* MOBILE BUTTON */}
        <div className="md:hidden text-white">

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}
      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-gradient-to-b from-orange-700 to-orange-900 p-5 space-y-4"
        >

          {navItems.map((item, i) => (

            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-white text-lg"
            >
              {item.name}
            </Link>

          ))}

        </motion.div>

      )}

    </motion.nav>

  );

};

export default Navbar;