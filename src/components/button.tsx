import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${children.toLowerCase()}`);
  };

  return (
    <button className="button-headers" type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
