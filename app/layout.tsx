
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
                    </div>
                    </body>
                    </html>
    )
}
