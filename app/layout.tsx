import Sidebar from "../components/Sidebar";
import "./globals.css";
import { title } from "process";

export const metadata = {
  title: "Plataforma de Eventos",
  description: "Eventos, ingressos digitais e acesso por catracas inteligentes.",
};

export default function RootLayout({
    children,
}:
{
    children: React.ReactNode
}) {
    return(
        <html lang = "pt-br">
            <body>
                <div className = "layout">
                    <Sidebar />
                    <main className="conteúdo">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}