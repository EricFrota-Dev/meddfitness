import PerfilCard from "@/components/ui/PerfilCards";
import { parceiros } from "@/constants";
import ParceiroForm from "./ParceiroForm";

const Partner = () => {
  return (
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
  );
};

export default Partner;
