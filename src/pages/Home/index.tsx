import { motion } from "motion/react";
import BannerCarousel from "@/components/ui/BannerCarousel";
import { entryAnimation, pulseAnimation } from "@/animations";
import { ingressosCard } from "@/constants";
import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";

const Home = () => {
  return (
    <>
      <section id="banners">
        <BannerCarousel />
      </section>
      <section id="MedFuture">
        <div className="customContainer flex items-center bg-6 xl:min-h-40">
          <motion.h2
            className="xl:text-2xl md:text-xl text-sm flex m-auto flex-wrap w-fit justify-center"
            variants={entryAnimation()}
            initial="from_right"
            animate="default">
            <p className="text-center">
              O futuro da <span>medicina esportiva</span> e do{" "}
              <span>fitness</span> começa aqui.
            </p>
            <p className="font-extralight text-center">
              {" "}
              Viva a experiência, transforme sua performance!
            </p>
          </motion.h2>
        </div>
      </section>
      <section id="events">
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
      </section>
    </>
  );
};

export default Home;
