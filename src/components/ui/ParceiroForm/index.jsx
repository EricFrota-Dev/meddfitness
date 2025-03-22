import React, { useState } from "react";
import GradientCard from "../GradientCard";
import Button from "../Button";
import { PatternFormat } from "react-number-format";

const ParceiroForm = () => {
  const [cnpj, setCnpj] = useState("");
  const [erro, setErro] = useState("");

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <GradientCard bordered className="w-fit">
        {" "}
        <label htmlFor="cnpj">
          <h1>Informe seu CNPJ</h1>
        </label>
        <div className="relative">
          <PatternFormat
            id="cnpj"
            format="+1 (###) #### ###"
            allowEmptyFormatting
            mask="_"
          />
          ;
          {erro && cnpj && (
            <div className="text-red-400 absolute -top-1 left-6">{erro}</div>
          )}
        </div>
        <Button type="submit" typeBtn="redirect" onClick={handleSubmit}>
          Apoiar a Meddfitness
        </Button>{" "}
      </GradientCard>
    </form>
  );
};

export default ParceiroForm;
