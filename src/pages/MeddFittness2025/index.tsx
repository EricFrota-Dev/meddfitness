import { entryAnimation } from "@/animations";
import BannerItem from "@/components/ui/BannerCarousel/BannerItem";
import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import PerfilCard from "@/components/ui/PerfilCards";
import {
  atractions,
  banners,
  embaixadores,
  ingressos,
  palestrants,
  parceiros,
  patrocinadores,
} from "@/constants";
import { motion } from "motion/react";
import medEventPhoto from "@/assets/images/events/meddfitness-event.jpg";
import EchoSysyemCarousel from "@/components/ui/EchoSysyemCarousel";
import Button from "@/components/ui/Button";
import localImg from "@/assets/images/Uncategorized/local.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import AtractionCard from "@/components/ui/AtractionCard";
import GradientCard from "@/components/ui/GradientCard";
import ParceiroForm from "./components/ParceiroForm";
import Accordion from "@/components/ui/Accordion";
import { duvidasRespostas01, duvidasRespostas02 } from "./constants";

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
        <div className="text-center mt-6">
          <div>
            <h1>PALESTRANTES E TEMAS ABORDADOS</h1>
          </div>
          <div className="mt-6">
            <EchoSysyemCarousel items={palestrants} />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <motion.div className="cursor-pointer">
            <Button onClick={() => {}}>
              <span className="font-bold">
                CLIQUE AQUI E CONFIRA AS ATIVIDADES E CRONOGRAAMA DA FEIRA
              </span>
            </Button>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="customContainer flex flex-col md:flex-row text-center gap-10">
          <div className="flex-1 flex justify-center items-center">
            <motion.img
              src={localImg}
              alt="local"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-10">
            <div>
              <h1>
                <span className="neon">25 E 26 DE JULHO DE 2025</span>
              </h1>
              <h2>LOCAL: CENTRO REGIONAL DE EVENTOS</h2>
            </div>
            <div>
              <GradientCard bordered>
                <div className="flex">
                  <div>
                    <span>
                      <FaMapMarkerAlt className="w-12 h-12" />
                    </span>
                  </div>
                  <div className="ml-8">
                    <p>
                      Av. José Munia, 5650 - Nova Redentora, São José do Rio
                      Preto - SP, 15090-500
                    </p>
                  </div>
                </div>
              </GradientCard>
            </div>
            <GarantirEngressoBtn className="flex justify-center" />
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer">
          <h1 className="text-center mb-10">ATRAÇÕES DA FEIRA</h1>

          {atractions.map((atraction, i) => (
            <AtractionCard {...atraction} isLeft={i % 2 == 0} key={i} />
          ))}
        </div>
      </section>
      <section>
        <div className="customContainer mb-10">
          <h1 className="text-center mb-10">
            PASSAPORTE COM ACESSO À DIVERSOS CONTEÚDOS
          </h1>
          <div className="flex gap-10 relative justify-center">
            {ingressos.map(({ title, descs, value, redirect }, i) => (
              <GradientCard bordered key={i} className="flex-1 max-w-70">
                <div className="h-full flex flex-col justify-between">
                  <h1 className="text-center">
                    <span>{title}</span>
                  </h1>
                  <ul className="list-disc ml-4">
                    {descs.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <p className="font-medium text-3xl">
                    <strong>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(value)}
                    </strong>
                  </p>
                </div>
                <div className="absolute -bottom-6">
                  <Button
                    typeBtn="redirect"
                    onClick={() => {
                      window.open(redirect);
                    }}>
                    Compar Agora
                  </Button>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-2 text-5 text-center mb-10">
        <h1 className="m-6">
          MEDDFITNESS 2025: Onde a ciência, o esporte e a performance se
          encontram para transformar o futuro do fitness!
        </h1>
      </section>
      <section>
        <div className="customContainer text-center flex flex-col gap-6">
          <h1>SEJA UM PARCEIRO DO NOSSO EVENTO</h1>
          <h2>
            Se você é proprietário ou gestor de uma academia, box de CrossFit,
            estúdio de yoga, pilates ou clube esportivo, temos uma oportunidade
            especial para você!
            <span>
              {" "}
              Ao apoiar e divulgar o MEDDFITNESS 2025 no seu espaço, você ganha
              entrada gratuita para o evento.
            </span>{" "}
            Basta solicitar o material de divulgação oficial, exibi-lo no seu
            estabelecimento e garantir o seu ingresso gratuito.
          </h2>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {parceiros.map((parceiro, i) => (
              <PerfilCard {...parceiro} key={i} />
            ))}
          </div>
          <ParceiroForm />
        </div>
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
      <section>
        <div className="customContainer text-center">
          <h1 className="mb-6">SEJA UM VOLUNTÁRIO</h1>
          <div className="flex justify-center gap-10 flex-wrap">
            <GradientCard bordered className="max-w-80">
              <div className="flex flex-col justify-between">
                <h1>
                  <span>SEJA UM VOLUNTÁRIO</span>
                </h1>
                <p>
                  Faça parte da organização do maior evento de fitness e
                  bem-estar da América Latina. Participe como monitor voluntário
                  do MEDDFITNESS 2025, entre os dias 25 e 26 de julho, no centro
                  regional de eventos, em Rio Preto (SP)
                </p>
                <Button typeBtn="redirect">Saiba mais</Button>
              </div>
            </GradientCard>
            <GradientCard bordered className="w-80">
              <div className="flex flex-col h-full justify-between">
                <h1>
                  <span>PAINEL NOVOS TALENTOS</span>
                </h1>
                <p>
                  Quer subir no palco da MEDDFit 2025? Inscreva-se para o
                  processo seletivo de novos palestrantes no Painel de Novos
                  Talentos.
                </p>
                <Button typeBtn="redirect">Saiba mais</Button>
              </div>
            </GradientCard>
          </div>
        </div>
      </section>
      <section>
        <div className="customContainer">
          <div className="md:flex md:gap-6 mb-6">
            <div className="flex-1 mb-3 md:mb-0">
              <img src={localImg} alt="#" />
            </div>
            <div className="flex-1 flex gap-3 flex-col justify-around items-center">
              <h1>
                <span>DOWNLOADS</span>
              </h1>
              <Button typeBtn="download">VÍDEO CAMPEONATO 2024</Button>
              <Button typeBtn="download">
                LOGOS IFBB BRASIL E MEDDFITNESS
              </Button>
            </div>
          </div>
          <div className="md:flex md:gap-6">
            <div className="flex-1">
              <GradientCard className="h-full ">
                <div>
                  <h1>
                    <span>SOBRE O EVENTO</span>
                  </h1>
                  <p>
                    1ª MEDDFITNESS – Evento Regional de Conhecimento, Negócios e
                    Entretenimento de Medicina Esportiva
                  </p>
                </div>
              </GradientCard>
            </div>
            <div className="flex-1">
              <GradientCard className="h-full">
                <div>
                  <h1>
                    <span>CONTATO PARA ASSUNTOS SOBRE IMPRENSA</span>
                  </h1>
                  <p>📩 paulonetto@meddfitness.com.br</p>
                  <p>📩 leandro@meddfitness.com.br</p>
                  <p>📩 cassio@meddfitness.com.br</p>
                </div>
              </GradientCard>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-2 text-center text-5 py-10 my-10">
          <h1>REALIZAÇÃO</h1>
        </div>
      </section>
      <section>
        <div className="customContainer flex md:flex-row flex-col gap-10">
          <GradientCard bordered className="flex-1">
            <div className="h-full">
              <h1>
                <span>INGRESSO DIÁRIO</span>
              </h1>
              <p>
                Empresa STARTUP de entretenimento criada em 2022 com o objetivo
                de desplugar do mercado convencional de entretenimento
              </p>
            </div>
          </GradientCard>
          <GradientCard bordered className="flex-1">
            <div>
              <h1>
                <span>INGRESSO DIÁRIO</span>
              </h1>
              <p>
                A Federação Internacional de Culturismo e Fitness (IFBB) possui
                204 nações afiliadas e é reconhecida por mais de 90 federações
                esportivas mundiais. Com foco no esporte amador em todo o mundo,
                a IFBB representa a máxima expectativa de desenvolvimento físico
                muscular humano em harmonia saudável.
              </p>
            </div>
          </GradientCard>
        </div>
      </section>
    </>
  );
};

export default MeddFitness2025;
