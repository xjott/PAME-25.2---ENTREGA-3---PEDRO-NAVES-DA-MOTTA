import TicketCard from "@/components/TicketCard";
import ingressos from "@/lib/ingressos";

export default function IngressosPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Meus Ingressos</h1>
        <p className="pageSubtitle">Simulacao de area logada para visualizar ingressos adquiridos</p>
      </header>

      <section className="section">
        {ingressos.length === 0 ? (
          <div className="empty">Voce ainda nao comprou ingressos.</div>
        ) : (
          <div className="grid">
            {ingressos.map((ingresso:any) => (
              <TicketCard key={ingresso.id} ingresso={ingresso} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
