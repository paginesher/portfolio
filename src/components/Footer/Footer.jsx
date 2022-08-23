import React from "react";
import "./Footer.css";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>paginesher@gmail.com |
          phone: (704)775-2973 | all rights reserved Ⓒ 2022
        </span>
        <div className="f-icons">
    
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
