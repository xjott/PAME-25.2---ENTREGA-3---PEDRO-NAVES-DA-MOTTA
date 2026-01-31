// pesquisar sobre o TS pra fazer bem essa parte

// fazer os tipos

export type Evento = {
    id: string;
    titulo: string;
    artista: string;
    data: string;
    horario: string;
    precoInicial: string;
    classificacao: string;
    imagem:string;
    sinopse: string;
    isDestaque: boolean;
};

export const eventos = [
    {
        id: "nome do evento",
        titulo: "titulo do evento",
        artista: "artista",
        data: "data",
        horario: "horario",
        precoInicial:"preco",
        classificacao: "18",
        imagem: "imagem",
        sinopse: "sinopse",
        isDestaque:true,

    },

    {
        id: "nome do evento",
        titulo: "titulo do evento",
        artista: "artista",
        data: "data",
        horario: "horario",
        precoInicial:"preco",
        classificacao: "18",
        imagem: "imagem",
        sinopse: "sinopse",
        isDestaque:false,
    },

    {
        id: "nome do evento",
        titulo: "titulo do evento",
        artista: "artista",
        data: "data",
        horario: "horario",
        precoInicial:"preco",
        classificacao: "18",
        imagem: "imagem",
        sinopse: "sinopse",
        isDestaque:true,
    }
]