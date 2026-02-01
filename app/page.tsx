import EventCard from "../components/EventCard";
import { destaquesDaSemana } from "./lib/eventos";
import { proximosEventos } from "./lib/eventos";
// importando as funções que eu vou usar

// começar a fazer a home
export default function HomePage(){
  const destaques = destaquesDaSemana();
   const proximos = proximosEventos(6);

     return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Home</h1>
        <p className="pageSubtitle">Experiencias imersivas • compra e visualizacao de ingressos</p>
      </header>

      {/* fazendo o titulo da home */}

      <section className="section">
        <div className="header">
          <h2 className="titulo">Destaques da Semana</h2>
        </div>

        {/* fazer uma div com tudo que vai estar dentro do meu banner , os destaques vão estar em banner*/}

        <div className="banner">
            <div className="bannerGrid">
              {destaques.map((evento) => (
                <div key={evento.id} className="bannerItem">
                  <img className="bannerImagem" src={evento.imagem} alt={evento.titulo} />
                  <div className="bannerOverlay">
                    <div className="bannerTitle">{evento.titulo}</div>
                    <div className="bannerMeta">
                      {evento.data} • {evento.horario} • a partir de R$ {evento.precoInicial}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* fazer agora os próximos eventos, que vão estar na horizontal e em menor destaque na página */}

      <section className="section">
        <div className="header">
          <h2 className="titulo">Proximos Eventos</h2>
        </div>

        {/* achar os eventos e colocar eles na lista horizontal */}
        <div className="horizontalList">
          {proximos.map((evento) => (
            <div key={evento.id} className="horizontalItem">
              <EventCard evento={evento} variante="horizontal" />
            </div>
          ))}
        </div>
      </section>

      {/* fazendo o rodapé: uma div com os elementos de texto */}

      <footer className="footer">
        <div className="footerGrid">
          <div>
            <div className="footerTitle">Contato</div>
            <div className="smallMuted">contato@espaco.com</div>
            <div className="smallMuted">(21) 0800-000</div>
          </div>
          <div>
            <div className="footerTitle">Localizacao</div>
            <div className="smallMuted">Rua FLuxo, 6767 • Centro • RJ</div>
            <div className="smallMuted">Acesso por catracas inteligentes</div>
          </div>
          <div>
            <div className="footerTitle">Atalhos</div>
            <div className="smallMuted">Home • Eventos • Ingressos • Perfil</div>
          </div>
        </div>
      </footer>
    </div>
  );

}