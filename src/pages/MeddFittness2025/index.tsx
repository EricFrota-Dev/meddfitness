import { entryAnimation } from "@/animations";
import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import PerfilCard from "@/components/ui/PerfilCards";
import { atractions, banners, embaixadores, patrocinadores } from "@/constants";
import { motion } from "motion/react";
import medEventPhoto from "@/assets/images/events/meddfitness-event.jpg";
import AtractionCard from "@/components/ui/AtractionCard";
import Accordion from "@/components/ui/Accordion";
import { duvidasRespostas01, duvidasRespostas02 } from "./constants";
import Local from "./components/Local";
import Passport from "./components/Passport";
import Partner from "./components/Partner";
import Volunteer from "./components/Volunteer";
import Downloads from "./components/Downloads";
import Speakers from "./components/Speakers";
import DailyTickets from "./components/DailyTickets";

const MeddFitness2025 = () => {
  return (
    <>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <BannerItem src={banners[0].src} alt={banners[0].alt} />
      </motion.section>
      <motion.section
        variants={entryAnimation()}
        initial="from_bottom"
        animate="default">
        <div className="customContainer text-center px-20 bg-6/60">
          <div>
            <h1>
              <span>1ª Edição do MEDDFITNESS – São José do Rio Preto</span>
            </h1>
            <h2>
              O WORKSHOP MEDDFITNESS 2025 marca o início de uma nova era na
              medicina esportiva, reunindo especialistas, atletas, pesquisadores
              e profissionais do setor fitness para compartilhar conhecimento,
              inovação e experiências.
            </h2>
          </div>
          <div className="flex justify-center">
            <GarantirEngressoBtn className="mt-6" />
          </div>
        </div>
      </motion.section>
      <section>
        <div className="customContainer text-center">
          <div>
            <h1>EMBAIXADORES</h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {embaixadores.map(({ title, src, desc }, i) => (
              <PerfilCard key={i} src={src} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <div>
            <h1>MEDDFITNESS 2025</h1>
          </div>
          <div className="xl:flex bg-4 mt-6">
            <div className="flex-1 order-first xl:order-last">
              <img src={medEventPhoto} alt="foto Evento" />
            </div>
            <div className="flex-1 p-6 order-last xl:order-first">
              <Accordion items={duvidasRespostas01} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Speakers />
      </section>
      <section id="localDoEvento" className="bg-6/50">
        <Local />
      </section>
      <section>
        <div className="customContainer">
          <h1 className="text-center mb-10">ATRAÇÕES DA FEIRA</h1>

          {atractions.map((atraction, i) => (
            <AtractionCard {...atraction} isLeft={i % 2 == 0} key={i} />
          ))}
        </div>
      </section>
      <section id="passaportes">
        <Passport />
      </section>
      <section className="bg-2 text-5 text-center mb-10">
        <h1 className="m-6">
          MEDDFITNESS 2025: Onde a ciência, o esporte e a performance se
          encontram para transformar o futuro do fitness!
        </h1>
      </section>
      <section id="sejaParceiro">
        <Partner />
      </section>
      <section>
        <div className="bg-6/70 text-center py-10  px-6">
          <h1>
            <span>MEDDFITNESS – São José do Rio Preto</span>
          </h1>
          <h2>
            Apoiar o MEDDFITNESS 2025 é conectar sua marca ao futuro do esporte,
            da saúde e da alta performance. Seja um patrocinador e impacte
            milhares de pessoas!
          </h2>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <h1>QUADRO DE PATROCINADORES</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {patrocinadores.map((patrocinador, i) => (
              <PerfilCard {...patrocinador} key={i} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <h1>PERGUNTAS FREQUÊNTES</h1>
          <Accordion items={duvidasRespostas02} />
        </div>
      </section>
      <section id="voluntario">
        <Volunteer />
      </section>
      <section>
        <Downloads />
      </section>
      <section>
        <div className="bg-2 text-center text-5 py-10 my-10">
          <h1>REALIZAÇÃO</h1>
        </div>
      </section>
      <section>
        <DailyTickets />
      </section>
    </>
  );
};

export default MeddFitness2025;
