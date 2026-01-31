import type { Metadata } from 'next';
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { defaultConfig } from 'next/dist/server/config-shared';
// importar os dados que eu vou usar (lembrar disso nos próximos)


// colocar o titulo e descrição
export const metadata: Metadata = {
    title: "Plataforma de Eventos",
    description: "Eventos, ingressos digitais e acesso por catracas inteligentes."
};

// setar o layout raiz do site
export default function RootLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        <html lang="pt-br">
            <body>
                <div className='layout'>
                    <Sidebar></Sidebar>
                    <main className='conteudo'>{children}</main>
                </div>
            </body>
        </html>
    );
}