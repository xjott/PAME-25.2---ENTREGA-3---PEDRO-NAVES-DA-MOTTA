import Link from "next/link";
import eventos from "./lib/eventos"

export default function EventosPage() {
  return (
    <div className="page">
      <div className="pagetitle">Lista de Eventos</div>

      <div className="grid">
        {eventos.map((evento:any) => (
          <Link key={evento.id} className="eventCard" href={`/eventos/${evento.id}`}>
            <img className="cardimg" src={evento.imagem} alt={evento.nome} />
            <div className="cardbody">
              <div className="cardtitle">{evento.nome}</div>
              <div className="cardmeta">
                {evento.data} • {evento.horario}
              </div>
              <div className="cardprice">A partir de R$ {evento.valorInicial}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
