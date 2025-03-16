import { imagesProps } from "@/constants/types";

const BannerItem = ({ src, alt }: imagesProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="-z-10 min-h-45 max-h-170 w-auto mx-auto object-cover"
    />
  );
};
export default BannerItem;
