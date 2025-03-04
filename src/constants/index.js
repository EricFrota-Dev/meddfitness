import Turma from "../pages/Turma";
import GarotaMegaFitness from "../pages/GarotaMegaFitness";
import IfbbAcademy from "../pages/IfbbAcademy";
import IfbbBrasil from "../pages/IfbbBrasil";
import IfbbPro from "../pages/IfbbPro";
import MeddEventos from "../pages/MeddEventos";
import MeddFitness2025 from "../pages/MeddFitness2025";
import PodcastMaromba from "../pages/PodcastMaromba";
import GuiaDoSite from "../pages/GuiaDoSite";
import banner1 from "../assets/Images/banners/banner1.jpg";
import banner2 from "../assets/Images/banners/banner2.png";
import banner3 from "../assets/Images/banners/banner3.png";
import PauloNetto from "../assets/Images/perfilPhoto/PauloNetto_perfil.png";
import LeandroMoraes from "../assets/Images/perfilPhoto/LeandroMoraes_perfil.png";
import DianaMonteiro from "../assets/Images/perfilPhoto/DianaMonteiro_perfil.png";
import BetaoMonteiro from "../assets/Images/perfilPhoto/BetaoMonteiro_perfil.png";
import CassioBirque from "../assets/Images/perfilPhoto/CassioBirque_perfil.png";
import CarnavalDaIvete from "../assets/Images/events/CarnavalDaIvete.png"
import EventoMissFit from "../assets/Images/events/EventoMissFit.png"
import MundoPsychodelico from "../assets/Images/events/MundoPsychodelico.png"


export const events = [
  {
    id: 0,
    src: CarnavalDaIvete,
    name:"Carnaval da Ivete"
  },
  {
    id: 1,
    src: EventoMissFit,
    name:"Evento MissFit"
  },
  {
    id: 2,
    src: MundoPsychodelico,
    name:"Mundo Psychodelico"
  },

]
import Logo from "../assets/images/Logo.svg";

export const stafPerfilPhotos = [
  {
    id: 0,
    src: PauloNetto,
    name: "Paulo Netto",
    role: "Comissão Organizadora",
  },
  {
    id: 1,
    src: LeandroMoraes,
    name: "Leandro Moraes",
    role: "Comissão Organizadora",
  },
  {
    id: 2,
    src: CassioBirque,
    name: "Cassio Birque",
    role: "Comissão Organizadora",
  },
  {
    id: 3,
    src: DianaMonteiro,
    name: "Diana Monteiro",
    role: "Comissão Organizadora",
  },
  {
    id: 4,
    src: BetaoMonteiro,
    name: "Betão Monteiro",
    role: "Comissão Organizadora",
  },
];

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
export const images = [
  {
    id: "0",
    name: "MeddFitness Logo",
    url: Logo,
  },
];

export const banners = [
  { id: 1, src: banner1, alt: "Banner 1" },
  { id: 2, src: banner2, alt: "Banner 2" },
  { id: 3, src: banner3, alt: "Banner 3" },
];

export const ingressos = [
  { id: 1, text: "WorkShop de Medicina Esportiva" },
  { id: 2, text: "MegaFitness: O maior concurso fitness do Brasil" },
  { id: 3, text: "Campeonato de Fisiculturismo com a IFBB" },
];
