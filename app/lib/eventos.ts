export type Evento = {
  id: string;
  nome: string;
  data: string;
  horario: string;
  valorInicial: number;
  imagem: string;
  sinopse: string;
  classificacao: string;
  destaque: boolean;
};

export const eventos: Evento[] = [
  {
    id: "1",
    nome: "Festival Neon Night",
    data: "10/02/2026",
    horario: "22:00",
    valorInicial: 120,
    imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    sinopse:
      "Uma noite imersiva com palco 360°, luzes e som de alta intensidade. Prepare-se para uma experiência tipo festival.",
    classificacao: "18 anos",
    destaque: true,
  },
  {
    id: "2",
    nome: "Show: Aurora Live",
    data: "14/02/2026",
    horario: "20:30",
    valorInicial: 90,
    imagem: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    sinopse:
      "Show com visual cinematográfico, telões e efeitos sincronizados. Setlist completo + momentos especiais.",
    classificacao: "16 anos",
    destaque: true,
  },
  {
    id: "3",
    nome: "Baile Nostalgia",
    data: "21/02/2026",
    horario: "23:00",
    valorInicial: 60,
    imagem: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
    sinopse:
      "Festa com hits de várias eras, pista temática e ativações. Perfeito pra ir em grupo.",
    classificacao: "18 anos",
    destaque: false,
  },
];
