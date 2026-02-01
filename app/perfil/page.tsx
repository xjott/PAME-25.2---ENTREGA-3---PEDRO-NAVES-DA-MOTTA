export default function PerfilPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Perfil</h1>
        <p className="pageSubtitle">Pagina simples (simulacao)</p>
      </header>

      <section className="section">
        <div className="card">
          <div className="cardBody">
            <h2 className="sectionTitle">Usuario</h2>
            <p className="text">Nome: Cliente Exemplo</p>
            <p className="text">Email: cliente@exemplo.com</p>

            <div className="cardActions">
              <button className="btn btnPrimary" type="button" disabled>
                Editar (visual)
              </button>
              <button className="btn btnGhost" type="button" disabled>
                Sair (visual)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
