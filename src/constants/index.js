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

import network from "../assets/icons/network.png";
import books from "../assets/icons/books.png";
import hands from "../assets/icons/hands.png";
import instruments from "../assets/icons/instruments.png";

import Logo from "../assets/logos/meddfitness-logo.svg";
import anadem from "../assets/logos/anadem-logo.png";
import megafitness from "../assets/logos/megafitness-logo.png";
import ifbbBrasil from "../assets/logos/ifbb-brasil-logo.png";
import ifbbAcademy from "../assets/logos/ifbb-academy-logo.png";
import vivaCare from "../assets/logos/viva-care-logo.png";
import universoCasuo from "../assets/logos/universo-casuo-logo.png";
import rissi from "../assets/logos/rissi-logo.png";
import linkedFun from "../assets/logos/linked-fun-logo.png";

export const echosystem = [
  {
    id: 0,
    title: "CONCURSO DE GAROTA MEGAFIT",
    desc: "promovendo a representatividade e o empoderamento feminino no fitness.",
    logo: megafitness,
  },
  {
    id: 1,
    title: "IFBB",
    desc: "Campeonatos de fisiculturismo regionais, estaduais, brasileiro e sulamenticano.",
    logo: ifbbBrasil,
  },
  {
    id: 2,
    title: "IFBB ACADEMY",
    desc: "Cursos de MBA/Tecnologo.",
    logo: ifbbAcademy,
  },
  {
    id: 3,
    title: "VIVA CARE",
    desc: "Banco para Antecipação de recebíveis médicos.",
    logo: vivaCare,
  },
  {
    id: 4,
    title: "ANADEM",
    desc: "promovendo a representatividade e o empoderamento feminino no fitness.",
    logo: anadem,
  },
  {
    id: 5,
    title: "UNIVERSO CASUO",
    desc: "Campeonatos de fisiculturismo regionais, estaduais, brasileiro e sulamenticano.",
    logo: universoCasuo,
  },
  {
    id: 6,
    title: "RISSI",
    desc: "Cursos de MBA/Tecnologo.",
    logo: rissi,
  },
  {
    id: 7,
    title: "LINKED FUN",
    desc: "Banco para Antecipação de recebíveis médicos.",
    logo: linkedFun,
  },
];

export const projetoMeddfitness = [
  {
    id: 0,
    title: "NETWORK",
    desc: "Congregar, estimular e apoiar o intercâmbio de informação atualizada e conhecimento técnic científico na área de medicina esportiva, integrada às diretrizes das políticas de promoção do esporte saudável e adequada, e de segurança física e mental.",
    icon: network,
  },
  {
    id: 1,
    title: "EDUCAÇÃO",
    desc: "Gerar oportunidadede aperfeiçoamento profissional e promover a divulgação de estudos e avanços científicos a fim de cooperar para a melhora dos serviços de saúde e do indivíduo com foco no fisiculturismo;",
    icon: books,
  },
  {
    id: 2,
    title: "NEGÓCIOS",
    desc: "Facilitar a troca de experiências e ampliar o networking entre profissionais da medicina esportiva no Brasil e em países ibero-americanos.",
    icon: hands,
  },
  {
    id: 3,
    title: "Entretenimento",
    desc: "Proporcionar momentos inesquecíveis através de eventos Espetáculos em formato de feiras ou corporativos.",
    icon: instruments,
  },
];

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
