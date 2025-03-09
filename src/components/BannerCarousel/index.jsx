import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BannerItem from "./BannerItem";
import { banners } from "../../constants";
import { smooth } from "../../constants/animations";

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index); // Trocar o banner ao clicar
  };

  return (
    <motion.div
      className="relative"
      variants={smooth}
      initial="initial"
      animate="default">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <BannerItem
            src={banners[currentIndex].src}
            alt={banners[currentIndex].alt}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 border-[1px] border-1 rounded-full ${
              currentIndex === index ? "bg-1" : "bg-2/30"
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BannerCarousel;
