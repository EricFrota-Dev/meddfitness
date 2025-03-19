import { fitFem02 } from "@/assets/images/categorias";
import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import { premiacoes } from "@/constants";

const Awards = () => {
  return (
    <div className="customContainer">
      <h1 className="text-center mb-10">PREMIÇÃO</h1>
      <div className="md:grid flex flex-col md:grid-cols-3 md:grid-rows-auto gap-4 md:auto-rows-auto">
        {premiacoes.map(({ title, topics }, i) => (
          <GradientCard
            bordered
            key={i}
            className={i === 0 ? "col-span-3" : ""}>
            <div
              className={
                i === 0
                  ? "flex flex-col md:flex-row gap-16 w-full justify-around p-6"
                  : ""
              }>
              {i === 0 && (
                <div className="max-w-150 flex-1">
                  <img src={fitFem02} alt="#" />
                </div>
              )}
              <div className="flex-2 flex gap-6 justify-around flex-col ">
                <h1 className={i !== 0 ? "text-center" : ""}>
                  <span>{title}</span>
                </h1>
                <ul className="list-disc pl-5">
                  {topics.map((topic, index) =>
                    i === 0 ? (
                      <li key={index}>
                        <h2>{topic}</h2>
                      </li>
                    ) : (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
                {i === 0 && (
                  <Button typeBtn="redirect">Fazer minha inscrição</Button>
                )}
              </div>
            </div>
          </GradientCard>
        ))}
      </div>
    </div>
  );
};

export default Awards;
