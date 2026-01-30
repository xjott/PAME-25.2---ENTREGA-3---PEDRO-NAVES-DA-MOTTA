<<<<<<< HEAD
import type { Metadata } from 'next';
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: "Plataforma de eventos",
    description: "Eventos, detalhes e ingressos digitais", 
};

export default function RootLayout({ children}: {children: React.ReactNode}){
    return(
        <html lang="pt-br">
            <body>
                <div className='appShell'>
                    <Sidebar/>
                    <main className='appMain'>{children}</main>
=======
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
>>>>>>> 0861bafa27a2afc236e9a29d1e89f53a44d13101
                </div>
            </body>
        </html>
    );
<<<<<<< HEAD
}

=======
}
>>>>>>> 0861bafa27a2afc236e9a29d1e89f53a44d13101
