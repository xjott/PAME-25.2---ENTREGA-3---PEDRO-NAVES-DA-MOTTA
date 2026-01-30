<<<<<<< HEAD
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

var links = [

{ href:"/", label:"Home"},
{ href:"/eventos", label:"Lista de Eventos"},
{href:"/ingressos", label:"Meus Ingressos"},
{href:"/perfil", label: "Perfil"},

]

export default function Sidebar(){

    const pathname = usePathname();

    return(
        <aside className="sidebar">
            <div className = "sidebarBrand">
                <div className="brandTitle">Plataforma</div>
                <div className="brandSub">Eventos & Ingressos</div>
            </div>

        





        </aside>
    )
}
=======
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
>>>>>>> 0861bafa27a2afc236e9a29d1e89f53a44d13101
