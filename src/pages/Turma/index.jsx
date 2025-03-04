import BannerItem from "../../components/BannerCarousel/BannerItem";
import GradientCard from "../../components/GradientCard";
import PerfilCard from "../../components/PerfilCards";
import { banners, images, stafPerfilPhotos } from "../../constants";

const Turma = () => {
  const cardsContent = [
    "Criar experiências duradouras",
    "Realização de eventos “espetáculos”",
    "Acesso ao Terceiro Setor –geração de emprego e renda",
    "Apoiar novos profissionais de nossas câmaras setoriais.",
  ];

  return (
    <>
      <section>
        <BannerItem src={banners[1].src} alt={banners[1].alt} />
      </section>
      <section>
        <div className="customContainer mt-10 mb-10 flex flex-col xl:flex-row gap-5 xl:gap-20">
          <div className="flex-1 flex items-center">
            <img
              src={images[0].url}
              alt={images[0].name}
              className="w-full max-w-100"
            />
          </div>
          <div className="flex-2">
            <p>
              {" "}
              A <span>MEDDFITNESS</span> nasceu para preencher uma lacuna
              existente no setor de medicina esportiva, oferecendo eventos e
              serviços especializados para profissionais da área que, muitas
              vezes, não têm acesso a grandes congressos realizados nas capitais
              do Brasil. Nosso objetivo é descentralizar o conhecimento e
              democratizar o acesso à informação, promovendo eventos de alto
              nível que unam medicina esportiva, nutrição, fisioterapia,
              educação física e fisiculturismo em um ambiente de aprendizado e
              networking.
              <br /> Através de workshops, seminários e convenções, promovemos a
              conexão entre especialistas da área da saúde esportiva e o setor
              fitness, criando oportunidades para profissionais, empresas e
              atletas. <br />
              Nosso diferencial está na criação de eventos espetáculos, que unem
              ciência, negócios e entretenimento, proporcionando experiências
              imersivas e impactantes para todos os participantes
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer flex flex-col items-center">
          <h1>COMISSÃO 2025</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {stafPerfilPhotos.map(({ src, name, role }) => (
              <PerfilCard src={src} alt={name} name={name} role={role} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <div>
            <h2 className="mb-6">
              O <span className="neon">PROPÓSITO DA MEDDFITNESS</span> é levar
              conhecimento e participação em grandes eventos relacionados a
              medicina esportiva e desenvolver o mercado para empresas nas
              cidades do interior do Brasil
            </h2>
            <h3>
              Nosso foco são eventos como Workshop, Seminários, Convenções
              unindo o setor de medicina esportiva com o setor de Fitness e
              fisiculturismo com ações conjuntas e sustentáveis, dentro de um
              ambiente saudável e inédito
            </h3>
          </div>
          <div className="text-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-18 mb-18 h-full">
            {cardsContent.map((text) => (
              <GradientCard
                bordered
                className="min-w-[130px] max-w-70 ml-auto mr-auto">
                {text}
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Turma;
