import { useState } from "react";
import { Link } from "react-router-dom";

import { ICONS } from "@/constants";

import Rectangle1 from "@/assets/images/Rectangle1.png";
import Rectangle from "@/assets/images/Rectangle.png";

import "./Header.scss";

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [menuItemActive, setMenuItemActive] = useState<number>(0);

  const menuOpen = () => {
    setMenuActive(prev => !prev);
    setMenuItemActive(0);
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
          <Link to={"/SignIn"}>{ICONS.account({ className: "svg-account" })}</Link>
        </nav>
        <button className="icon-menu" type="button" onClick={menuOpen}>
          {menuActive ? ICONS.menuClose() : ICONS.menuOpen({ className: "svg-open" })}
        </button>
        <div className={menuActive ? "menu-open active" : "menu-open"}>
          <div className="section">
            <div className="section__title">More</div>
            <div className="section__list">
              <div className="section__item" onClick={() => setMenuItemActive(1)}>
                {ICONS.categories()}Categories
              </div>
              <div className="section__item" onClick={() => setMenuItemActive(2)}>
                <img src={Rectangle} alt="flag" />
                English (UK)
              </div>
              <div className="section__item" onClick={() => setMenuItemActive(3)}>
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
        <div className={menuItemActive === 1 ? "menu-item-open active" : "menu-item-open"}>
          <div className="menu-item-open__title">Categories</div>
          <div className="menu-item-open__list">
            <div className="menu-item-open__list-item">Houses {ICONS.arrowRight()}</div>
            <div className="menu-item-open__list-item">Flats {ICONS.arrowRight()}</div>
            <div className="menu-item-open__list-item">Hotels {ICONS.arrowRight()}</div>
            <div className="menu-item-open__list-item">Hostels {ICONS.arrowRight()}</div>
          </div>
        </div>
        <div className={menuItemActive === 2 ? "menu-item-open active" : "menu-item-open"}>
          <div className="menu-item-open__title">Select your language</div>
          <div className="menu-item-open__list">
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <img src={Rectangle} alt="flag" />
                  EN
                </div>
                <span>English (United Kingdom)</span>
              </div>
              {ICONS.tick()}
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <img src={Rectangle} alt="flag" />
                  UA
                </div>
                <span>Ukrainian</span>
              </div>
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <img src={Rectangle} alt="flag" />
                  ES
                </div>
                <span>Spanish</span>
              </div>
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <img src={Rectangle} alt="flag" />
                  ZH
                </div>
                <span>Chinese</span>
              </div>
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <img src={Rectangle} alt="flag" />
                  PT
                </div>
                <span>Portuguese</span>
              </div>
            </div>
          </div>
        </div>
        <div className={menuItemActive === 3 ? "menu-item-open active" : "menu-item-open"}>
          <div className="menu-item-open__title">Select currency</div>
          <div className="menu-item-open__list">
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <span>$</span>
                  USD
                </div>
                <span>United States Dollar</span>
              </div>
              {ICONS.tick()}
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <span>₴</span>
                  UAN
                </div>
                <span>Ukrainian Hryvnia</span>
              </div>
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <span>€</span>
                  EUR
                </div>
                <span>Euro</span>
              </div>
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <span>¥</span>
                  CNY
                </div>
                <span>ChiNese Yuan</span>
              </div>
            </div>
            <div className="menu-item-open__list-item">
              <div className="menu-item-open__list-item-text">
                <div>
                  <span>₱</span>
                  ARS
                </div>
                <span>Argentine Peso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
