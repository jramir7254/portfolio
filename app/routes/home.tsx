import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import { useRef, useEffect } from "react";


import Hero from "./home-sections/hero";
import TechStack from "./home-sections/stack";

export default function Home() {
    return (
        <div className='flex flex-col w-full flex-1 min-h-0 overflow-hidden'>
            <Hero />
            <TechStack />
        </div>
    );
}
