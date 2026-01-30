import Link from "next/link";
/* fazer a sidebar */
export default function Sidebar(){
    //vou fazer uma div com as opções, e ir colocando os links pras opções
    return(
        <aside className="sidebar"> 
            <div className="brand">
                <div className="brandtitle">CRISTINA</div>
                <div className="brandusb">Eventos & Ingressos</div>    
            </div>
            <nav className="nav">
                <Link className="navlink" href="/">
                </Link>
                <Link className="navlink" href="/">
                Lista de Eventos
                </Link> 
                <Link className="navlink" href="/">
                Meus Ingressos
                </Link>
                <Link className="navlink" href ="/">
                Perfil
                </Link>
            </nav>
        </aside>
    )
}