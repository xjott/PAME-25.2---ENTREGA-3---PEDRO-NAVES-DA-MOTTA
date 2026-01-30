<<<<<<< HEAD
import EventCard from "@/components/EventCard";

import eventos, {destaquesDaSemana, proximosEventos} from "@/lib/eventos";

export default function homePage(){
  const destaques = destaquesDaSemana();
  const proximos = proximosEventos(6);

  return(
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">
          Home 
        </h1>
        <p className="pageSubtitle">Imersividade & Compra e Venda de Ingressos</p>
      </header>

      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Destaques da Semana</h2>
          <span className="smallMuted">Banner
          </span>
        </div>

      </section>

      <footer className="footer">
        <div className="footerGrid">
          <div>
            <div className="footerTitle">
              Contato
            </div>
            <div>
              <div className="smallMuted">
                contato@espaco.com
              </div>
                        
            </div>
          </div>
        </div>

      </footer>


    </div>
  );
}
=======
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
>>>>>>> 0861bafa27a2afc236e9a29d1e89f53a44d13101
