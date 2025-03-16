import { useState } from "react";
import { accordionProps } from "./types";
import { motion } from "framer-motion";

const Accordion = ({ items }: accordionProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col text-start">
      {items.map(({ question, response, id }) => (
        <div key={id} className="border-b border-3/30">
          <button
            className="w-full text-left p-3 cursor-pointer font-semibold hover:bg-3/20 transition-all"
            onClick={() => toggleItem(id)}>
            {question}
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openItem === id ? "auto" : 0,
              opacity: openItem === id ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="p-3 ml-3 text-1/50">{response}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
