import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import Gateway from "../../img/gateway.png";
import Ecom from "../../img/ecomv1.png";
import Tasktracker from "../../img/tasktracker.png";
import HopeHack from "../../img/hopehack.png";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Gateway} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tasktracker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HopeHack} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
