import BannerItem from "../../components/BannerCarousel/BannerItem";
import GradientCard from "../../components/GradientCard";
import PerfilCard from "../../components/PerfilCards";
import {
  banners,
  projetoMeddfitness,
  images,
  stafPerfilPhotos,
  echosystem,
} from "../../constants";
import exemplo from "../../assets/Images/exemplo.png";
import EchoSysyemCarousel from "../../components/EchoSysyemCarousel";
import { motion } from "motion/react";
import { entryAnimation } from "../../constants/animations";

const Turma = () => {
  const cardsContent = [
    "Criar experiências duradouras",
    "Realização de eventos “espetáculos”",
    "Acesso ao Terceiro Setor –geração de emprego e renda",
    "Apoiar novos profissionais de nossas câmaras setoriais.",
  ];

  return (
    <>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <BannerItem src={banners[1].src} alt={banners[1].alt} />
      </motion.section>
      <section>
        <div className="customContainer mt-10 mb-10 flex flex-col xl:flex-row gap-5 xl:gap-20">
          <motion.div
            className="flex-1 flex items-center"
            variants={entryAnimation()}
            initial="from_left"
            whileInView="default">
            <img
              src={images[0].url}
              alt={images[0].name}
              className="w-full max-w-100"
            />
          </motion.div>
          <motion.div
            className="flex-2"
            variants={entryAnimation()}
            initial="from_right"
            whileInView="default">
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
          </motion.div>
        </div>
      </section>
      <section>
        <div className="customContainer flex flex-col items-center">
          <h1>COMISSÃO 2025</h1>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {stafPerfilPhotos.map(({ src, name, role }) => (
              <PerfilCard src={src} name={name} role={role} key={name} />
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
      <section>
        <div className="customContainer flex flex-col gap-10">
          <div>
            <h2 className="text-center ">
              A <span>MEDDFITNESS ATUA EM DIVERSAS FRENTES</span>, conectando
              profissionais, empresas e entidades do setor. Entre os principais
              segmentos que fazem parte do nosso ecossistema, destacam-se:
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <img src={exemplo} alt="exemplo" />
          </div>
          <div className="md:flex">
            <div className="p-6 flex items-center flex-3">
              <h2 className="text-center md:text-end">
                Somos um “centro de estudos” que coordenarmseis (6) Camara
                Setoriais sendo; “NEGÓCIOS, MUSICA, MODA, ARTE, INTERNET e
                FITNESS”, como trabalho social da empresa
              </h2>
            </div>
            <div className="p-6 flex flex-1 items-center border-t-[2px] border-b-[2px] md:border-t-[0px] md:border-b-[0px] md:border-r-[2px] md:border-l-[2px] border-t-2 border-b-2  border-r-2 border-l-2">
              <h2 className="text-center">
                <span>MÚSICA ARTE MODA NEGÓCIOS MUNDO FITNESS EVENTO</span>
              </h2>
            </div>
            <div className="p-6 flex items-center flex-3">
              <h2 className="text-center md:text-start">
                {" "}
                Essas câmaras setoriais possibilitam a criação de projetos
                sociais, capacitação profissional e oportunidades para novos
                talentos, consolidando a MEDDFITNESS como um centro de estudos e
                inovação no Brasil.
              </h2>
            </div>
          </div>
        </div>
      </section>
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
      <section id="projetoMeddfitness">
        <div className="customContainer">
          <div>
            <h2>
              A <span>MEDDFITNESS</span> é um projeto inovador e dinâmico,
              criado para transformar o cenário da medicina esportiva e do
              fitness no Brasil, levando conhecimento, oportunidades e
              experiências únicas para todos os envolvidos.
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
    </>
  );
};

export default Turma;
