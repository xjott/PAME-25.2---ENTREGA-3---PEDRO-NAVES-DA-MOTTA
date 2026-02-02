import eventos from "../lib/eventos";

// colocar os valores que vão aparecer quando o usuário quiser ver os detalhes do evento

export default function DetalhesEventoPage() {
  const evento = eventos[0];

  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">{evento.titulo}</h1>
        <p className="pageSubtitle">
          {evento.data} • {evento.horario} • a partir de R$ {evento.precoInicial}
        </p>
      </header>

      {/* depois do header, botar o corpo do card */}

      <section className="section">
        <div className="detailsHero">
          <img className="detailsImage" src={evento.imagem} alt={evento.titulo} />

          <div className="detailsPanel">
            <div className="pill">Classificacao: {evento.classificacao}</div>

            <h2 className="sectionTitle">Sinopse</h2>
            <p className="text">{evento.sinopse}</p>

            <div className="cardActions">
              <button className="btn btnPrimary" type="button">
                Comprar Ingresso
              </button>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
}
