import { echoSysyemCardProps } from "./types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EchoSysyemCard from "./EchoSysyemCard";

const EchoSysyemCarousel: React.FC<echoSysyemCardProps> = ({ items }) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1460,
      },
      items: 6,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 490,
        min: 490,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1460,
        min: 980,
      },
      items: 4,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className="px-15"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable>
      {items.concat(items).map(({ title, src, desc }, index) => (
        <EchoSysyemCard key={index} title={title} src={src} desc={desc} />
      ))}
    </Carousel>
  );
};

export default EchoSysyemCarousel;
