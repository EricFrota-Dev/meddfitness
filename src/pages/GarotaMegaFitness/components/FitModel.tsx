import {
  fitModel01,
  fitModel02,
  fitModel03,
  fitModelTable,
} from "@/assets/images/fitModels";

const FitModel = () => {
  const imgs = [fitModel01, fitModel02, fitModel03];

  return (
    <div className="flex-5 mb-6 md:mb-0">
      <img src={fitModelTable} alt="table" />
    </div>
  );
};

export default FitModel;
