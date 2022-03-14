import React, { useState } from "react";

const Cardimage = () => {
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "",
  });

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };

  return (
    <div className="image-card">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="photo"
        className="visually-hidden"
        onChange={handleImg}
      />
      <label htmlFor="photo" className="form-img__file-label"></label>
      <img src={src} alt={alt} className="form-img__img-preview" />
    </div>
  );
};

Cardimage.propTypes = {};

export default Cardimage;
