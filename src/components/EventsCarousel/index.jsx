import React from "react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { events } from "../../constants";
import { smooth } from "../../constants/animations";
import EventCard from "./EventCard";

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar
  }, [currentIndex]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    console.log(currentIndex); // Trocar o banner ao clicar
  };

  return (
    <>
      <motion.div
        className="relative"
        variants={smooth}
        initial="initial"
        animate="default"
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EventCard
              src={events[currentIndex].src}
              alt={events[currentIndex].name}
              name={events[currentIndex].name}
            />
          </motion.div>
        </div>
        <button onClick={() => handleClick()}>clique</button>
      </motion.div>
    </>
  );
};

export default EventsCarousel;
