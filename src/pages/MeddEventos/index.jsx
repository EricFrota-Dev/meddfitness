import EventsCarousel from "../../components/EventsCarousel";


const MeddEventos = () => {
  return (
    <>
      <section id="events">
        <div className="customContainer flex ">
          <div className="flex-1">
            <div>
              <EventsCarousel />
            </div>

            <div></div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h1>NOSSOS EVENTOS REALIZADOS</h1>
            <p>
              {" "}
              Além do <span className="font-semibold">MEDDFITNESS</span>, somos
              referência na organização de grandes eventos, incluindo festas,
              raves e blocos de carnaval, sempre entregando experiências únicas
              e inesquecíveis
            </p>
            <p>
              {" "}
              Agora, nosso objetivo é consolidar nossa marca no universo
              fitness, promovendo eventos de alto impacto na medicina esportiva,
              fisiculturismo e performance atlética
            </p>
            <p>
              {" "}
              Do entretenimento ao alto rendimento, elevamos cada evento a um
              novo patamar!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeddEventos;
