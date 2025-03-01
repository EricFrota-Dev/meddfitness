export function entryMoveAnimation(delay = 0) {
  return {
    default: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delay: delay,
        ease: "easeInOut",
      },
    },
    from_right: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
    from_left: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },

    from_top: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delay: delay,
        ease: "easeInOut",
      },
    },

    from_bottom: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
}
// export function entryScaleAnimation(delay = 0) {
//     return {
//       default: {
//         x: 0,
//         opacity: 1,
//         transition: {
//           duration: 0.5,
//           staggerChildren: 0.15,
//           delay: delay,
//           ease: "easeInOut",
//         },
//       },
//       w_initial: {
//         width: "0%",
//         transition: {
//           duration: 0.5,
//           staggerChildren: 0.15,
//           delay: delay,
//           ease: "easeInOut",
//         },
//       },

//       2_exit: {
//         x: 300,
//         opacity: 0,
//         transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
//       },
//       l_initial: {
//         x: -300,
//         opacity: 0,
//         transition: {
//           duration: 0.5,
//           staggerChildren: 0.15,
//           delay: delay,
//           ease: "easeInOut",
//         },
//       },
//       l_exit: {
//         x: -300,
//         opacity: 0,
//         transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
//       },
//       t_initial: {
//         x: -300,
//         opacity: 0,
//         transition: {
//           duration: 0.5,
//           staggerChildren: 0.15,
//           delay: delay,
//           ease: "easeInOut",
//         },
//       },
//       t_exit: {
//         x: -300,
//         opacity: 0,
//         transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
//       },
//       b_initial: {
//         x: -300,
//         opacity: 0,
//         transition: {
//           duration: 0.5,
//           staggerChildren: 0.15,
//           delay: delay,
//           ease: "easeInOut",
//         },
//       },
//       b_exit: {
//         x: -300,
//         opacity: 0,
//         transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
//       },
//     };
//   }
