import BannerItem from "../../components/BannerCarousel/BannerItem";
import GradiantCard from "../../components/GradientCard";
import { banners, embaixadores } from "../../constants";
import Button from "../../components/Button";
import GarantirEngressoBtn from "../../components/Button/GarantirEngressoBtn";
import { motion } from "motion/react";
import PerfilCard from "../../components/PerfilCards";
import medEventPhoto from "../../assets/Images/events/meddfitness-event.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EchoSysyemCarousel from "../../components/EchoSysyemCarousel";
import { palestrants } from "../../constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import localImg from "../../assets/Images/Uncategorized/local.jpg";

const MeddFitness2025 = () => {
  return (
    <>
      <section>
        <BannerItem src={banners[0].src} alt={banners[0].alt} />
      </section>
      <section>
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
          <GarantirEngressoBtn className="mt-6" />
        </div>
      </section>
      <section>
        <div className="customContainer text-center">
          <div>
            <h1>EMBAIXADORES</h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-6 justify-around">
            {embaixadores.map(({ name, src, role }, i) => (
              <PerfilCard
                key={i}
                src={src}
                name={name}
                alt={name}
                role={role}
              />
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
              <Accordion
                type="single"
                collapsible
                className="w-full h-full flex flex-col justify-around text-start transition-all">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="transition-all">
                    Por que em São José do Rio Preto?
                  </AccordionTrigger>
                  <AccordionContent>Por que eu moro aqui!</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Por que o Workshop/feira??
                  </AccordionTrigger>
                  <AccordionContent>Pa nois fica rico!</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Tema central</AccordionTrigger>
                  <AccordionContent>
                    Fitness, ta no nome do site pow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Por que participar?</AccordionTrigger>
                  <AccordionContent>Pra ficar sarado pow.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>A quem se destina?</AccordionTrigger>
                  <AccordionContent>
                    Quem gosta de puxar ferro.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
            <Button>
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
            <img src={localImg} alt="local" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-10">
            <div>
              <h1>
                <span className="neon">25 E 26 DE JULHO DE 2025</span>
              </h1>
              <h2>LOCAL: CENTRO REGIONAL DE EVENTOS</h2>
            </div>
            <div>
              <GradiantCard bordered>
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
              </GradiantCard>
            </div>
          </div>
        </div>
        <GarantirEngressoBtn className="mb-8" />
      </section>
      <section>
        <div className="customContainer">
          <h1 className="text-center">ATRAÇÕES DA FEIRA</h1>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default MeddFitness2025;
