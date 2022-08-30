import React, { useContext } from "react";
import "./Intro.css";


import me from "../../img/me.png";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";

import { Link } from "react-scroll";
const Intro = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey there! I Am</span>
          <span>PJ Her</span>
          <span>
          I am a Full Stack Web Developer and UI/UX enthusiast. 
       I may not have as much experience as others, but I believe that 
       my enthusiasm and willingness to learn make me a great developer.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
 
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt=""   />
          <img src={LinkedIn} alt="" />
       
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
      <img src={me} alt="" />
      
   
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
