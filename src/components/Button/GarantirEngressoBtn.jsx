import { motion } from "motion/react";
import { pulseAnimation } from "../../constants/animations";
import Button from ".";

const GarantirEngressoBtn = ({ className }) => {
  return (
    <motion.div
      className={className}
      variants={pulseAnimation()}
      animate="default">
      <Button
        typeBtn="redirect"
        onClick={() => console.log('clicou em "GARANTIR O MEU INGRESSO"')}>
        <strong className="mx-15">GARANTIR O MEU INGRESSO</strong>
      </Button>
    </motion.div>
  );
};

export default GarantirEngressoBtn;
