import EventCard from "./EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { eventsCardProps } from "./types";

const EventsCarousel: React.FC<eventsCardProps> = ({ items }) => {
  return (
    <div className="w-80 md:w-100 h-125">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        draggable
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        slidesToSlide={1}
        swipeable>
        {items.map(({ title, src }, index) => (
          <EventCard key={index} title={title} src={src} />
        ))}
      </Carousel>
    </div>
  );
};

export default EventsCarousel;
