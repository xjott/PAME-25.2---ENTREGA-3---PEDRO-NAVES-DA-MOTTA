
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
