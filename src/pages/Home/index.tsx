import { motion } from "motion/react";
import BannerCarousel from "@/components/ui/BannerCarousel";
import { entryAnimation } from "@/animations";
import Ingressos from "./components/Ingressos";

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
        <Ingressos />
      </section>
    </>
  );
};

export default Home;
