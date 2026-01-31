import Link from "next/link";
import { eventos } from "./lib/eventos";

// como eu guardei todos os eventos em uma array, eu vou manipular essa array para obter meus destaques e prox eventos, que são os dois caras que tem que aparecer na Home page do site

export default function HomePage(){
    const destaques = eventos.filter((evento)=> evento.destaque);
    const proximos = eventos.slice(0,3);

    return(
        <div className="pagina">
            <section className="banner">
                <div className="tituloBanner">
                    Destaques da Semana
                </div>
                <div className="destaques">
                    {destaques.map((evento)=>(
                        
                    ))}
                </div>
            </section>
        </div>
    )
}

