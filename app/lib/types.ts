export type Evento = {
  id: string;
  titulo: string;
  imagem: string;
  data: string;      // "2026-02-10"
  horario: string;   // "22:00"
  precoInicial: number;
  classificacao: string; // "18+" etc
  sinopse: string;
  destaque?: boolean;
};

export type Ingresso = {
  id: string;
  eventoId: string;
  eventoTitulo: string;
  data: string;
  horario: string;
  setor: string;
  codigo: string; // simulacao de QR/codigo
};
