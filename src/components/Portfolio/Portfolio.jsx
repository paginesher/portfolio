import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import Gateway from "../../img/gateway.png";
import Ecom from "../../img/ecomv1.png";
import Tasktracker from "../../img/tasktracker.png";
import HopeHack from "../../img/hopehack.png";
import BonAppit from "../../img/BonAppetit.png";
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
          <a
						href='https://paginesher.github.io/Gateway-Revision/'
						target={'_blank'}
						rel='noreferrer'
					>
						Ecommerce site
					</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecom} alt="" />
          <a
						href='https://paginesher.github.io/Ecommerce-Project-/index.html'
						target={'_blank'}
						rel='noreferrer'
					>
						Ecom Version 1
					</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tasktracker} alt="" />
          <a
						href='https://paginesher.github.io/task-tracker/'
						target={'_blank'}
						rel='noreferrer'
					>
						Task Tracker
					</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HopeHack} alt="" />
          <a
						href='https://main.d1xnzhidzyt1ns.amplifyapp.com/'
						target={'_blank'}
						rel='noreferrer'
					>
						Hope Hack
					</a>
          
          
        </SwiperSlide>
        <SwiperSlide>
            <img src={BonAppit} alt="" />
            <a
						href='https://bone-apple-teeth-r2h-g1.netlify.app/'
						target={'_blank'}
						rel='noreferrer'
					>
						Bon Appetit Redisgin
					</a>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
