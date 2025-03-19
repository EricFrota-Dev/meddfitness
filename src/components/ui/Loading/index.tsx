import { motion as m } from "motion/react";

const pathVariants = (yValue: number, scaleValue: number, delay: number) => {
  return {
    animate: {
      y: [yValue, 0, yValue],
      scaleY: [scaleValue / 10, 1, scaleValue / 10],
      transition: {
        duration: 0.8,
        ease: ["easeOut", "easeIn", "easeInOut"],
        repeat: Infinity,
        delay: delay / 30,
      },
    },
  };
};

const Loading = () => {
  return (
    <div className="w-full flex justify-center my-30">
      <m.svg width="129" height="327" viewBox="0 0 129 327" fill="none">
        <g className="fill-2">
          <m.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-2.86818e-06 236.977H128.137C128.137 164.178 128.137 88.427 128.137 0.0102997H-2.86818e-06C-2.86818e-06 119.293 -0.122975 175.983 -2.86818e-06 236.977Z"
          />
          <m.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 326.623H128.137V320.229H0V326.623Z"
          />
          <m.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 313.834H128.137V301.045H0V313.834Z"
          />
          <m.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 294.651H128.137V275.467H0V294.651Z"
          />
          <m.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 269.072H128.137V243.371H0V269.072Z"
          />
        </g>
        <m.path
          variants={pathVariants(50, 8, 0)}
          animate="animate"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.4321 34.5654C34.4321 38.0086 36.2767 39.8531 39.7199 39.8531H57.4278V75.269C57.4278 79.3271 63.9453 80.9257 65.421 76.2528C65.6669 75.392 65.5439 72.9325 65.5439 71.8258V58.6678C65.6669 56.3314 66.0358 57.0692 68.7412 55.3476C72.5533 52.8881 69.602 54.6098 73.0452 53.7489L88.6626 49.4449C92.2288 48.3382 93.9504 45.1409 91.368 42.4356C89.0315 39.9761 84.4816 42.0666 81.5303 42.9274L70.9547 45.8788V39.1153C72.6763 38.7464 86.941 29.1546 89.5234 27.556C95.4261 23.8668 92.2288 18.0871 87.9248 18.0871C85.7113 18.0871 81.7762 21.1614 80.0546 22.2682C78.7019 23.129 77.7181 23.7438 76.3655 24.6046C74.8898 25.5884 73.783 26.2033 72.4304 27.0641C71.2006 27.9249 70.2169 28.6627 68.7412 29.5235C66.4047 30.8762 63.3304 30.2613 59.1494 30.2613C56.444 30.2613 39.228 29.7695 36.8915 30.7532C35.5388 31.3681 34.3091 32.8438 34.3091 34.5654H34.4321ZM37.3834 33.4586C37.1375 34.5654 36.1537 37.1478 39.5969 37.0248C40.7036 37.0248 41.3185 37.0248 42.4252 37.0248C45.2536 37.0248 57.9197 36.4099 60.0102 37.6397V67.3988C60.0102 71.3339 59.3953 75.146 61.117 76.4987L62.5926 76.0068L62.7156 65.8002C62.8386 65.0624 62.7156 65.9232 62.7156 65.0624V58.2989C62.8386 55.8395 62.2237 56.0854 66.5277 53.503C70.9547 50.9206 68.8642 52.0273 74.029 50.5517L87.064 47.1085C89.2775 46.9855 87.8018 46.7396 89.7694 46.2477V44.4031C87.9248 43.4193 88.5397 43.7882 85.2194 44.772L74.6439 47.7233C67.0196 49.6909 68.3723 51.4125 68.3723 38.8694C68.3723 37.1478 77.9641 31.86 79.8087 30.6303C81.2843 29.6465 82.514 28.9087 83.9897 28.0479C87.3099 25.8344 91.368 24.2357 89.7694 21.7763C88.0478 19.3169 84.9735 22.6371 81.5303 24.8506L69.602 32.5978C66.0358 34.6883 45.4995 31.86 37.5064 33.7046L37.3834 33.4586ZM68.3723 61.7421C68.3723 71.4569 80.5465 72.0717 82.883 64.5705C84.6046 58.9138 79.4397 53.2571 73.5371 55.2246C70.8317 56.0854 68.3723 58.4219 68.3723 61.8651V61.7421ZM71.0777 62.111C71.0777 68.3826 80.5465 68.8745 80.5465 61.7421C80.5465 56.3314 71.0777 55.7165 71.0777 62.111Z"
          fill="white"
        />
      </m.svg>
    </div>
  );
};

export default Loading;
