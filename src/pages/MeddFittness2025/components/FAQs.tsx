import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { duvidasRespostas02 } from "../constants";

const FAQs = () => {
  return (
    <div className="px-[6%] bg-5">
      <div className="xl:flex mb-6 justify-around hidden">
        <Button>INFORMAÇÕES DO EVENTO</Button>
        <Button>COMPRAR INGRESSO</Button>
        <Button>CURSOS E TRANSMISSÕES</Button>
        <Button>EXPOSITORES</Button>
      </div>
      <div>
        <Accordion items={duvidasRespostas02} />
      </div>
    </div>
  );
};

export default FAQs;
