import EventCard from "../../components/EventCard";
import eventos from "../lib/eventos";

export default function EventosPage(){
  return(
    <div className="pagina">
      <header className="header">
        <h1 className="titulo">
          Lista de Eventos
        </h1>
        <p className="subtitulo">Listagem completa dos eventos disponiveis</p>
      </header>

      {/* listar todos os eventos  */}

      <section className="section">
        <div className="grid">
          {eventos.map((evento)=>
          (<EventCard key={evento.id} evento={evento}></EventCard>))}
        </div>
      </section>
    </div>
  )
}