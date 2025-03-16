import { entryAnimation } from "@/animations";
import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import { banners, echosystem, stafPerfilPhotos } from "@/constants";
import { motion } from "motion/react";
import TurmaAbout from "./components/TurmaAbout";
import PerfilCard from "@/components/ui/PerfilCards";
import TurmaPurpose from "./components/TurmaPurpose";
import FrontsMeddfitness from "./components/FrontsMeddfitness";
import EchoSysyemCarousel from "@/components/ui/EchoSysyemCarousel";
import MeddProject from "./components/MeddProject";

const Turma = () => {
  return (
    <>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <BannerItem src={banners[1].src} alt={banners[1].alt} />
      </motion.section>
      <TurmaAbout />
      <section>
        <div className="customContainer flex flex-col items-center">
          <h1>COMISSÃO 2025</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {stafPerfilPhotos.map(({ src, title, desc }, index) => (
              <PerfilCard src={src} title={title} desc={desc} key={index} />
            ))}
          </div>
        </div>
      </section>
      <TurmaPurpose />
      <FrontsMeddfitness />
      <section>
        <motion.div
          className=" bg-2 text-5 text-center py-14 px-4 "
          variants={entryAnimation()}
          initial="from_left"
          whileInView="default">
          <h1>APOSTAMOS NO INÉDITO. FAZEMOS O QUE NINGUÉM FAZ!</h1>
        </motion.div>
      </section>
      <section id="ecosistema">
        <div className="cusomContainer text-center">
          <div className="my-10">
            <p className="text-3xl font-bold">ECOSSISTEMA OPERACIONAL</p>
          </div>
          <div className="my-10">
            <EchoSysyemCarousel items={echosystem} />
          </div>
        </div>
      </section>
      <section id="ecentosRealizados">
        <motion.div
          className="bg-gradient-to-t from-3 to-4  text-1 text-center py-20 px-4"
          variants={entryAnimation()}
          initial="from_right"
          whileInView="default">
          <h1>Mais de 500 eventos realizados!</h1>
        </motion.div>
      </section>
      <MeddProject />
    </>
  );
};

export default Turma;
