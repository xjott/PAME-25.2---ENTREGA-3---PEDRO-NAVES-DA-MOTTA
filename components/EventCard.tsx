import Link from "next/link";
import { Evento } from "../app/lib/types";

type Props = {
    evento: Evento;
    variante?: "grid" | "horizontal";
};

export default function EventCard({evento, variante = "grid"}:Props){
  return(
    <article className={variante === "horizontal" ? "card cardHorizontal" : "card"}>
      <div className="cardImageMap">
        {/* usando uma img simples pro card */}
        <img className="cardImagem" src = {evento.imagem} alt = {evento.titulo}></img>
      </div>
    {/* tá feito, é como se fosse o header do card */}

      <div className="cardbody">
        {/* agora, fazer o body do card*/}

        <h3 className="tituloCard">{evento.titulo}</h3>
        <div className="cardMeta">
          <span>{evento.data}</span>
          <span>.</span>
          <span>{evento.horario}</span>
        </div>

        <div className="cardPreco">
          A partir de R$ {evento.precoInicial}
        </div>

        {/* agora, fazer as ações que o usuário vai ter com o card */}

        <div className="cardActions">
          <Link className="btn" href = {`/eventos/${evento.id}`}>Ver detalhes</Link> {/* voltar aqui depois, tá dando erro esse ver detalhes */}

          <button className="btn" type="button">Comprar</button>
        </div>
      </div>
    </article>
  )
}
  