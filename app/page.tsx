
// importar as funcionalidades que eu vou usar
import Link from "next/link";
import EventCard from "@/components/EventCard";
import { destaquesDaSemana } from "./lib/eventos";
import { proximosEventos } from "./lib/eventos";

// vou começar fazendo só a home
export default function HomePage() {
  const destaques = destaquesDaSemana();
  const proximos = proximosEventos(6);
// header
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Home</h1>
        <p className="pageSubtitle">
          Acompanhe a programacao, veja detalhes e simule a compra de ingressos digitais.
        </p>
      </header>
    {/* agora saindo do header */}
      {/* Destaques da Semana */}
      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Destaques da Semana</h2>
          <span className="smallMuted">banner</span>
        </div>
      {/* Fazendo um div para os banners do destaques da semana*/}
        <div className="banner">
          {destaques.length === 0 ? (
            <div className="empty">Sem destaques no momento.</div>
          ) : (
            <div className="bannerGrid">
              {destaques.map((evento) => (
                <Link key={evento.id} href={`/eventos/${evento.id}`} className="bannerItem">
                  <img className="bannerImage" src={evento.imagem} alt={evento.titulo} />
                  <div className="bannerOverlay">
                    <div className="bannerTitle">{evento.titulo}</div>
                    <div className="bannerMeta">
                      {evento.data} • {evento.horario} • a partir de R$ {evento.precoInicial}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/*  fazendo o mesmo para os proximos eventos */}
      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Proximos Eventos</h2>
          <span className="smallMuted">listagem horizontal</span>
        </div>

        <div className="horizontalList">
          {proximos.map((evento) => (
            <div key={evento.id} className="horizontalItem">
              <EventCard evento={evento} variante="horizontal" />
            </div>
          ))}
        </div>
      </section>

      {/* por último terminar com o footer */}
      <footer className="footer">
        <div className="footerGrid">
          <div>
            <div className="footerTitle">Contato</div>
            <div className="smallMuted">contato@espaco.com</div>
            <div className="smallMuted">(21) 99999-9999</div>
          </div>

          <div>
            <div className="footerTitle">Localizacao</div>
            <div className="smallMuted">Rua Exemplo, 123 • Centro • RJ</div>
            <div className="smallMuted">Entrada por catracas inteligentes</div>
          </div>

          <div>
            <div className="footerTitle">Links</div>
            <div className="smallMuted">Home • Lista de Eventos • Meus Ingressos • Perfil</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
