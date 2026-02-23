import React from "react";

const Contact = ({ language }) => {

  const content = {
    en: {
      heading: "Contact Us",
      address: "Address: Your Village, Maharashtra",
      phone: "Phone: 9876543210"
    },
    mr: {
      heading: "संपर्क करा",
      address: "पत्ता: आपले गाव, महाराष्ट्र",
      phone: "फोन: 9876543210"
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2>{content[language].heading}</h2>
      <p>{content[language].address}</p>
      <p>{content[language].phone}</p>
    </section>
  );
};

export default Contact;