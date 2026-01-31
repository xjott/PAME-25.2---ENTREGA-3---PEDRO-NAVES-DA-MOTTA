// colocando tudo que os tipos precisam ter de acordo com o case

export type Evento = {
    id: string;
    titulo: string;
    imagem: string;
    data: string;
    horario: string;
    precoInicial: number;
    classificacao: string;
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
    codigo: string;
}