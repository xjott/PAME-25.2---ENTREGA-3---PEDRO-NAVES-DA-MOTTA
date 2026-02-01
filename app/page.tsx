import Link from "next/link";
import { eventos } from "./lib/eventos";

// como eu guardei todos os eventos em uma array, eu vou manipular essa array para obter meus destaques e prox eventos, que são os dois caras que tem que aparecer na Home page do site

export default function HomePage(){
    const destaques = eventos.filter((evento)=> evento.destaque);
    const proximos = eventos.slice(0,3);

    //preciso fazer duas coisas na home, a seção de destaques e a sessão de próximos eventos

    // section e depois div nas seções
    
      return (
    <div className="page">
      <section className="banner">
        <div className="bannertitle">Destaques da Semana</div>
        <div className="destaques">
          {destaques.map((evento) => (
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

      {/* primeiro uma div geral, depois uma seção pras duas e por fim colocar os detalhes do folder em si, fiz isso tanto para os destaques da semana quanto para os próximos eventos */}

      <section className="section">
        <div className="sectiontitle">Próximos Eventos</div>

        <div className="grid">
          {proximos.map((evento) => (
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

      {/* por fim, fazer um footer pra página */}

      <footer className="footer">
        <div>Contato: contato@cristinaeventos.com</div>
        <div>Localização: Av. Fluxo, 456 — Rio de Janeiro</div>
      </footer>
    </div>
  );
}

