import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ICONS } from "@/constants";

import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

import "./SearchForm.scss";
import { AssistanceAnimals } from "./components/AssistanceAnimals";

import { Counter } from "../Counter/Counter";

export const SearchForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [guestsCount, setGuestsCount] = useState<number>(0);
  const [activeModal, setActiveModal] = useState(false);
  const [date, setDate] = useState<DateRange<Dayjs> | []>([]);

  const handleClick = () => {
    setActiveMenuIndex(prev => (prev === 0 ? null : 0));

    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  useEffect(() => {
    let firstTimeClick = false;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isOutsideDropdown = target.closest(".search__dropdown-menu") === null;
      if (isOutsideDropdown && activeMenuIndex !== null && firstTimeClick) {
        setActiveMenuIndex(null);
        firstTimeClick = false;
      } else {
        firstTimeClick = true;
      }
    };

    if (activeMenuIndex !== null) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeMenuIndex]);

  return (
    <div className="search__wrapper">
      <div className="search">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={4}
          breakpoints={{
            900: {
              slidesPerView: 4,
            },
            734: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide
            onClick={handleClick}
            className={activeMenuIndex === 0 ? "swiperSlideActive" : undefined}
          >
            <div className="search__item">
              <div className="search__item-name">Where</div>
              <input
                ref={inputRef}
                type="text"
                className="search__item-sub"
                placeholder=" Search destination"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide
            onClick={() => setActiveMenuIndex(prev => (prev === 1 ? null : 1))}
            className={activeMenuIndex === 1 ? "swiperSlideActive" : undefined}
          >
            <div className="search__item">
              <div className="search__item-name">Check in</div>
              <div className="search__item-sub">
                {date[0] ? date[0].format("D MMMM") : "Add dates"}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            onClick={() => setActiveMenuIndex(prev => (prev === 2 ? null : 2))}
            className={activeMenuIndex === 2 ? "swiperSlideActive" : undefined}
          >
            <div className="search__item">
              <div className="search__item-name">Check out</div>
              <div className="search__item-sub">
                {date[1] ? date[1].format("D MMMM") : "Add dates"}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            onClick={() => setActiveMenuIndex(prev => (prev === 3 ? null : 3))}
            className={activeMenuIndex === 3 ? "swiperSlideActive" : undefined}
          >
            <div className="search__item">
              <div className="search__item-name">Who</div>
              <div className="search__item-sub">
                {guestsCount === 0 ? "Add guests" : guestsCount + " guests"}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className={clsx("search__dropdown-menu", {
            ["right"]: activeMenuIndex === 3,
            ["center"]: activeMenuIndex === 1 || activeMenuIndex === 2,
            ["active"]: activeMenuIndex !== null,
          })}
        >
          {activeMenuIndex === 0 && (
            <div className="search__dropdown-menu__body-destination">
              <ul className="search__dropdown-menu__destination-list">
                <li className="search__dropdown-menu__destination-list-item">
                  {ICONS.geolocation()} <span>Paris, France</span>
                </li>
                <li className="search__dropdown-menu__destination-list-item">
                  {ICONS.geolocation()} <span>New York, USA</span>
                </li>
                <li className="search__dropdown-menu__destination-list-item">
                  {ICONS.geolocation()} <span>London, United Kingdom</span>
                </li>
                <li className="search__dropdown-menu__destination-list-item">
                  {ICONS.geolocation()} <span>London, United Kingdom</span>
                </li>
                <li className="search__dropdown-menu__destination-list-item">
                  {ICONS.geolocation()}
                  <span>
                    London, United Kingdom London, United Kingdom London, United Kingdom London,
                    United Kingdom
                  </span>
                </li>
              </ul>
            </div>
          )}

          <div
            className="search__dropdown-menu__body-date"
            style={activeMenuIndex !== 2 && activeMenuIndex !== 1 ? { display: "none" } : undefined}
          >
            <DateRangeCalendar
              // @ts-ignore
              value={date}
              onChange={newValue => setDate(newValue)}
              minDate={dayjs()}
            />
          </div>

          <div
            className="search__dropdown-menu__body-who"
            style={activeMenuIndex !== 3 ? { display: "none" } : undefined}
          >
            <ul className="search__dropdown-menu__guests-list">
              <li className="search__dropdown-menu__guests-list-item">
                <div className="search__dropdown-menu__guests-list-item-text">
                  <div className="search__dropdown-menu__guests-list-item-title">Adults</div>
                  <div className="search__dropdown-menu__guests-list-item-sub">
                    Ages 13 or above
                  </div>
                </div>
                <Counter setGuestsCount={setGuestsCount} />
              </li>
              <li className="search__dropdown-menu__guests-list-item">
                <div className="search__dropdown-menu__guests-list-item-text">
                  <div className="search__dropdown-menu__guests-list-item-title">Children</div>
                  <div className="search__dropdown-menu__guests-list-item-sub">Ages 2-12</div>
                </div>
                <Counter setGuestsCount={setGuestsCount} />
              </li>
              <li className="search__dropdown-menu__guests-list-item">
                <div className="search__dropdown-menu__guests-list-item-text">
                  <div className="search__dropdown-menu__guests-list-item-title">Infants</div>
                  <div className="search__dropdown-menu__guests-list-item-sub">Under 2</div>
                </div>
                <Counter setGuestsCount={setGuestsCount} />
              </li>
              <li className="search__dropdown-menu__guests-list-item">
                <div className="search__dropdown-menu__guests-list-item-text">
                  <div className="search__dropdown-menu__guests-list-item-title">Pets</div>
                  <div
                    className="search__dropdown-menu__guests-list-item-sub underline"
                    onClick={() => setActiveModal(true)}
                  >
                    Bringing a service animal?
                  </div>
                </div>
                <Counter setGuestsCount={setGuestsCount} />
              </li>
            </ul>
          </div>
        </div>
        <button className="search__icon">{ICONS.search()}</button>
      </div>
      <AssistanceAnimals activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};
