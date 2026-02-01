import type { Evento } from "./types";

const eventos: Evento[] = [
  {
    id: "neon-night",
    titulo: "Neon Night Festival",
    imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80",
    data: "2026-02-10",
    horario: "22:00",
    precoInicial: 120,
    classificacao: "18+",
    sinopse:
      "Uma noite imersiva com luzes, palco 360°, e um line-up focado em sets intensos. Experiencia audiovisual pensada para o salao.",
    destaque: true,
  },
  {
    id: "cristina-live",
    titulo: "Cristina Live Experience",
    imagem: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1400&q=80",
    data: "2026-02-14",
    horario: "20:30",
    precoInicial: 90,
    classificacao: "16+",
    sinopse:
      "Show principal com performance imersiva e cenografia sincronizada. Entradas digitais integradas a catracas inteligentes.",
    destaque: true,
  },
  {
    id: "afterglow",
    titulo: "Afterglow (DJ Set)",
    imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
    data: "2026-02-21",
    horario: "23:30",
    precoInicial: 60,
    classificacao: "18+",
    sinopse:
      "Pista aberta, bass e house, com visual minimalista e laser controlado por bpm. Evento ideal para testar a experiencia do espaco.",
  },
  {
    id: "sunset-session",
    titulo: "Sunset Session",
    imagem: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
    data: "2026-03-01",
    horario: "18:00",
    precoInicial: 50,
    classificacao: "Livre",
    sinopse:
      "Fim de tarde com musica, bar e clima leve. Um formato de evento mais curto, focado em convivencia e ambientacao.",
  },
];

// depois de definir alguns eventos-exemplo, vou definir algumas funções que ele pede
export default eventos;

export function buscarEventoPorId(id:string): Evento | undefined{
  return eventos.find((evento)=> evento.id===id);
}

// essas duas funções vão ser usadas pra fazer a home page funcionar 
export function destaquesDaSemana(): Evento[]{
  return eventos.filter((evento)=> evento.destaque)
}

export function proximosEventos(limit:number): Evento[]{
  return [...eventos].slice(0, limit)
}