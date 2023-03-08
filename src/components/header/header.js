import React from "react";
import {} from "./header.css";
import image from "../../asset/img/logoNCC.png";

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={image} alt="error" />
    </div>
  );
};
