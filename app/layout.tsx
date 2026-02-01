// agora que eu fiz os componentes da home em si, vou fazer o layout geral da página

import type { Metadata } from 'next';
import "./globals.css";
import Sidebar from "../components/Sidebar";

// lembrete: pesquisar como faz um setup básico de layout pra fazer esse código aqui

export const metadata: Metadata = {
  title: "Plataforma de Eventos",
  description: "Eventos, detalhes e ingressos digitais",
};

// fazendo a raiz do layout

export default function RootLayout({
  children}: {children: React.ReactNode}
){
  <html lang = "pt-br">
    <body>
      <div className='appShell'>
        <Sidebar></Sidebar>
        <main className='appMain'>{children}</main>
      </div>
    </body>
  </html>
};