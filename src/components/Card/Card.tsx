import { ICONS } from "@/constants";

import Rectangle3 from "@/assets/images/Rectangle3.png";

import "./Card.scss";

export const Card: React.FC = () => {
  return (
    <div className="card">
      <img src={Rectangle3} alt="Card Photo" className="card__img" />

      <div className="card__main">
        <div className="card__top">Popular offers {ICONS.like()}</div>
        <div className="card__center">
          <div className="card__name-price">
            <div className="card__name">Name</div>
            <div className="card__price">$ 110</div>
          </div>
          <div className="card__under-main">
            <div className="card__geolocation">
              {ICONS.geolocation()} <span>Geolocation</span>
            </div>
            <div className="card__arrow">{ICONS.cardArrow()}</div>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__text">Where from, days, people.</div>
        <div className="card__star">{ICONS.star()} 5.0</div>
      </div>
    </div>
  );
};
