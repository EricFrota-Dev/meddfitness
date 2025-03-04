import React from "react";

const PerfilCard = ({ src, alt, name, role }) => {
  return (
    <div className="flex flex-col mt-6 rounded-xl overflow-hidden w-33 md:w-fit max-w-60">
      <div className="">
        <img src={src} alt={alt} />
      </div>
      <div className="flex text-center flex-col items-center justify-center h-full bg-2 text-6 p-2">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default PerfilCard;
