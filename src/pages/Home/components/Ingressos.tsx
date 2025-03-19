import { pulseAnimation } from "@/animations";
import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import { ingressosCard } from "@/constants";
import { motion } from "motion/react";
import React from "react";

const Ingressos = () => {
  return (
    <div className="customContainer flex flex-col justify-around gap-10">
      <div className="flex flex-col md:flex-row gap-[5%] justify-center items-center">
        {ingressosCard.map((event, index) => (
          <GradientCard
            key={index}
            bordered
            className="w-full md:max-w-60 text-center mb-[5%] md:mb-0">
            <h2>
              {event.title
                .split(" ")
                .map((word, idx) =>
                  event.neonWords.includes(word) ? (
                    <span key={idx} className="neon">
                      {word}
                    </span>
                  ) : (
                    word
                  )
                )
                .reduce<React.ReactNode[]>((prev, curr) => {
                  return [prev, " ", curr];
                }, [])}
            </h2>
          </GradientCard>
        ))}
      </div>
      <motion.div
        variants={pulseAnimation()}
        animate="default"
        className="flex justify-center">
        <Button
          typeBtn="redirect"
          onClick={() => console.log('clicou em "Garanta seu ingresso"')}>
          <strong>Garanta seu ingresso</strong> para o proximo evento
        </Button>
      </motion.div>
    </div>
  );
};

export default Ingressos;
