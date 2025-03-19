import AtractionCard from "@/components/ui/AtractionCard";
import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import { banners, categorias } from "@/constants";
import { motion } from "motion/react";
import Awards from "./components/Awards";
import FitModel from "./components/FitModel";

const GarotaMegaFitness = () => {
  return (
    <>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <BannerItem src={banners[0].src} alt={banners[0].alt} />
      </motion.section>
      <section>
        <div className="bg-6/80 text-center py-10 my-10">
          <h1>
            <span>ATIVIDADES E CRONOGRAMA</span>
          </h1>
          <h2>
            O WORKSHOP MEDDFITNESS 2025 marca o início de uma nova era na
            medicina esportiva, reunindo especialistas, atletas, pesquisadores e
            profissionais do setor fitness para compartilhar conhecimento,
            inovação e experiências.
          </h2>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <h1 className="mb-10">CATEGORIAS MEDDFITNESS FISIOCULTURISMOS</h1>
          {categorias.map((categoria, i) => (
            <AtractionCard {...categoria} key={i} isLeft={i % 2 == 0} />
          ))}
        </div>
      </section>
      <section>
        <Awards />
      </section>
      <section>
        <FitModel />
      </section>
    </>
  );
};

export default GarotaMegaFitness;
