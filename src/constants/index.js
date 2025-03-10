// IMPORTS #############################################
import Turma from "../pages/Turma";
import GarotaMegaFitness from "../pages/GarotaMegaFitness";
import IfbbAcademy from "../pages/IfbbAcademy";
import IfbbBrasil from "../pages/IfbbBrasil";
import IfbbPro from "../pages/IfbbPro";
import MeddEventos from "../pages/MeddEventos";
import MeddFitness2025 from "../pages/MeddFitness2025";
import PodcastMaromba from "../pages/PodcastMaromba";
import GuiaDoSite from "../pages/GuiaDoSite";

import {
  PauloNetto,
  LeandroMoraes,
  DianaMonteiro,
  BetaoMonteiro,
  CassioBirque,
  defaultPerfilPhoto,
} from "../assets/Images/perfilPhoto";

import { network, books, hands, instruments } from "../assets/icons";

import {
  Logo,
  anadem,
  megafitness,
  ifbbBrasil,
  ifbbAcademy,
  vivaCare,
  universoCasuo,
  rissi,
  linkedFun,
} from "../assets/logos";

import { banner1, banner2, banner3 } from "../assets/Images/banners";

import {
  casuoAtraction1,
  casuoAtraction2,
  anatoly1,
  anatoly2,
  stevenSagal1,
  stevenSagal2,
  zeNetoCristiano1,
  zeNetoCristiano2,
} from "../assets/Images/atractions";
import {
  academias,
  boxCrossfit,
  yoga,
  pilates,
  clubeExportivo,
} from "../assets/Images/parceiros";

import {
  bikiniFitFem01,
  bikiniFitFem02,
  bodyFitFem01,
  bodyFitFem02,
  fitFem01,
  fitFem02,
} from "../assets/Images/categorias";

// LISTIS #############################################

import CarnavalDaIvete from "../assets/Images/events/CarnavalDaIvete.png";
import EventoMissFit from "../assets/Images/events/EventoMissFit.png";
import MundoPsychodelico from "../assets/Images/events/MundoPsychodelico.png";

export const events = [
  {
    id: 0,
    src: CarnavalDaIvete,
    name: "Carnaval da Ivete",
  },
  {
    id: 1,
    src: EventoMissFit,
    name: "Evento MissFit",
  },
  {
    id: 2,
    src: MundoPsychodelico,
    name: "Mundo Psychodelico",
  },
];

export const premiacoes = [
  {
    id: 0,
    title: "1º-Colocado por categoria",
    topics: [
      "Troféu IFBB – Medalha, faixa e flores",
      "Book fotográfico por agência de modelos",
      "Produtos cosméticos/suplementos",
      "Contrato de publicidade no valor de R$ 10.000,00",
    ],
  },
  {
    id: 1,
    title: "2º Colocado por Categoria",
    topics: [
      "Troféu IFBB – Medalha, faixa e flores",
      "Book fotográfico por agência de modelos",
      "Produtos cosméticos/ suplementos",
      "Contrato de publicidade no valor de R$ 5.000,00",
    ],
  },
  {
    id: 2,
    title: "3º Colocado por Categoria",
    topics: [
      "Troféu IFBB – Medalha, faixa e flores",
      "Book fotográfico por agência de modelos",
      "Produtos Belifit/ cosméticos/suplementos",
      "Contrato de publicidade no valor de R$ 3.000,00",
    ],
  },
  {
    id: 3,
    title: "4º a 6º Colocado por Categoria",
    topics: [
      "Troféu IFBB – Medalha e flores",
      "Produtos Belifit/ cosméticos/suplementos",
      "Prêmio em dinheiro no valor de R$ 1.000,00",
    ],
  },
];

export const categorias = [
  {
    id: 0,
    title: "FITNESS FEMININO",
    desc: "Este conceito foi introduzido pela IFBB no início dos anos 90, começando como competição oficial em 1996 em resposta à crescente demanda por competições para mulheres que preferem desenvolver um físico menos musculoso, mas atlético e esteticamente agradável e também mostrar seus físicos em movimento",
    images: [bikiniFitFem01, bikiniFitFem02],
  },
  {
    id: 1,
    title: "FITNESS FEMININO",
    desc: "Este conceito foi introduzido pela IFBB no início dos anos 90, começando como competição oficial em 1996 em resposta à crescente demanda por competições para mulheres que preferem desenvolver um físico menos musculoso, mas atlético e esteticamente agradável e também mostrar seus físicos em movimento",
    images: [bodyFitFem01, bodyFitFem02],
  },
  {
    id: 2,
    title: "FITNESS FEMININO",
    desc: "Este conceito foi introduzido pela IFBB no início dos anos 90, começando como competição oficial em 1996 em resposta à crescente demanda por competições para mulheres que preferem desenvolver um físico menos musculoso, mas atlético e esteticamente agradável e também mostrar seus físicos em movimento",
    images: [fitFem01, fitFem02],
  },
];

export const parceiros = [
  {
    id: 0,
    name: "ACADEMIAS",
    src: academias,
  },
  {
    id: 1,
    name: "BOX DE CROSSFIT",
    src: boxCrossfit,
  },
  {
    id: 2,
    name: "STUDIO DE YOGA",
    src: yoga,
  },
  {
    id: 3,
    name: "PSTUDIO DE PILATES",
    src: pilates,
  },
  {
    id: 4,
    name: "CLUBES ESPORTIVOS",
    src: clubeExportivo,
  },
];

export const atractions = [
  {
    id: 0,
    subTitle: "UNIVERSO CASUO",
    title: "CIRQUE DU SOLEIL",
    desc: "Espetáculo artístico criado por Marcos Casuo, ex-integrante do Cirque du Soleil, unindo música, performance e acrobacias em um show único e vibrante.",
    images: [casuoAtraction1, casuoAtraction2],
  },
  {
    id: 1,
    title: "ANATOLY",
    subTitle: "VLADIMIR SHMONDENKO",
    desc: "Atleta de fisiculturismo de renome internacional, referência em treinamento de alto rendimento e desenvolvimento muscular extremo.",
    images: [anatoly1, anatoly2],
  },
  {
    id: 2,
    title: "STEVEN SEAGAL",
    subTitle: "ATOR",
    desc: "Ator, mestre em artes marciais e ícone dos filmes de ação, conhecido por sua destreza no Aikido e por sua carreira no cinema de Hollywood.",
    images: [stevenSagal1, stevenSagal2],
  },
  {
    id: 3,
    title: "ZÉ NETO E CRISTIANO",
    subTitle: "CANTOR SERTAJEJO",
    desc: "Uma das duplas sertanejas mais populares do Brasil, conhecida por seus sucessos românticos e animados que conquistam multidões.",
    images: [zeNetoCristiano1, zeNetoCristiano2],
  },
];

export const embaixadores = [
  { id: 0, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
  { id: 1, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
  { id: 2, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
  { id: 3, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
];
export const patrocinadores = [
  { id: 0, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
  { id: 1, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
  { id: 2, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
  { id: 3, name: "XXX", src: defaultPerfilPhoto, role: " EM BREVE" },
];

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
export const palestrants = [
  {
    id: 0,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    logo: defaultPerfilPhoto,
  },
  {
    id: 1,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    logo: defaultPerfilPhoto,
  },
  {
    id: 2,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    logo: defaultPerfilPhoto,
  },
  {
    id: 3,
    title: "NOME DO PALESTRANTE",
    desc: "Tema que irá abordar e um breve resumo da sua especialidade.",
    logo: defaultPerfilPhoto,
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
    url: "/meddfitness/turma",
    element: Turma,
  },
  {
    id: "1",
    title: "MEDDEVENTOS",
    url: "/meddfitness/medd_eventos",
    element: MeddEventos,
  },
  {
    id: "2",
    title: "MEDDFITNESS 2025",
    url: "/meddfitness/meddfittnes_2025",
    element: MeddFitness2025,
  },
  // {
  //   id: "3",
  //   title: "IFBB ACADEMY",
  //   url: "/meddfitness/ifbb_academy",
  //   element: IfbbAcademy,
  // },
  // {
  //   id: "4",
  //   title: "IFBB PRO",
  //   url: "/meddfitness/ifbb_pro",
  //   element: IfbbPro,
  // },
  // {
  //   id: "5",
  //   title: "IFBB BRASIL STORE",
  //   url: "/meddfitness/ifbb_brasil_store",
  //   element: IfbbBrasil,
  // },
  {
    id: "6",
    title: "GAROTA MEGAFITNESS",
    url: "/meddfitness/garota_megafittnes",
    element: GarotaMegaFitness,
  },
  // {
  //   id: "7",
  //   title: "PODCAST MAROMBA",
  //   url: "/meddfitness/podcast_maromba",
  //   element: PodcastMaromba,
  // },
  // {
  //   id: "8",
  //   title: "GUIA",
  //   url: "/meddfitness/guia",
  //   element: GuiaDoSite,
  // },
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

export const ingressosCard = [
  { title: "Workshop de medicina Esportiva", neonWords: ["Workshop", "de"] },
  {
    title: "MegaFitness: O maior concurso fitness do Brasil",
    neonWords: ["MegaFitness:"],
  },
  {
    title: "Campeonato de Fisiculturismo com a IFBB",
    neonWords: ["Fisiculturismo"],
  },
];
export const ingressos = [
  {
    id: 0,
    title: "MEDDPOWER ",
    descs: [
      "2 dias de evento em cadeiras exclusivas em frente ao palco, ao lado das celebridades.",
      "Melhor visão do evento, com conforto e status VIP.",
    ],
    redirect: "#",
    value: 997,
  },
  {
    id: 1,
    title: "MEDDPRO",
    descs: [
      "2 dias de eventos Para quem busca conforto e exclusividade.",
      "Cadeiras mais próximas ao palco.",
    ],
    redirect: "#",
    value: 997,
  },
  {
    id: 2,
    title: "MEDDFIT",
    descs: [
      "2 dias de evento, com assento nas arquibancadas, garantindo uma visão ampla do espetáculo.",
    ],
    redirect: "#",
    value: 997,
  },
];
