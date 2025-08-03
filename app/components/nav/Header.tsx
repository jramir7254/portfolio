import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 10); // triggers when not at very top
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-10 w-full p-6 px-24 flex justify-between font-monts backdrop-blur-lg shadow-lg transition-colors duration-300 ${isScrolled ? "bg-white/10" : "bg-transparent"
                }`}
        >
            <div>
                <h1>Logo</h1>
            </div>
            <nav className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/framer">Animations</Link>
            </nav>
        </header>
    );
}