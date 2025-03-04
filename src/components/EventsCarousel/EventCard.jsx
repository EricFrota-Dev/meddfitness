import React from "react";

const EventCard = ({ src, alt, name }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden">
      <div className="">
        <img src={src} alt={alt} />
      </div>
      <div className="flex text-center flex-col items-center justify-center bg-2 text-6 p-2">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default EventCard;
