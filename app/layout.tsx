import "./globals.css";
import Sidebar from "../components/Sidebar";

// fazer a parte de layout

// pegar título e descrição
export var metadata = {
    title: "Plataforma de Eventos",
    description: "Eventos, ingressos digitais e acesso por catracas inteligentes.",  
};

// fazer a root do layout

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang = "pt-br">
            <body>
                <div className="layout">
                    <Sidebar></Sidebar>
                    <main className="conteudo">{children}</main>
                </div>
            </body>
        </html>
    );
}
