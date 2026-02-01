// fazer o perfil do usuário, vai ser simples, então um arquivo só should do the trick

export default function PerfilPage(){
  return(
    <div className="pagina">
      <header className="header">
        <h1 className="titulo">Perfil</h1>
        <p className="subtitulo">Página </p>
      </header>

{/* não precisei organizar tanto quanto nas outras páginas devido ao fato de que não há uso de variável aqui, não importo nada de outros files */}

    <section className="section">
      <div className="card perfilCard">
        <div className="cardBody perfilBody">
          <h2 className="titulosecao">Usuário</h2>
          <div className="texto">Nome: Cristina</div>
          <div className="texto">email : Cristina@exemplo.com</div>

{/* ações do usuário (para efeito visual apenas) */}

      <div className="acoesCard">
        <button className="btn btnprimary">
        Editar
        </button>
        <button className="btn btnsecondary">
          Sair
      </button>
      </div>
        </div>
      </div>
    </section>
    </div>
  )
}