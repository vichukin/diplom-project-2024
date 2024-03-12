import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/components";

import { ICONS } from "@/constants";

import { userContext } from "@/context";

import Rectangle2 from "@/assets/images/Rectangle2.png";
import Rectangle4 from "@/assets/images/Rectangle4.png";

import "./Home.scss";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Support } from "./components/Support/Support";
import { breakPoints } from "./constants";

export const Home: React.FC = () => {
  const [activeModal, setActiveModal] = useState(false);

  const user = useContext(userContext);

  console.log(user);

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
            {Array.from({ length: 4 }, (_, index) => (
              <SwiperSlide key={index}>
                <img src={Rectangle2} alt="Main Photo" className="main__img" />
              </SwiperSlide>
            ))}
          </Swiper>
          <SearchForm />
        </section>
      </div>
      <div className="home__container">
        <section className="home__section">
          <div className="home__question">
            <div className="home__title">Popular offers</div>
            {ICONS.question({ onClick: () => setActiveModal(true) })}
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

      <div className="home__container" style={{ paddingInline: "0px" }}>
        <section className="home__loyalty-programme-section">
          <div className="home__loyalty-empty-div"></div>
          <div className="home__loyalty-programme-content">
            <div className="home__title">Loyalty programme</div>
            <p className="home__text">
              Phasellus ut dignissim quam, nec hendrerit augue. Duis sit amet commodo arcu. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="home__actions">
              <button className="button button--login">Login</button>
              <button className="button button--signup">Sign up</button>
            </div>
          </div>
        </section>
      </div>
      <Support activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};
