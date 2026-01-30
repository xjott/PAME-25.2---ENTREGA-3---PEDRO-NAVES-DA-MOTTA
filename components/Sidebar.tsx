import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebarBrand">
        <div className="brandTitle">Plataforma</div>
        <div className="brandSub">Eventos • Ingressos</div>
      </div>

      <nav className="sidebarNav">
        <Link className="sidebarLink" href="/">Home</Link>
        <br></br>
        <Link className="sidebarLink" href="/eventos">Lista de Eventos</Link>
        <br></br>
        <Link className="sidebarLink" href="/ingressos">Meus Ingressos</Link>
        <br></br>
        <Link className="sidebarLink" href="/perfil">Perfil</Link>
      </nav>

      <div className="sidebarFooter">
        <div className="smallMuted">Simulacao</div>
      </div>
    </aside>
  );
}
