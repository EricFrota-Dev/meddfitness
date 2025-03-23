import { useState } from "react";
import { motion } from "framer-motion";
import { videoProps } from "../types";

const VideoContainer = ({ videoUrl }: videoProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      className="w-full h-full rounded-lg overflow-hidden shadow-lg"
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}>
      {isVisible && (
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="Embedded Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </motion.div>
  );
};

export default VideoContainer;
