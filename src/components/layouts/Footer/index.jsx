import { motion } from "motion/react";
import { entryAnimation } from "../../../constants/animations";

const Footer = () => {
  return (
    <motion.section
      className="bg-6 text-white"
      variants={entryAnimation()}
      initial="from_bottom"
      whileInView="default">
      {/* Container Principal */}
      <div className="customContainer">
        <div className="flex flex-wrap justify-between gap-8 ">
          {/* Coluna 1 - Sobre a Empresa */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold">
              <span>MEDDFITNESS</span>
            </h2>
            <p className="mt-2 text-gray-300 text-sm">
              Conectando saúde e desempenho físico. Nossa missão é oferecer
              soluções fitness baseadas em evidências médicas para otimizar sua
              qualidade de vida.
            </p>
          </div>

          {/* Coluna 2 - Serviços */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Avaliação Física Médica
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Treinos Personalizados
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Nutrição Esportiva
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Fisioterapia Esportiva
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">
                  Suplementação Guiada
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <p className="mt-2 text-sm text-gray-300">
              📍 Av. Saúde, 123 - São Paulo, SP
            </p>
            <p className="text-sm text-gray-300">📞 (11) 98765-4321</p>
            <p className="text-sm text-gray-300">📧 contato@meddfitness.com</p>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-300 hover:text-gray-400">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                📷 Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400">
                🎥 YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Linha Divisória */}
      <hr className="border-4 " />

      {/* Direitos Autorais */}
      <div className="text-center text-sm text-gray-400 m-6">
        © 2025 MedDFitness. Todos os direitos reservados.
      </div>
    </motion.section>
  );
};

export default Footer;
