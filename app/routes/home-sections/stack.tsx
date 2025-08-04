import { motion, stagger, useMotionValue, useSpring, useTransform } from "motion/react"

import TechInfoCard from "~/components/cards/TechInfoCard";
import TechCard from "~/components/cards/TechCard";
import { Icons } from "~/assets/icons";
import specialties from "~/data/specialties";

export default function TechStack() {


    const frontend = [
        'React',
        'Tailwind',
        'Html',
        'Css',
        'Javascript'
    ]

    const container = {
        hidden: { x: '-100%' },
        show: {
            x: '0%',
            opacity: 1,
            transition: {
                default: { type: "spring" },
                duration: 1,
                delayChildren: stagger(0.25),

            }
        }
    }

    const div = {
        hidden: { x: '-100%' },
        show: {
            x: '0%',
            transition: {
                default: { type: "spring" }
            }
        }
    }

    return (
        <section className="w-full px-70 py-20 h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
            <div className="  flex  flex-col  bd gap-5">
                <div className="flex  bd">
                    <motion.h2 className="font-bebas text-7xl tracking-wider"
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{ once: true }}

                        transition={{
                            default: { type: "spring" },
                            opacity: { ease: 'easeOut' },

                            duration: 0.5
                        }}
                    >
                        Specialties
                    </motion.h2>

                </div>

            </div>
            <motion.div className="flex mt-10 flex-wrap gap-4" variants={container} initial='hidden' whileInView='show'>
                {specialties.map((item, index) => {
                    const Logo = Icons[item.key];
                    return (
                        <motion.div variants={div} initial='hidden' whileInView='show'>
                            <TechCard key={index} icon={Logo} label={item.name} />
                        </motion.div>
                    )
                })}

            </motion.div>

        </section>
    );
};
