import React, { useState } from "react";
import { validarCnpj } from "../../constants/validates";
import GradientCard from "../GradientCard";
import Button from "../Button";

const ParceiroForm = () => {
  const [cnpj, setCnpj] = useState("");
  const [erro, setErro] = useState("");

  // Função para formatar o CNPJ com pontos, barra e hífen
  const formatarCnpj = (valor) => {
    // Remove tudo que não for número
    const cnpjNumeros = valor.replace(/\D/g, "");

    // Formata o CNPJ conforme o padrão: XX.XXX.XXX/XXXX-XX
    if (cnpjNumeros.length <= 2) {
      return cnpjNumeros;
    }
    if (cnpjNumeros.length <= 5) {
      return `${cnpjNumeros.slice(0, 2)}.${cnpjNumeros.slice(2)}`;
    }
    if (cnpjNumeros.length <= 8) {
      return `${cnpjNumeros.slice(0, 2)}.${cnpjNumeros.slice(
        2,
        5
      )}.${cnpjNumeros.slice(5)}`;
    }
    if (cnpjNumeros.length <= 12) {
      return `${cnpjNumeros.slice(0, 2)}.${cnpjNumeros.slice(
        2,
        5
      )}.${cnpjNumeros.slice(5, 8)}/${cnpjNumeros.slice(8)}`;
    }
    return `${cnpjNumeros.slice(0, 2)}.${cnpjNumeros.slice(
      2,
      5
    )}.${cnpjNumeros.slice(5, 8)}/${cnpjNumeros.slice(
      8,
      12
    )}-${cnpjNumeros.slice(12, 14)}`;
  };

  const handleChange = (e) => {
    setErro("");
    const valor = e.target.value;
    setCnpj(formatarCnpj(valor));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarCnpj(cnpj)) {
      setErro("CNPJ inválido");
    } else {
      setErro("");
      // Enviar o formulário ou fazer outra ação
      console.log("Formulário enviado");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <GradientCard bordered className="w-fit">
        {" "}
        <label htmlFor="cnpj">
          <h1>Informe seu CNPJ</h1>
        </label>
        <div className="relative">
          <input
            id="cnpj"
            type="text"
            placeholder="00.000.000/0000-00"
            className="border-b-[1px] border-b-3 m-6 p-4"
            value={cnpj}
            onChange={handleChange}
          />
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
