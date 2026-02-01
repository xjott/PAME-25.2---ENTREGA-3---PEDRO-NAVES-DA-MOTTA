import ingressos from "../app/lib/ingressos";
import { Ingresso } from "../app/lib/types";
type Props = {
  ingresso: Ingresso;
};

export default function TicketCard({ ingresso }: Props) {
  return (
    <article className="card">
      <div className="cardBody">
        <h3 className="cardTitle">{ingresso.eventoTitulo}</h3>

        <div className="cardMeta">
          <span>{ingresso.data}</span>
          <span>•</span>
          <span>{ingresso.horario}</span>
          <span>•</span>
          <span>{ingresso.setor}</span>
        </div>

        <div className="ticketCode">
          <div className="smallMuted">Codigo do ingresso</div>
          <div className="mono">{ingresso.codigo}</div>
        </div>

        <div className="cardActions">
          <button className="btn btnPrimary" type="button" disabled>
            Mostrar QR (visual)
          </button>
          <button className="btn btnGhost" type="button" disabled>
            Baixar (visual)
          </button>
        </div>
      </div>
    </article>
  );
}