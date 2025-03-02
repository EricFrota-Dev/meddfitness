import Button from "../../components/Button";
import GradientCard from "../../components/GradientCard";

const Home = () => {
  return (
    <section>
      <GradientCard>testando sas poha tudo lorem</GradientCard>
      <GradientCard bordered>testando sas poha tudo lorem</GradientCard>
      <Button typeBtn="redirect">Comprar agora</Button>
      <br />
      <Button typeBtn="redirect">
        Comprar ingresso <span className="neon">diário</span>
      </Button>
      <br />
      <Button typeBtn="redirect">
        <strong>Garanta seu ingresso</strong> para o proximo evento
      </Button>
      <br />
      <Button typeBtn="download">GARANTIR O MEU INGRESSO</Button>
      <br />
      <Button>CURSOS E TRANSMISSÕES</Button>
      <br />
      <Button typeBtn="redirect">SAIBA MAIS</Button>
      <br />
      <Button typeBtn="download">FAZER MINHA ESCRIÇÂO</Button>
      <br />
      <Button>¬</Button>
    </section>
  );
};

export default Home;
