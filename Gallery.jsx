import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ language }) => {

  // categories
  const categories = [
    { id: "all", name_en: "All", name_mr: "सर्व", name_kn: "ಎಲ್ಲ" },
    { id: "kalas", name_en: "Kalas Work", name_mr: "कळस काम", name_kn: "ಕಲಶ್ ಕೆಲಸ" },
    { id: "murti", name_en: "Murti Work", name_mr: "मूर्ती काम", name_kn: "ಮೂರ್ತಿ ಕೆಲಸ" },
    { id: "devi", name_en: "Small Work", name_mr: "लहान मूर्ती", name_kn: "ಸಣ್ಣ ಕೆಲಸ" },
    { id: "chandi", name_en: "Chandi Work", name_mr: "चांदी काम", name_kn: "ಚಿನ್ನದ ಕೆಲಸ" },
    { id: "mandir", name_en: "Mandir Work", name_mr: "मंदिर काम", name_kn: "ದೇವಾಲಯ ಕೆಲಸ" },
  ];

  // images data
  const images = [
    { src: "/images/101.jpeg", category: "murti" },
    { src: "/images/102.jpeg", category: "murti" },
    { src: "/images/103.jpeg", category: "murti" },
    { src: "/images/104.jpeg", category: "murti" },
    { src: "/images/105.jpeg", category: "murti" },
    { src: "/images/106.jpeg", category: "murti" },

    { src: "/images/001.jpeg", category: "kalas" },
    { src: "/images/002.jpeg", category: "kalas" },
    { src: "/images/003.jpeg", category: "kalas" },

    { src: "/images/21.jpeg", category: "devi" },
    { src: "/images/22.jpeg", category: "devi" },
    { src: "/images/23.jpeg", category: "devi" },
    { src: "/images/24.jpeg", category: "devi" },
    { src: "/images/25.jpeg", category: "devi" },
    { src: "/images/26.jpeg", category: "devi" },
    { src: "/images/27.jpeg", category: "devi" },
    { src: "/images/28.jpeg", category: "devi" },
    { src: "/images/29.jpeg", category: "devi" },

    { src: "/images/301.jpeg", category: "chandi" },
    { src: "/images/302.jpeg", category: "chandi" },
    { src: "/images/402.jpeg", category: "chandi" },
    { src: "/images/403.jpeg", category: "chandi" },
    { src: "/images/404.jpeg", category: "chandi" },
    { src: "/images/405.jpeg", category: "chandi" },
    { src: "/images/406.jpeg", category: "chandi" },
    { src: "/images/407.jpeg", category: "chandi" },

    { src: "/images/51.jpeg", category: "mandir" },
    { src: "/images/52.jpeg", category: "mandir" },
    { src: "/images/53.jpeg", category: "mandir" },
    { src: "/images/54.jpeg", category: "mandir" },
    { src: "/images/55.jpeg", category: "mandir" },
    { src: "/images/56.jpeg", category: "mandir" },
    { src: "/images/57.jpeg", category: "mandir" },
    { src: "/images/58.jpeg", category: "mandir" },
    { src: "/images/59.jpeg", category: "mandir" },
    { src: "/images/60.jpeg", category: "mandir" },
    { src: "/images/61.jpeg", category: "mandir" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="py-20 px-6 bg-yellow-300 min-h-screen">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-red-700 mb-10">
        {language === "en"
          ? "Our Gallery"
          : language === "mr"
          ? "आमची गॅलरी"
          : "ನಮ್ಮ ಗ್ಯಾಲರಿ"}
      </h2>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full font-semibold transition duration-300
              ${
                activeCategory === cat.id
                  ? "bg-red-700 text-white"
                  : "bg-white shadow hover:bg-red-100"
              }`}
          >
            {language === "en"
              ? cat.name_en
              : language === "mr"
              ? cat.name_mr
              : cat.name_kn}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            layout
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => setSelectedImage(img.src)}
          >
            <img src={img.src} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;