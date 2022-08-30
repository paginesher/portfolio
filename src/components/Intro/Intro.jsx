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
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>PJ Her</span>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
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
