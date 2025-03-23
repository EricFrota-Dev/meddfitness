import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 p-2 rounded-full hover:bg-black/20">
      <FaChevronLeft size={20} />
    </button>
  );
};

export const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 p-2 rounded-full hover:bg-black/20">
      <FaChevronRight size={20} />
    </button>
  );
};
