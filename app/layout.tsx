import "./globals.css";
import Sidebar from "@/components/Sidebar";
// colocar o título e a descrição
export const metadata = {
  title: "Plataforma de Eventos",
  description: "Eventos, ingressos e experiencias imersivas",
};


// colocar o layout propriamente dito da página
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className="appShell">
          <Sidebar />
          <main className="appMain">{children}</main>
        </div>
      </body>
    </html>
  );
}
