<<<<<<< HEAD
import type { Evento } from "./types";

const eventos: Evento[] = [
    {
        id:"Forza",
        titulo: "Festival horizon",
        imagem: "https://static.wikia.nocookie.net/liberproeliis/images/f/f4/Rick_Sanchez_C-137_dimension_preview.png/revision/latest?cb=20231022133205&path-prefix=pt-br",
        data: "10/02/2026",
        horario: "22:00",
        precoInicial: 80,
        classificacao: "18+",
        sinopse: "lorem ipsum",
        destaque: true
    },

    {
        id:"tardezinha",
        titulo: "Tardezinha",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxgaeI9XfzT8qdWhYYr0I5b3G3E78q2P1mA&s",
        data: "12/02/2026",
        horario:"14:00",
        precoInicial: 90,
        classificacao:"18+",
        sinopse:"lorem ipsum",
        destaque:false
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
];

=======
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
    imagem: "https://media.licdn.com/dms/image/v2/C560BAQHpcIYLsiM75A/company-logo_200_200/company-logo_200_200/0/1630642816483/tiny_capital_logo?e=2147483647&v=beta&t=eIkNoKq2Jm5gdxxwAwkWCBUF9MDjRMB0gmOzb15ew1Y",
    sinopse: "sinopse",
    classificacao:"18 anos",
    destaque: true,
},


]
>>>>>>> 0861bafa27a2afc236e9a29d1e89f53a44d13101
