import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import EchoSysyemCard from "./EchoSysyemCard";
import { echosystem } from "../../constants";

const EchoSysyemCarousel = () => {
  const controls = useAnimation();
  const containerRef = useRef < HTMLDivElement > null;
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = (fromX = 0) => {
    x.set(fromX);
    controls.start({
      x: [x, "-100%"],
      transition: {
        ease: "linear",
        duration: 100,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const handlePause = () => {
    setIsPaused(true);
    controls.stop();
  };
  const handleResume = () => {
    setIsPaused(false);
    startAnimation(x.get());
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}>
      <motion.div
        ref={containerRef}
        className="flex w-max gap-16"
        animate={controls}
        style={{ x }}>
        {[...echosystem, ...echosystem].map(({ title, logo, desc }, index) => (
          <EchoSysyemCard key={index} title={title} src={logo} desc={desc} />
        ))}
      </motion.div>
    </div>
  );
};

export default EchoSysyemCarousel;
