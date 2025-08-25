import Link from "next/link"
export default function Header() {
    return (
        <header className="p-6 bg-gray-100/70 w-full text-center">
            <Link href={"/"}><h1 className="h1 text-2xl">{"Joe's Hardware - Internal Catalogue"}</h1></Link>
        </header>
    )
}