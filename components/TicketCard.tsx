import ingressos from "../app/lib/ingressos";
import { Ingresso } from "../app/lib/types";
// tipando
type Props = {
  ingresso: Ingresso;
}

// fazendo o layout do ingresso
export default function TicketCard({ingresso}: Props){
  return(
    <article className="card">
      <div className="cardBody">
        <h3 className="cardTitulo">
          {ingresso.eventoTitulo}
        </h3>

      <div className="cardMeta">
        <div>{ingresso.data}</div>
        <span> {ingresso.setor}</span>

      <div className="tcodigo">
        
        <div className="code">{ingresso.codigo}</div>
      </div>

      <div className="cardActions">
        <button className="btn btnprimary" type="button">Código (Visual)</button>
      </div>
        <button className="btn btnsecundary" type="button">Baixar (Visual)</button>
      </div>
      </div>
    </article>
  );
}


// coloquei todas as coisas que o card precisa ter, separado em um meta, o código, e as ações do card, esse foi o layout do ingresso