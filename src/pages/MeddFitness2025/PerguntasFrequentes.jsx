import Button from "../../components/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PerguntasFrequentes = () => {
  const duvidasRespostas = [
    { id: 0, duvida: "Quando será o meddfittness 2025?", resposta: "13231" },
    { id: 1, duvida: "Para quem é o workshopp? Qual o público?", resposta: "" },
    {
      id: 2,
      duvida: "Qual a idade mínima para entrar no evento?",
      resposta: "",
    },
    { id: 3, duvida: "Onde se hospedar em rio preto?", resposta: "" },
    {
      id: 4,
      duvida: "Quero sugerir ou ser um palestrante, como faço?",
      resposta: "",
    },
  ];
  return (
    <div className="px-[6%] bg-5">
      <div className="xl:flex mb-6 justify-around hidden">
        <Button>INFORMAÇÕES DO EVENTO</Button>
        <Button>COMPRAR INGRESSO</Button>
        <Button>CURSOS E TRANSMISSÕES</Button>
        <Button>EXPOSITORES</Button>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full h-full flex flex-col justify-around text-start transition-all">
          {duvidasRespostas.map(({ duvida, resposta, id }) => (
            <AccordionItem value={`item-${id + 1}`} key={id}>
              <AccordionTrigger>
                <h3>{duvida}</h3>
              </AccordionTrigger>
              <AccordionContent className="ml-3">{resposta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PerguntasFrequentes;
