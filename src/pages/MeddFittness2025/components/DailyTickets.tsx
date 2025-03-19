import GradientCard from "@/components/ui/GradientCard";
import { dailyTickets } from "../constants";

const DailyTickets = () => {
  return (
    <div className="customContainer flex md:flex-row flex-col gap-10">
      {dailyTickets.map(({ title, content }, i) => (
        <GradientCard bordered className="flex-1" key={i}>
          <div className="h-full">
            <h1>
              <span>{title}</span>
            </h1>
            <p>{content}</p>
          </div>
        </GradientCard>
      ))}
    </div>
  );
};

export default DailyTickets;
