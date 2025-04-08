
import { Code, House, UserRound } from "lucide-react"
import { Link } from "react-router-dom"

const navLnks = [
    {
        href: "/",
        label: <House className=" text-zinc-400 hover:scale-105 duration-300 hover:drop-shadow-[0_0_5px_hsl(0,0%,50%)] " />
    },
    {
        href: "/projects",
        label: <Code className=" text-zinc-400 hover:scale-105 duration-300 hover:drop-shadow-[0_0_5px_hsl(0,0%,50%)]" />
    },
    {
        href: "/about",
        label: <UserRound className=" text-zinc-400 hover:scale-105 duration-300 hover:drop-shadow-[0_0_5px_hsl(0,0%,50%)] " />
    },
]

const NavBar = () => {


    return (
        <div className="">
            <nav className="fixed bottom-0 left-0 right-0 z-40 dark:bg-bgColor border-t border-b border-zinc-400 py-2">
                <ul className="flex items-center justify-between mx-auto max-w-screen-lg px-4">
                    {navLnks.map((lnk, i) => (
                        <Link to={lnk.href} key={i}>
                            <div className="w-full" >
                                {lnk.label}
                            </div>
                        </Link>
                        ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
