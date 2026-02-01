import { eventos } from "../../lib/eventos";

export default function EventoDetalhesPage({
  params,
}: {
  params: { id: string };
}) {
  const evento = eventos.find((item) => item.id === params.id);

// achando o evento pelo ID

  return (
    <div className="page">
      <div className="pagetitle">{evento.nome}</div>
      {/* aqui, vou colocar os detalhes do evento */}

      <img className="heroimg" src={evento.imagem} alt={evento.nome} />

      <div className="details">
        <div className="detailrow">
          <span className="label">Data:</span> {evento.data}
        </div>
        <div className="detailrow">
          <span className="label">Horário:</span> {evento.horario}
        </div>
        <div className="detailrow">
          <span className="label">Classificação:</span> {evento.classificacao}
        </div>

        <div className="synopse">
          <div className="label">Sinopse</div>
          <p>{evento.sinopse}</p>
        </div>

        {/* declarar a função de comprar o ingresso */}

        <button className="buybutton" type="button">
          Comprar Ingresso
        </button>
      </div>
    </div>
  );
}
