import { entryAnimation } from "@/animations";
import { images } from "@/constants";
import { motion } from "motion/react";

const TurmaAbout = () => {
  return (
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
            democratizar o acesso à informação, promovendo eventos de alto nível
            que unam medicina esportiva, nutrição, fisioterapia, educação física
            e fisiculturismo em um ambiente de aprendizado e networking.
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
  );
};

export default TurmaAbout;
