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