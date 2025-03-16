import GradientCard from "@/components/ui/GradientCard";
import { cardsContent } from "../constants";

const TurmaPurpose = () => {
  return (
    <section>
      <div className="customContainer text-center">
        <div>
          <h2 className="mb-6">
            O <span className="neon">PROPÓSITO DA MEDDFITNESS</span> é levar
            conhecimento e participação em grandes eventos relacionados a
            medicina esportiva e desenvolver o mercado para empresas nas cidades
            do interior do Brasil
          </h2>
          <h3>
            Nosso foco são eventos como Workshop, Seminários, Convenções unindo
            o setor de medicina esportiva com o setor de Fitness e
            fisiculturismo com ações conjuntas e sustentáveis, dentro de um
            ambiente saudável e inédito
          </h3>
        </div>
        <div className="text-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-18 mb-18 h-full">
          {cardsContent.map((text, i) => (
            <GradientCard
              bordered
              key={i}
              className="min-w-[130px] max-w-70 ml-auto mr-auto">
              {text}
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurmaPurpose;
