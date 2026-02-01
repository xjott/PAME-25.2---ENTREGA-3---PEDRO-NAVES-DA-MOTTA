import { notFound } from "next/navigation";
import { buscarEventoPorId } from "../../lib/eventos";

export default function DetalhesEventoPage({ params }: { params: { id: string } }) {
  const evento = buscarEventoPorId(params.id);

  if (!evento) notFound();

  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">{evento.titulo}</h1>
        <p className="pageSubtitle">
          {evento.data} • {evento.horario} • a partir de R$ {evento.precoInicial}
        </p>
      </header>

      <section className="section">
        <div className="detailsHero">
          <img className="detailsImage" src={evento.imagem} alt={evento.titulo} />
          <div className="detailsPanel">
            <div className="pill">Classificacao: {evento.classificacao}</div>

            <h2 className="sectionTitle">Sinopse</h2>
            <p className="text">{evento.sinopse}</p>

            <div className="cardActions">
              <button className="btn btnPrimary" type="button" disabled>
                Comprar Ingresso (visual)
              </button>
              <button className="btn btnGhost" type="button" disabled>
                Ver mapa do local (visual)
              </button>
            </div>

            <div className="smallMuted">
              *Compra real nao implementada (frontend demonstrativo).
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
