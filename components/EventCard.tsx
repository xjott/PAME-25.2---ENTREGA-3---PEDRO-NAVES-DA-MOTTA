import Link from "next/link";
import { Evento } from "../app/lib/types";
type Props = {
  evento: Evento;
  variante?: "grid" | "horizontal";
};

export default function EventCard({ evento, variante = "grid" }: Props) {
  return (
    <article className={variante === "horizontal" ? "card cardHorizontal" : "card"}>
      <div className="cardImageWrap">
        {/* usando img simples pra kickstart */}
        <img className="cardImage" src={evento.imagem} alt={evento.titulo} />
      </div>

      <div className="cardBody">
        <h3 className="cardTitle">{evento.titulo}</h3>

        <div className="cardMeta">
          <span>{evento.data}</span>
          <span>•</span>
          <span>{evento.horario}</span>
        </div>

        <div className="cardPrice">A partir de R$ {evento.precoInicial}</div>

        <div className="cardActions">
          <button className="btn">Favoritar</button>
          <Link href="/informacoes" className="btn">
            Ver detalhes
            </Link>
        <button className="btn" type="button">
            Comprar (visual)
          </button>
        </div>
      </div>
    </article>
  );
}
