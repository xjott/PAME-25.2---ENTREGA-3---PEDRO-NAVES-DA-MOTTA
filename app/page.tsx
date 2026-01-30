import Link from "next/link";
import {eventos} from "./lib/eventos"

export default function HomePage() {
  const destaques = eventos.filter((evento: any) => evento.destaque);
  const proximos = eventos.slice(0, 3);

  return (
    <div className="page">
      <section className="banner">
        <div className="bannertitle">Destaques da Semana</div>

        <div className="destaques">
          {destaques.map((evento: any) => (
            <Link key={evento.id} className="destaqueCard" href={`/eventos/${evento.id}`}>
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
      </section>

      <section className="section">
        <div className="sectiontitle">Próximos Eventos</div>

        <div className="grid">
          {proximos.map((evento: any) => (
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
      </section>

      <footer className="footer">
        <div>Contato: contato@cristinaeventos.com</div>
        <div>Localização: Av. Exemplo, 123 — Rio de Janeiro</div>
      </footer>
    </div>
  );
}
