import React from "react";

const GradientCard = ({ children, bordered }) => {
  return (
    <div
      className={`h-full relative p-[2px] rounded-lg w-fit ${
        bordered && "bg-gradient-to-r from-4 via-2 to-4"
      }`}>
      <div
        className={`${
          bordered ? "bg-5" : "radial-gradient"
        } rounded-lg p-8 border border-transparent bg-clip-padding`}>
        {children}
      </div>
    </div>
  );
};

export default GradientCard;
