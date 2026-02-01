import EventCard from "../../components/EventCard";
import eventos from "../lib/eventos";
export default function EventosPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Lista de Eventos</h1>
        <p className="pageSubtitle">Listagem completa dos eventos disponiveis</p>
      </header>

      <section className="section">
        <div className="grid">
          {eventos.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))}
        </div>
      </section>
    </div>
  );
}
