import React from "react";

import "./ButtonConfirm.scss";

export interface ButtonConfirmProps {
  type?: "button" | "submit";
  text: string;
}

export const ButtonConfirm: React.FC<ButtonConfirmProps> = ({
  type = "button",
  text,
}: ButtonConfirmProps) => {
  return (
    <button type={type} className="button-confirm">
      {text}
    </button>
  );
};
