import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul className="flex p-10" >
                <li className="p-2">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/cars">
                        Cars
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/drivers">Drivers</Link>
                </li>
                <li className="p-2">
                    <Link href="/race">
                        Race
                    </Link>
                </li>

            </ul>
        </nav>
    );
}