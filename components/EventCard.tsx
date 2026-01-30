import Link from "next/link";
import type { Evento } from "@/app/lib/types";

type Props = {
    evento: Evento;
    variante?: "grid" | "horizontal";
};

export default function EventCard({
    evento,variante = "grid"}: Props){
    return(
        <article className={variante === "horizontal" ? "card cardHorizontal": "card"}>
        </article>
    )
    }