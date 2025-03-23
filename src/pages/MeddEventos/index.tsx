import { entryAnimation } from "@/animations";
import EventsCarousel from "@/components/ui/EventsCarousel";
import { motion } from "motion/react";
import { events, videoIFBB } from "./constants";
import VideoContainer from "./components/VideoContainer";

const MeddEventos = () => {
  return (
    <>
      <section id="events">
        <div className="customContainer grid grid-cols-1 md:grid-cols-2 min-h-150">
          <div className="flex justify-center">
            <div className="flex items-center">
              <EventsCarousel items={events} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 md:px-10 justify-center">
            <motion.div
              variants={entryAnimation()}
              initial="from_right"
              whileInView="default">
              <h1>NOSSOS EVENTOS REALIZADOS</h1>
              <p>
                {" "}
                Além do <span className="font-semibold">MEDDFITNESS</span>,
                somos referência na organização de grandes eventos, incluindo
                festas, raves e blocos de carnaval, sempre entregando
                experiências únicas e inesquecíveis
              </p>
              <p>
                {" "}
                Agora, nosso objetivo é consolidar nossa marca no universo
                fitness, promovendo eventos de alto impacto na medicina
                esportiva, fisiculturismo e performance atlética
              </p>
              <p>
                {" "}
                Do entretenimento ao alto rendimento, elevamos cada evento a um
                novo patamar!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="videos">
        <div className="customContainer flex justify-center items-center h-200">
          <motion.h1
            variants={entryAnimation()}
            initial="from_bottom"
            whileInView="default"
            className="w-full h-full flex justify-center items-center">
            <VideoContainer videoUrl={videoIFBB} />
          </motion.h1>
        </div>
      </section>
    </>
  );
};

export default MeddEventos;
