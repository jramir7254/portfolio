import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import * as Icons from '../assets/icons';
import { useRef, useEffect } from "react";

type SvgIconProps = {
    logoName: keyof typeof Icons;
};

const SvgIcon = ({ logoName }: SvgIconProps) => {
    const Logo = Icons[logoName];
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Logo className="w-20 h-20 text-[#61DAFB]" />
            <h3>{logoName}</h3>
        </div>
    );
};

const logos = [
    { name: 'TailwindLogo' },
    { name: 'ReactLogo' },
    // { name: 'TypeScript' }
];

export default function Home() {
    return (
        <div className='flex flex-col flex-1'>
            <Hero />
            <TechStack />
        </div>
    );
}

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const clicked = useMotionValue(0.15);
    const springClicked = useSpring(clicked, { stiffness: 60, damping: 20 });

    const h1Ref = useRef<HTMLHeadingElement | null>(null);
    const centerX = useMotionValue(0);
    const centerY = useMotionValue(0);

    // Get center of h1 on mount and on resize
    useEffect(() => {
        const updateCenter = () => {
            if (h1Ref.current) {
                const rect = h1Ref.current.getBoundingClientRect();
                centerX.set(rect.left + rect.width / 2);
                centerY.set(rect.top + rect.height / 2);
            }
        };

        updateCenter();
        window.addEventListener("resize", updateCenter);
        return () => window.removeEventListener("resize", updateCenter);
    }, []);
    const distance = useTransform(
        [mouseX, mouseY],
        ([x, y]) => {
            const dx = x - centerX.get();
            const dy = y - centerY.get();
            return Math.sqrt(dx * dx + dy * dy);
        }
    );

    // Closer = more opaque
    const h1Opacity = useTransform(distance, [0, 500], [1, 0.25]);

    const handleClick = () => {
        clicked.set(0.35);
        setTimeout(() => clicked.set(0.15), 400);
    };

    const background = useTransform(
        [mouseX, mouseY, springClicked],
        ([x, y, opacity]) =>
            `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,${opacity}), rgba(0,0,0,0.95))`
    );

    return (
        <motion.section
            className="flex flex-1 min-h-full  overflow-y-auto bg-black"

            onMouseMove={(e) => {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }}
            onClick={handleClick}
            style={{ background, }}
        >
            <div className="flex items-center justify-center w-1/2 h-full bg-inherit ">
                <div className="animate-fade-in">
                    <motion.h1
                        ref={h1Ref}
                        style={{ opacity: h1Opacity }}
                        className="font-bebas text-9xl tracking-wide select-none"
                    >
                        Jesus
                        <br />
                        Ramirez
                    </motion.h1>
                    <p>Full Stack Web Developer</p>
                </div>
            </div>
        </motion.section>
    );
};
const TechStack = () => {
    const DURATION = 30; // seconds

    return (
        <section className="flex h-50 bg-slate-600">
            <motion.div
                className="flex gap-16"
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: DURATION,
                }}
            >

            </motion.div>
        </section>
    );
};
