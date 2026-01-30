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
    imagem: "https://gdm-universal-media.b-cdn.net/racinggames/797e4afb05c95d686308906954d359fc273611aa-1280x720.png?width=1600&height=840",
    sinopse: "sinopse",
    classificacao:"18 anos",
    destaque: true,
},


]