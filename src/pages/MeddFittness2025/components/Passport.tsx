import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import { ingressos } from "@/constants";

const Passport = () => {
  return (
    <div className="customContainer mb-10">
      <h1 className="text-center mb-10">
        PASSAPORTE COM ACESSO À DIVERSOS CONTEÚDOS
      </h1>
      <div className="flex w-full items-center md:items-stretch flex-col md:flex-row gap-10 justify-center">
        {ingressos.map(({ title, descs, value, redirect }, i) => (
          <GradientCard bordered key={i} className="flex-1 max-w-70">
            <div className="h-full flex flex-col relative justify-between">
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
              <div className="absolute -bottom-14">
                <Button
                  typeBtn="redirect"
                  onClick={() => {
                    window.open(redirect);
                  }}>
                  Compar Agora
                </Button>
              </div>
            </div>
          </GradientCard>
        ))}
      </div>
    </div>
  );
};

export default Passport;
