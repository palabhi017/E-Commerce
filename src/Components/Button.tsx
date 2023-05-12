import React from "react";
import "../CSS/ButtonFile.css";
const Button = ({ children }:{children:React.ReactNode}) => {
  return (
    <div>
      <button className="custom-btn btn-12">
        <span>{children}</span>
        <span>Read More</span>
      </button>
    </div>
  );
};

export default Button;
//Utkarsh --> u can add here in the children
