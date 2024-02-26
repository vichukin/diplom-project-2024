import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/components";

import { ICONS } from "@/constants";

import Rectangle2 from "@/assets/images/Rectangle2.png";
import Rectangle4 from "@/assets/images/Rectangle4.png";

import "./Home.scss";
import { breakPoints } from "./constants";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__container" style={{ paddingInline: "0px" }}>
        <section className="home__main main">
          <div className="main__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor magna, bibendum vel
            luctus vitae, pharetra et sapien.
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <img src={Rectangle2} alt="Main Photo" className="main__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle2} alt="Main Photo" className="main__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle2} alt="Main Photo" className="main__img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle2} alt="Main Photo" className="main__img" />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
      <div className="home__container" style={{ paddingRight: "0px" }}>
        <section className="home__section">
          <div className="home__question">
            <div className="home__title">Popular offers</div>
            {ICONS.question()}
          </div>
          <div className="home__card-list">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={breakPoints}
            >
              {Array.from({ length: 8 }, (_, index) => (
                <SwiperSlide key={index}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="home__section">
          <div className="home__question">
            <div className="home__title">Choice of guests</div>
          </div>
          <div className="home__card-list">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={breakPoints}
            >
              {Array.from({ length: 8 }, (_, index) => (
                <SwiperSlide key={index}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
      <div className="home__container">
        <section className="home__section">
          <div className="home__benefits">Our benefits</div>

          <div className="home__benefit-list">
            <div className="home__benefit-item">
              <div className="home__benefit-photo">
                <img src={Rectangle4} alt="Benefit photo" />
              </div>
              <div className="home__benefit-text">
                Large selection of accommodation around the world
              </div>
            </div>
            <div className="home__benefit-item">
              <div className="home__benefit-photo">
                <img src={Rectangle4} alt="Benefit photo" />
              </div>
              <div className="home__benefit-text">Low prices and flexible rental terms</div>
            </div>
            <div className="home__benefit-item">
              <div className="home__benefit-photo">
                <img src={Rectangle4} alt="Benefit photo" />
              </div>
              <div className="home__benefit-text">Security and confidentiality of transactions</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
