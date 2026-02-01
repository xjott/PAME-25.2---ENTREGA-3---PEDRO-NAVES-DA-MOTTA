import type { Ingresso } from "./types";


// fazer uns ingressos fakes

const ingressos: Ingresso[] = [
  {
    id: "t-001",
    eventoId: "festival-cristina",
    eventoTitulo: "Cristina Festival",
    data: "2026-02-10",
    horario: "22:00",
    setor: "Pista",
    codigo: "NNF",
  },
  {
    id: "t-002",
    eventoId: "cristina-live",
    eventoTitulo: "Cristina Live Experience",
    data: "2026-02-14",
    horario: "20:30",
    setor: "Camarote",
    codigo: "CLE",
  },
];

export default ingressos;
