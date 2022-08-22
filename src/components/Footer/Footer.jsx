import React from "react";
import "./Footer.css";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>paginesher@gmail.com</span>
        <div className="f-icons">
    
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
