
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
