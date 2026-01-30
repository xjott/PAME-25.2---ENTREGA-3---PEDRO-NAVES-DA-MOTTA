import type { Ingresso } from "@/app/lib/types";

type Props = {
    ingresso: Ingresso;
}

export default function TicketCard({
    ingresso}: Props){
        return(
            <article className="card">
                <div className="cardBody">
                    <h3 className="cardTitle">{ingresso.eventoTitulo}</h3>
                <div className="cardMeta">
                    <span>{ingresso.data}</span>
                    <span>.</span>
                    <span>{ingresso.horario}</span>
                    <span>.</span>
                    <span>{ingresso.setor}</span>
                </div>
                </div>

                <div className="cardActions">
                    
                </div>

            </article>
        )
    }

