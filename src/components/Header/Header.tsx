import { useState } from "react";
import { Link } from "react-router-dom";

import { ICONS } from "@/constants";

import Rectangle1 from "@/assets/images/Rectangle1.png";
import Rectangle from "@/assets/images/Rectangle.png";

import "./Header.scss";

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const menuOpen = () => {
    setMenuActive(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          LOGO
        </Link>
        <nav className="header__nav">
          <div tabIndex={0} className="header__item header__no-position" data-dropdown>
            <div className="header__text" data-dropdown-button>
              Categories
            </div>
            {ICONS.arrow({ "data-dropdown-button": true })}
            <div className="dropdown-menu full-width">
              <ul className="dropdown-menu__categories">
                <li className="dropdown-menu__item-category">
                  <img src={Rectangle1} alt="flag" />
                  Houses
                </li>
                <li className="dropdown-menu__item-category">
                  <img src={Rectangle1} alt="flag" />
                  Flats
                </li>
                <li className="dropdown-menu__item-category">
                  <img src={Rectangle1} alt="flag" /> Hotels
                </li>
                <li className="dropdown-menu__item-category">
                  <img src={Rectangle1} alt="flag" /> Hotels
                </li>
              </ul>
            </div>
          </div>
          <div tabIndex={1} className="header__item">
            <Link to="/About" className="header__text">About us</Link>
          </div>
          <div tabIndex={2} className="header__item" data-dropdown>
            <div className="header__text" data-dropdown-button>
              EN
            </div>
            {ICONS.arrow({ "data-dropdown-button": true })}
            <div className="dropdown-menu">
              <ul className="dropdown-menu__list">
                <li className="dropdown-menu__item">
                  UA
                  <img src={Rectangle} alt="flag" />
                </li>
                <li className="dropdown-menu__item">
                  ES
                  <img src={Rectangle} alt="flag" />
                </li>
                <li className="dropdown-menu__item">
                  ZH
                  <img src={Rectangle} alt="flag" />
                </li>
                <li className="dropdown-menu__item">
                  AR
                  <img src={Rectangle} alt="flag" />
                </li>
              </ul>
            </div>
          </div>
          <div tabIndex={3} className="header__item" data-dropdown>
            <div className="header__text" data-dropdown-button>
              USD
            </div>
            {ICONS.arrow({ "data-dropdown-button": true })}
            <div className="dropdown-menu">
              <ul className="dropdown-menu__list">
                <li className="dropdown-menu__item">
                  USD<span>$</span>
                </li>
                <li className="dropdown-menu__item">
                  UAN<span>₴</span>
                </li>
                <li className="dropdown-menu__item">
                  EUR<span>€</span>
                </li>
                <li className="dropdown-menu__item">
                  CNY<span>¥</span>
                </li>
              </ul>
            </div>
          </div>
          {ICONS.account({ className: "svg-account" })}
        </nav>
        <button className="icon-menu" type="button" onClick={menuOpen}>
          {menuActive ? ICONS.menuClose() : ICONS.menuOpen({ className: "svg-open" })}
        </button>
        <div className={menuActive ? "menu-open active" : "menu-open"}>
          <div className="section">
            <div className="section__title">More</div>
            <div className="section__list">
              <div className="section__item">{ICONS.categories()}Categories</div>
              <div className="section__item">
                <img src={Rectangle} alt="flag" />
                English (UK)
              </div>
              <div className="section__item">
                <span>USD</span>
                United States dollar
              </div>
              <div className="section__item">
                <span>{ICONS.loyalty()}</span>
                Loyalty programme
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Help and support</div>
            <div className="section__list">
              <div className="section__item">{ICONS.contact()}Contact the сustomer service</div>
              <div className="section__item">{ICONS.partnership()}Partnership dispute</div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Settings and legal</div>
            <div className="section__list">
              <div className="section__item">{ICONS.about()}About us</div>
              <div className="section__item">{ICONS.partner()}Become a partner</div>
              <div className="section__item">{ICONS.privacy()}Privacy and files cookie</div>
              <div className="section__item">{ICONS.conditions()}Conditions of use</div>
              <div className="section__item">{ICONS.legal()}Legal</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
