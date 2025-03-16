import { fitFem02 } from "@/assets/images/categorias";
import {
  fitModel01,
  fitModel02,
  fitModel03,
  fitModelTable,
} from "@/assets/images/fitModels";
import AtractionCard from "@/components/ui/AtractionCard";
import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import { banners, categorias, premiacoes } from "@/constants";
import { motion } from "motion/react";

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
        <div className="customContainer">
          <h1 className="text-center mb-10">PREMIÇÃO</h1>
          <div className="md:grid flex flex-col md:grid-cols-3 md:grid-rows-auto gap-4 md:auto-rows-auto">
            {premiacoes.map(({ title, topics }, i) => (
              <GradientCard
                bordered
                key={i}
                className={i === 0 ? "col-span-3" : ""}>
                <div
                  className={
                    i === 0
                      ? "flex flex-col md:flex-row gap-16 w-full justify-around p-6"
                      : ""
                  }>
                  {i === 0 && (
                    <div className="max-w-150 flex-1">
                      <img src={fitFem02} alt="#" />
                    </div>
                  )}
                  <div className="flex-2 flex gap-6 justify-around flex-col ">
                    <h1 className={i !== 0 ? "text-center" : ""}>
                      <span>{title}</span>
                    </h1>
                    <ul className="list-disc pl-5">
                      {topics.map((topic, index) =>
                        i === 0 ? (
                          <li key={index}>
                            <h2>{topic}</h2>
                          </li>
                        ) : (
                          <li key={index}>{topic}</li>
                        )
                      )}
                    </ul>
                    {i === 0 && (
                      <Button typeBtn="redirect">Fazer minha inscrição</Button>
                    )}
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <h1 className="mb-10">1º FIT MODEL RIO PRETO</h1>
          <div className="md:flex gap-6">
            <div className="flex-5 mb-6 md:mb-0">
              <img src={fitModelTable} alt="table" />
            </div>
            <div className="flex-3 flex flex-col gap-6 justify-between">
              <div>
                <img src={fitModel01} alt="teste1" />
              </div>
              <div>
                <img src={fitModel02} alt="teste2" />
              </div>
              <div>
                <img src={fitModel03} alt="teste3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GarotaMegaFitness;
