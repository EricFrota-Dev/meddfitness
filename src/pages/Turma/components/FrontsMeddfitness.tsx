import exemplo from "@/assets/images/exemplo.jpg";

const FrontsMeddfitness = () => {
  return (
    <section>
      <div className="customContainer flex flex-col gap-10">
        <div>
          <h2 className="text-center ">
            A <span>MEDDFITNESS ATUA EM DIVERSAS FRENTES</span>, conectando
            profissionais, empresas e entidades do setor. Entre os principais
            segmentos que fazem parte do nosso ecossistema, destacam-se:
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <img src={exemplo} alt="exemplo" />
        </div>
        <div className="md:flex">
          <div className="p-6 flex items-center flex-3">
            <h2 className="text-center md:text-end">
              Somos um “centro de estudos” que coordenarmseis (6) Camara
              Setoriais sendo; “NEGÓCIOS, MUSICA, MODA, ARTE, INTERNET e
              FITNESS”, como trabalho social da empresa
            </h2>
          </div>
          <div className="p-6 flex flex-1 items-center border-t-[2px] border-b-[2px] md:border-t-[0px] md:border-b-[0px] md:border-r-[2px] md:border-l-[2px] border-t-2 border-b-2  border-r-2 border-l-2">
            <h2 className="text-center">
              <span>MÚSICA ARTE MODA NEGÓCIOS MUNDO FITNESS EVENTO</span>
            </h2>
          </div>
          <div className="p-6 flex items-center flex-3">
            <h2 className="text-center md:text-start">
              {" "}
              Essas câmaras setoriais possibilitam a criação de projetos
              sociais, capacitação profissional e oportunidades para novos
              talentos, consolidando a MEDDFITNESS como um centro de estudos e
              inovação no Brasil.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontsMeddfitness;
