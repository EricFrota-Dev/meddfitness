import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { smooth } from "@/animations";
import BannerItem from "./BannerItem";
import { banners } from "@/constants";

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
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
        {banners.map((_: object, index: number) => (
          <button
            key={index}
            className={`w-3 h-3 border-[1px] rounded-full ${
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
