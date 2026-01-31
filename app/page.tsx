import EventCard from "../components/EventCard";
import {eventos} from "../lib/eventos";

// importando o que eu vou usar de outros files

export default function HomePage(){
  var destaques = eventos.filter((evento)=> evento.destaque); // filtrar eventos destaque da array de eventos e listar os próximos da array de eventos
  var proximosEventos = eventos.slice(0,4)


  // fazer o container 
  return(
    <div className="header">
      <h1 className="titulo">Página inicial</h1>
      <p>Compra e Venda de ingressos digitais</p>

    { /* fazer as duas seções da Home: os destaques da semana e os próximos eventos*/}

    {/* Banner: destaques da semana */}

    <section className="banner">
      <div className="bannerTexto">
        <div className="destacado">Destaque da semana</div>
        <div className="tituloDoBanner">Experiências imersivas no salão</div>
        <div className="descricao">Shows e festivais com visual e som inesquecíveis. Ingressos digitais.</div>
      </div>
    </section>

{/* display dos destaques da semana */}
    <h2 className="destaqueSemana">Destaques da semana</h2>
    <div className="grid grid-3">
      {destaques.map((evento)=>(
        <EventCard key = {evento.id} evento={evento}></EventCard>
      ))}
    </div>

{/* parte dos próximos eventos */}

    <h2 className="proximosEventos">Próximos eventos</h2>
    <div className="barraScroll">
      {proximosEventos.map((evento)=>(
        <EventCard key = {evento.id} evento={evento}></EventCard>
      ))}
    </div>

  {/* rodapé da página*/}

  <footer className="rodape">
    <div className="contato">
      Contato & Localização
    </div>
    <div className="exemplo">
      Rua das Experiências, 123 — Centro • (21) 99999-9999 • contato@eventos.com
    </div>
  </footer>
  </div>
  )
}

// fechei a home, fazer as outras partes