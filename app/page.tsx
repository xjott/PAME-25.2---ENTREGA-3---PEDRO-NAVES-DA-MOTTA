import Link from "next/link";
import { eventos } from "../eventos";

export default function Home(){
    var destaques = eventos.filter((evento) => evento.destaque);
    var proximos = eventos.slice(0,3);
// pelo commit
}