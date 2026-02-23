import React from "react";

const Services = ({ language }) => {

  const content = {
    en: {
      heading: "Our Services",
      s1: "Ganpati Idols",
      s1d: "Eco-friendly & POP idols available",
      s2: "Custom Orders",
      s2d: "Special idols as per customer requirement",
      s3: "Decoration Setup",
      s3d: "Complete festival decoration services"
    },
    mr: {
      heading: "आमच्या सेवा",
      s1: "गणपती मूर्ती",
      s1d: "इको-फ्रेंडली व POP मूर्ती उपलब्ध",
      s2: "कस्टम ऑर्डर",
      s2d: "ग्राहकाच्या मागणीनुसार विशेष मूर्ती",
      s3: "सजावट सेवा",
      s3d: "उत्सवासाठी संपूर्ण सजावट सुविधा"
    }
  };

  return (
    <section id="services" className="section">
      <h2>{content[language].heading}</h2>
      <div className="cards">
        <div className="card">
          <h3>{content[language].s1}</h3>
          <p>{content[language].s1d}</p>
        </div>

        <div className="card">
          <h3>{content[language].s2}</h3>
          <p>{content[language].s2d}</p>
        </div>

        <div className="card">
          <h3>{content[language].s3}</h3>
          <p>{content[language].s3d}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;