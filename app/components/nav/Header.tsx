import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Header() {


    return (
        <header
            className={
                `sticky top-0 z-10 p-6 px-24 flex justify-between font-monts  transition-colors duration-300 
                backdrop-blur-lg shadow-lg bg-white/10`
            }
        >
            <div>
                <p>Jesus Ramirez</p>
            </div>
            <nav className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/framer">Animations</Link>
            </nav>
        </header>
    );
}