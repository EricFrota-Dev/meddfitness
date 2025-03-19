import Button from "@/components/ui/Button";
import EchoSysyemCarousel from "@/components/ui/EchoSysyemCarousel";
import { palestrants } from "@/constants";
import { motion } from "motion/react";

const Speakers = () => {
  return (
    <>
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
    </>
  );
};

export default Speakers;
