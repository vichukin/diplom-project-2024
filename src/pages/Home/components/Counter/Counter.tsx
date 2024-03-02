import { Dispatch, SetStateAction, useState } from "react";

import { ICONS } from "@/constants";

import "./Counter.scss";

type CounterProp = {
  setGuestsCount: Dispatch<SetStateAction<number>>;
};

export const Counter: React.FC<CounterProp> = ({ setGuestsCount }: CounterProp) => {
  const [counterNumber, setCounterNumber] = useState<number>(0);

  const handrelClick = () => {
    if (counterNumber > 0) {
      setCounterNumber(prev => prev - 1);
      setGuestsCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter">
      {ICONS.minus({
        className: counterNumber > 0 ? "counter__minus" : "",
        onClick: handrelClick,
      })}
      <span>{counterNumber}</span>
      {ICONS.plus({
        onClick: () => {
          setCounterNumber(prev => prev + 1);
          setGuestsCount(prev => prev + 1);
        },
      })}
    </div>
  );
};
