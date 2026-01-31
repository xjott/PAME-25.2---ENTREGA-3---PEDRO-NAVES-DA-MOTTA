import Link from "next/link";

// próximo passo : fazer a sidebar 


// fazer meio que o titulo da sidebar
export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="branding">
                <div className="tituloDaBrand">
                    CRISTINA
                </div>
                <div className="subTituloDaBrand">
                    EVENTOS & INGRESSOS
                </div>
            </div>

{/* fazer os elementos da sidebar */}

        <nav className="navegacao">
            <Link href="/" className="linkDeNavegacao">
            Home
            </Link>
            
            <Link href="/" className="linkdeNavegacao"
            >Lista de Eventos
            </Link>

            <Link href="/" className="linkdeNavegacao">
            Meus Ingressos
            </Link>

            <Link href="/" className="linkdeNavegacao">
            Perfil
            </Link>
        </nav>
        </aside>
    );
}

// coloquei os links para redirecionar para as páginas 