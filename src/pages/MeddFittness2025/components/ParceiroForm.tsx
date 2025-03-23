import { useState } from "react";
import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import { PatternFormat } from "react-number-format";
import { validarCnpj } from "@/utils/validate";

const ParceiroForm = () => {
  const [cnpj, setCnpj] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCnpj(cnpj)) {
      setErro("CNPJ inválido");
      return;
    }

    setErro("");
    console.log("Enviando CNPJ:", cnpj);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <GradientCard bordered className="w-fit p-4">
        <label htmlFor="cnpj">
          <h1 className="text-lg font-semibold mb-2">Informe seu CNPJ</h1>
        </label>
        <div className="relative">
          <PatternFormat
            id="cnpj"
            format="##.###.###/####-##"
            allowEmptyFormatting
            mask="_"
            value={cnpj}
            onValueChange={(values) => setCnpj(values.value)}
            className="border border-4 p-2 rounded w-full my-4"
          />
          {erro && (
            <div className="text-red-400 absolute -top-5 left-6">{erro}</div>
          )}
        </div>
        <Button type="submit" typeBtn="redirect">
          Apoiar a Meddfitness
        </Button>
      </GradientCard>
    </form>
  );
};

export default ParceiroForm;
