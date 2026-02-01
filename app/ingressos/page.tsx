import TicketCard from "../../components/TicketCard";
import ingressos from "../lib/ingressos";

// fazer a página de ingressos

export default function IngressosPage(){
  return(
    <div className="pagina">
      <header className="header">
        <h1 className="titulo">Meus ingressos</h1>
        <p className="subtitulo">Visualizar ingressos adquiridos</p>
      </header>

      {/* feito o header da página, fazer agora o body dela*/}

      {/* tudo que eu vou fazer é dar map no ingresso e mostrar na tela */}

      <section className="section">
        <div className="grid">
          {ingressos.map((ingresso)=>(
            <TicketCard key={ingresso.id} ingresso={ingresso}></TicketCard>
          ))}
        </div>
      </section>
    </div>
  )
}