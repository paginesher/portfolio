import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <span>Paginesher@gmail.com | (704) 775-2973 | &copy; All Rights Reserved 2022</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/pjher/"> <Insta color="Purple" size={"3rem"} /></a>
   <a href="https://www.linkedin.com/in/paginesher/"> <Linkedin color="LightBlue" size={"3rem"} /></a>
         
       <a href="https://github.com/paginesher">   <Gitub color="Pink" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;