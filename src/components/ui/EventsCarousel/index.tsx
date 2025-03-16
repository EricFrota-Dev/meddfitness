import { useEffect, useState } from "react";
import { motion } from "motion/react";
import EventCard from "./EventCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { events } from "@/constants";
import { entryAnimation, hoverAnimation, smooth } from "@/animations";

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar
  }, [currentIndex]);

  const handleClick = (side: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + side;

      if (newIndex < 0) {
        newIndex = events.length - 1; // Volta para o último item ao ultrapassar o primeiro
      } else if (newIndex >= events.length) {
        newIndex = 0; // Volta para o primeiro item ao ultrapassar o último
      }
      setIsRight(side == 1 ? true : false);
      return newIndex;
    });
  }; // Trocar o banner ao clicar

  return (
    <>
      <motion.div
        className="relative w-full"
        variants={smooth}
        initial="initial"
        animate="default">
        <motion.div
          className="w-full flex items-center justify-center"
          key={currentIndex}
          variants={entryAnimation()}
          initial={isRight ? "from_right" : "from_left"}
          animate="default">
          <EventCard
            src={events[currentIndex].src}
            title={events[currentIndex].name}
          />
        </motion.div>
        <div className="flex items-center justify-center gap-8 m-4">
          <motion.button
            className="w-8 h-8 rounded-full hover:bg-2 bg-2/60 flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(-1)}
            variants={hoverAnimation}
            whileHover="hover"
            initial="initial"
            whileTap="tap">
            <FaArrowLeft className="text-5 text-[22px]" />
          </motion.button>
          <motion.button
            className="w-8 h-8 rounded-full bg-2/60 flex hover:bg-2 justify-center items-center cursor-pointer"
            onClick={() => handleClick(1)}
            variants={hoverAnimation}
            whileHover="hover"
            initial="initial"
            whileTap="tap">
            <FaArrowRight className="text-5 text-[22px]" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default EventsCarousel;
