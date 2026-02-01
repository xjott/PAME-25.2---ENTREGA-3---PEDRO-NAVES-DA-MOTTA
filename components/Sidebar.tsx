"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/eventos", label: "Lista de Eventos" },
  { href: "/ingressos", label: "Meus Ingressos" },
  { href: "/perfil", label: "Perfil" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebarBrand">
        <div className="brandTitle">Plataforma</div>
        <div className="brandSub">Eventos • Ingressos</div>
      </div>

      <nav className="sidebarNav">
        {links.map((item) => {
          const ativo = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={ativo ? "sidebarLink active" : "sidebarLink"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="sidebarFooter">
        <div className="smallMuted">Simulacao de area logada</div>
      </div>
    </aside>
  );
}
