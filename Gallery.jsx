import React from "react";

const Gallery = ({ language }) => {

  const heading = language === "en" ? "Our Work" : "आमचे काम";

  return (
    <section id="gallery" className="section">
      <h2>{heading}</h2>

      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1586864387789-628af9feed72" alt="" />
        <img src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853" alt="" />
        <img src="https://images.unsplash.com/photo-1599727277753-23c8b7a9d02b" alt="" />
      </div>
    </section>
  );
};

export default Gallery;