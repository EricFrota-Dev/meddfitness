import { simpleCardProps } from "@/constants/types";
import React from "react";

const EchoSysyemCard: React.FC<simpleCardProps> = ({ title, desc, src }) => {
  return (
    <div className="w-60">
      <div className="bg-6/20 border-2/30 border-[1px] h-80 rounded-t-2xl p-4">
        <h2>
          <span>{title}</span>
        </h2>
        <h3>{desc}</h3>
      </div>
      <div className="bg-2 h-30 rounded-b-full relative">
        <img
          src={src}
          alt={title}
          className="absolute rounded-full w-54 bottom-3 left-3 "
        />
      </div>
    </div>
  );
};

export default EchoSysyemCard;
