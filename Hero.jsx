import React from "react";

const Hero = ({ language }) => {

  const content = {
    en: {
      title: "Traditional & Custom Idol Makers",
      desc: "Ganpati, Devi and Custom Orders Available",
      btn: "Order on WhatsApp"
    },
    mr: {
      title: "पारंपरिक व कस्टम मूर्तिकार",
      desc: "गणपती, देवी व विशेष ऑर्डर उपलब्ध",
      btn: "WhatsApp वर ऑर्डर करा"
    }
  };

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <h2>{content[language].title}</h2>
        <p>{content[language].desc}</p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          {content[language].btn}
        </a>
      </div>
    </div>
  );
};

export default Hero;