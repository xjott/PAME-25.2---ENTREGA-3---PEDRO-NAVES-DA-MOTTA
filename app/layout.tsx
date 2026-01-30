import "./globals.css"
import Sidebar from "./components/Sidebar";

export const metadata = {
    title: "Plataforma de Eventos",
    description: "Eventos"
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