import Link from "next/link";
/* vou colocar os links da sidebar em uma array */
const links = [
  { href: "/", label: "Home" },
  { href: "/eventos", label: "Lista de Eventos" },
  { href: "/ingressos", label: "Meus Ingressos" },
  { href: "/perfil", label: "Perfil" },
];


// aí aqui vai a sidebar em si
export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="brandDaSidebar">
                {/* aqui é como se fosse o título da sidebar*/}
                <div className="logo">EVENTOS</div>
                <div className="tag">Plataforma Web</div>
            </div>
            {/* ai aqui eu vou colocar os links que eu declarei lá em cima */}
            <nav className="navegação">
                {links.map((item)=>(
                    <Link key={item.href} className="linksDaNavegacao" href="/">{item.label}</Link>
                ))}
            {/* observação pro usuário */}
            <div className="sidebarFoot">
                <div className="sidebarFixa">
                    <div className="navegar">
                    Navegação lateral obrigatória: Home, Lista de Eventos, Meus Ingressos e Perfil.
                    </div>
                </div>
            </div>
            </nav>
        </aside>
    )
}
