import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import { useRef, useEffect, useState } from "react";
import { useGLTF } from '@react-three/drei';
import * as Icons from '~/assets/icons';
import TechCard from "~/components/cards/TechCard";
export default function Hero() {
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
            `radial-gradient(circle 1000px at ${x}px ${y}px, rgba(255,255,255,${opacity}), rgba(0,0,0,0.95))`
    );


    return (
        <motion.section
            className="flex h-screen relative overflow-hidden bd"
            onClick={handleClick}
            style={{ backgroundImage: background }}
            onMouseMove={(e) => {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }}
        >
            <div className="flex items-center justify-center w-1/2 h-full bd">
                <div className="animate-fade-in bd">
                    <motion.h1
                        ref={h1Ref}
                        style={{ opacity: h1Opacity }}
                        className="font-bebas text-9xl tracking-wide select-none"
                    >
                        Jesus
                        <br />
                        Ramirez
                    </motion.h1>
                    <p className="font-monts">Full Stack Web Developer</p>
                </div>

            </div>

            <div className="absolute top-48 left-48 bg-inherit text-black/80 pointer-events-none">hideen</div>
            <div className="w-1/2 flex-1 flex flex-col px-10 items-start justify-center gap-10  ">
                {/* Row 1 */}
                <div className="flex flex-col gap-5 bd">
                    <p className="font-bebas tracking-widest">SERN</p>
                    <div className="flex gap-5">
                        <TechCard icon={Icons.React} href="https://react.dev" label="React" tooltip="React – 3 yrs" />
                        <TechCard icon={Icons.Node} href="https://tailwindcss.com" label="Tailwind CSS" tooltip="Tailwind – daily use" />
                        <TechCard
                            icon={Icons.Express}
                            href="https://expressjs.com/"
                            label="Express"
                            tooltip="Express – server framework"
                        />
                        <TechCard icon={Icons.PostSql} href="https://www.postgresql.org/" label="Postgre SQL" tooltip="For structured data management" />
                    </div>

                    <hr className="border-white/50 border w-full" />


                </div>


            </div>

        </motion.section>
    )
}


