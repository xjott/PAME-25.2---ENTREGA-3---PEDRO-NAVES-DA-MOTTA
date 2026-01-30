import Link from "next/link";
import { eventos } from "../eventos";
// primeira coisa feita no return da função: o banner
// 
export default function Home(){
    var destaques = eventos.filter((evento) => evento.destaque);
    var proximos = eventos.slice(0,3);

    return(
        <div className="page">
            <section className="banner">
            <div className="titulo-do-banner">Destaques da Semana</div>

            <div className="destaques">
            {destaques.map((evento)=> (
                <Link key={evento.id} className="destaqueCard" href={`/eventos/${evento.id}`}>
                    <img className="cardimg" src={evento.imagem} alt={evento.nome}></img>
                    <div className="cardbody">
                    <div className="cardtitle">
                </Link>
            ))}
            </section>
        </div>
    )
}