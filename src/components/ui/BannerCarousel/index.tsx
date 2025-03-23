import { banners } from "@/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerItem from "./BannerItem";
import { CustomLeftArrow, CustomRightArrow } from "./Arrows";

const BannerCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 460 },
      items: 1,
    },
  };

  return (
    <div className="w-screen flex justify-center -z-10">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="w-screen"
        draggable
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        swipeable
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}>
        {banners.map(({ alt, src }, i) => (
          <BannerItem key={i} src={src} alt={alt} />
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
