export type Evento = {
    // colocar aqui os dados que vão aparecer nos banners
    id: string;
    nome: string;
    data: string;
    horario:string;
    valorInicial: number;
    imagem: string;
    sinopse: string;
    classificacao: string;
    destaque: boolean;
};

export const eventos: Evento[] = [

{
    id: "1",
    nome: "festival horizon",
    data: "10/02/2026",
    horario: "20:00",
    valorInicial: 80,
    imagem: "",
    sinopse: "sinopse",
    classificacao:"18 anos",
    destaque: true,
},


]