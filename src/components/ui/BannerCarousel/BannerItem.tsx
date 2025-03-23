import { imagesProps } from "@/constants/types";

const BannerItem = ({ src, alt }: imagesProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-screen h-auto min-h-50 object-cover"
    />
  );
};

export default BannerItem;
