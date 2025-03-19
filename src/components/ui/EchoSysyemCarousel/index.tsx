import { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import EchoSysyemCard from "./EchoSysyemCard";
import { echoSysyemCardProps } from "./types";

const EchoSysyemCarousel: React.FC<echoSysyemCardProps> = ({ items }) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  // const [isPaused, setIsPaused] = useState(false);

  const startAnimation = (fromX = 0) => {
    x.set(fromX);
    controls.start({
      x: [fromX, "-50%"],
      transition: {
        ease: "linear",
        duration: 100,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePause = () => {
    // setIsPaused(true);
    controls.stop();
  };
  const handleResume = () => {
    // setIsPaused(false);
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
        {items.concat(items).map(({ title, src, desc }, index) => (
          <EchoSysyemCard key={index} title={title} src={src} desc={desc} />
        ))}
      </motion.div>
    </div>
  );
};

export default EchoSysyemCarousel;
