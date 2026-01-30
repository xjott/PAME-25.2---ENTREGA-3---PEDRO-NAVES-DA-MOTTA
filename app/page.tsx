import Image from "next/image";
import Link from "next/link";

export default function Home(){
    return (
        <main>
            <h1>
                Olá,mundo!
                <Link href="/users">Users</Link>
            </h1>
        </main>
    )
}

