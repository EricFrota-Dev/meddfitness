import GradientCard from "@/components/ui/GradientCard";
import { projetoMeddfitness } from "@/constants";

const MeddProject = () => {
  return (
    <section id="projetoMeddfitness">
      <div className="customContainer">
        <div>
          <h2>
            A <span>MEDDFITNESS</span> é um projeto inovador e dinâmico, criado
            para transformar o cenário da medicina esportiva e do fitness no
            Brasil, levando conhecimento, oportunidades e experiências únicas
            para todos os envolvidos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10">
          {projetoMeddfitness.map(({ title, desc, icon }, index) => (
            <div key={index} className="flex items-center flex-col">
              <div className="flex items-center justify-center mb-6 mt-6 md:mt-0">
                <img src={icon} alt={title} className="w-18 h-18" />
              </div>

              <GradientCard className="max-w-70 shadow-xl h-full">
                <div className="h-full">
                  <div>
                    <h2 className="mb-4">
                      <span>{title}</span>
                    </h2>
                  </div>
                  <div>
                    <p>{desc}</p>
                  </div>
                </div>
              </GradientCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeddProject;
