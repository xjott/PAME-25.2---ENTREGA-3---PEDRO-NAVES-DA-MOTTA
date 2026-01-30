import Link from "next/link";
import type { Evento } from "@/app/lib/types";

type Props = {
    evento: Evento;
    variante?: "grid" | "horizontal";
};

export default function EventCard({
    evento,variante = "grid"}: Props){
    return(
        <article className={variante === "horizontal" ? "card cardHorizontal": "card"}>
            <div className="cardImage|Wrap">
            <img className="cardimage" src = {evento.imagem} alt = {evento.titulo} >
            </img>
            </div>

            <div className="cardBody">
            <h3 className="cardTitle">{evento.titulo}</h3>

            <div className="cardMeta">
                <span>{evento.data}</span>
                <span>.</span>
                <span>{evento.horario}</span>
            </div>

            <div className="cardPrice">A partir de R$ {evento.precoInicial}</div>

            <div className="cardActions">
            <Link className="btn btnGhost" href={`/eventos/${evento.id}`}
            >Ver detalhes
            </Link>
            <button className="btn btnPrimary" type = "button" disabled>
                Comprar
            </button>
            </div>
            </div>
        </article>
    );
    }

