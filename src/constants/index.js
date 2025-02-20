import Turma from "../pages/Turma";
import GarotaMegaFitness from "../pages/GarotaMegaFitness";
import IfbbAcademy from "../pages/IfbbAcademy";
import IfbbBrasil from "../pages/IfbbBrasil";
import IfbbPro from "../pages/IfbbPro";
import MeddEventos from "../pages/MeddEventos";
import MeddFitness2025 from "../pages/MeddFitness2025";
import PodcastMaromba from "../pages/PodcastMaromba";
import GuiaDoSite from "../pages/GuiaDoSite";

import Logo from "../assets/images/Logo.svg"

export const navegation = [
  {
    id: "0",
    title: "TURMA",
    url: "turma",
    element: Turma,
  },
  {
    id: "1",
    title: "MEDDEVENTOS",
    url: "medd_eventos",
    element: MeddEventos,
  },
  {
    id: "2",
    title: "MEDDFITNESS 2025",
    url: "meddfittnes_2025",
    element: MeddFitness2025,
  },
  {
    id: "3",
    title: "IFBB ACADEMY",
    url: "ifbb_academy",
    element: IfbbAcademy,
  },
  {
    id: "4",
    title: "IFBB PRO",
    url: "ifbb_pro",
    element: IfbbPro,
  },
  {
    id: "5",
    title: "IFBB BRASIL STORE",
    url: "ifbb_brasil_store",
    element: IfbbBrasil,
  },
  {
    id: "6",
    title: "GAROTA MEGAFITNESS",
    url: "garota_megafittnes",
    element: GarotaMegaFitness,
  },
  {
    id: "7",
    title: "PODCAST MAROMBA",
    url: "podcast_maromba",
    element: PodcastMaromba,
  },
  {
    id: "8",
    title: "GUIA",
    url: "guia",
    element: GuiaDoSite,
  },

];
export const images=[
    {
        id:"0",
        name:"MeddFitness Logo",
        url:Logo
    }
]