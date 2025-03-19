import GarantirEngressoBtn from "@/components/ui/Button/GarantirEngressoBtn";
import GradientCard from "@/components/ui/GradientCard";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import localImg from "@/assets/images/Uncategorized/local.jpg";

const Local = () => {
  return (
    <div className="customContainer flex flex-col md:flex-row text-center gap-10">
      <div className="flex-1 flex justify-center items-center">
        <motion.img
          src={localImg}
          alt="local"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-10">
        <div>
          <h1>
            <span className="neon">25 E 26 DE JULHO DE 2025</span>
          </h1>
          <h2>LOCAL: CENTRO REGIONAL DE EVENTOS</h2>
        </div>
        <div>
          <GradientCard bordered>
            <div className="flex">
              <div>
                <span>
                  <FaMapMarkerAlt className="w-12 h-12" />
                </span>
              </div>
              <div className="ml-8">
                <p>
                  Av. José Munia, 5650 - Nova Redentora, São José do Rio Preto -
                  SP, 15090-500
                </p>
              </div>
            </div>
          </GradientCard>
        </div>
        <GarantirEngressoBtn className="flex justify-center" />
      </div>
    </div>
  );
};

export default Local;
