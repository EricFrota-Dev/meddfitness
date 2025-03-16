import { spring } from "motion";

export const hoverAnimation = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const smooth = {
  initial: { opacity: 0 },
  default: { opacity: 1 },
  transition: { duration: 0.3 },
};

export function entryAnimation(delay = 0) {
  return {
    default: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
        delay: delay,
        ease: "backOut",
      },
    },
    from_right: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "backOut",
      },
    },
    from_left: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "backOut",
      },
    },

    from_top: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
        delay: delay,
        ease: "backOut",
      },
    },

    from_bottom: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
        delay: delay,
        ease: "backOut",
      },
    },
  };
}
export function scaleBounceAnimation(delay = 0) {
  return {
    default: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: spring,
        stiffness: 300,
        damping: 15,
        delay: delay,
      },
    },
    small: {
      scale: 0.5,
      opacity: 0,
      transition: {
        type: spring,
        stiffness: 200,
        damping: 10,
        delay: delay,
      },
    },
    from_bottom: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delay: delay,
        ease: "backOut",
      },
    },
  };
}
export function pulseAnimation(delay = 0) {
  return {
    default: {
      scale: [1, 1.02, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };
}
