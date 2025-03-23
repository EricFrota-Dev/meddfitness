import Button from "@/components/ui/Button";
import GradientCard from "@/components/ui/GradientCard";
import { voluntiers } from "../constants";

const Volunteer = () => {
  return (
    <div className="customContainer text-center">
      <h1 className="mb-6">SEJA UM VOLUNTÁRIO</h1>
      <div className="flex justify-center gap-10 flex-wrap">
        {voluntiers.map(({ title, content }, i) => (
          <GradientCard bordered className="max-w-80" key={i}>
            <div className="flex gap-2 flex-col h-full justify-between">
              <h1>
                <span>{title}</span>
              </h1>
              <p>{content}</p>
              <Button typeBtn="redirect">Saiba mais</Button>
            </div>
          </GradientCard>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
