import eventos from "./lib/eventos"

export default function IngressosPage() {
  const ingressosSimulados = [eventos[0], eventos[1]];

  return (
    <div className="page">
      <div className="pagetitle">Meus Ingressos</div>
      <div className="note">
        Simulação: usuário logado visualizando ingressos adquiridos.
      </div>

      <div className="grid">
        {ingressosSimulados.map((evento) => (
          <div key={evento.id} className="ticketCard">
            <div className="tickettitle">{evento.nome}</div>
            <div className="ticketmeta">
              {evento.data} • {evento.horario}
            </div>
            <div className="ticketcode">QR-CODE: #SIMULADO-{evento.id}A9</div>
          </div>
        ))}
      </div>
    </div>
  );
}
