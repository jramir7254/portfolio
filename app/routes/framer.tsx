import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent, stagger, animate } from "motion/react"
import type { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from 'react';
import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';


type SidebarProps = {
    children: ReactNode;
    setView: Dispatch<SetStateAction<string>>;
    view: string
};


const SideBar = ({ children, setView, view }: SidebarProps) => {

    const handleChange = (event) => {
        setView(event.target.value);
    };

    return (
        <aside className="w-1/3 bg-neutral-800 p-10 max-h-full">
            <h1>Left Panel <span> | {view}</span></h1>
            <fieldset className="flex flex-col">
                <div>
                    <input onChange={handleChange} checked={view === 'div'} type="radio" name='type' id='div' value='div' />
                    <label htmlFor="div">Motion Div</label>
                </div>
                <div>
                    <input onChange={handleChange} checked={view === 'h1'} type="radio" name='type' id='h1' value='h1' />
                    <label htmlFor="h1">Motion Text</label>
                </div>
                <div>
                    <input onChange={handleChange} checked={view === 'bg'} type="radio" name='type' id='bg' value='bg' />
                    <label htmlFor="bg">Motion BG</label>
                </div>
                <div>
                    <input onChange={handleChange} checked={view === 'card'} type="radio" name='type' id='card' value='card' />
                    <label htmlFor="card">Motion Card</label>
                </div>
            </fieldset>
            {children}
        </aside>
    )
}


export default function framer() {

    const [view, setView] = useState('h1')
    const [expanded, setExpanded] = useState(false);
    const [scroll, setScroll] = useState(0)


    const scrollRef = useRef(null);

    const { scrollYProgress } = useScroll({
        container: scrollRef,
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Right Panel Scroll: ", latest);
        setScroll(latest)
    });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });



    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        // Attach the event listener to the window
        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount





    return (
        <section className="flex flex-1 overflow-hidden border h-full ">

            <SideBar setView={setView} view={view}>
                <p>
                    Scroll Y Progress: {scroll.toFixed(2)}
                    <p>X: {mousePosition.x}</p>
                    <p>Y: {mousePosition.y}</p>
                </p>
                <button
                    className="z-10 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setExpanded(!expanded)}
                >Expand Section Test</button>
            </SideBar>


            <div ref={scrollRef} className="w-2/3 flex-1 flex flex-col max-h-screen overflow-y-auto border relative">
                <div className="flex-1 min-h-0 ">

                    {expanded && (
                        <div className="h-[100vh] bg-neutral-700 flex items-center justify-center text-lg font-semibold">
                            Scroll Trigger Top Section
                        </div>
                    )}

                    <div className=" flex h-full bg-neutral-700 items-center justify-center">
                        {view === "div" && <MotionDiv scroll={scrollYProgress} />}
                        {view === "h1" && <MotionText />}
                        {view === "bg" && <BG scroll={scrollYProgress} />}
                        {view === "card" && <MotionCard />}
                    </div>


                    {expanded && (
                        <div className="h-[100vh] bg-neutral-700 flex items-center justify-center text-lg font-semibold">
                            Scroll Trigger Bottom Section
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


const BG = ({ scroll }) => {
    const bgColor = useTransform(
        scroll,
        [0, 1],
        ["#ff0080", "#7928ca"] // from pink to purple
    );
    return (
        <motion.div
            drag
            className="size-full bg-purple-600"
            transition={{ duration: 2 }}
            style={{
                backgroundColor: bgColor
            }}

        // style={{ scaleX: scroll }}
        />
    )
}




const MotionDiv = ({ scroll }) => {
    return (
        <motion.div
            drag
            className="w-32 h-32 bg-purple-600 rounded-2xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.5 }}
            animate={{ scale: 1, rotate: 360, transition: { duration: 2 } }}
            whileHover={{ rotate: 40 }}
            whileTap={{ background: 'blue' }}
            style={{ scaleX: scroll }}
        />
    )
}
const MotionCard = ({ }) => {

    const variants = {
        initial: { backgroundColor: "#9333ea" }, // Tailwind's purple-600
        hover: { backgroundColor: "red" },
    };
    return (
        <motion.div


            whileHover={{
                backgroundColor: 'blue',
            }}
            transition={{ duration: 5 }}
            className="w-75 h-100 bg-purple-600 rounded-2xl"

        >
            <div>Items</div>
        </motion.div >
    )
}




const MotionText = () => {
    return (
        <motion.h1
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
            className="text-5xl">
            Test
        </motion.h1>
    )

}


// const text = 'This is some text'

// const container = {
//     hidden: { y: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             duration: 2,
//             delayChildren: stagger(0.1),
//             repeat: Infinity,
//             repeatType: 'loop',
//         }
//     }
// }

// const item = {
//     hidden: { y: 0 },
//     show: {
//         y: [0, -50, 0],
//         transition: {

//         }
//     }
// }

// return (
//     <motion.h1
//         variants={container}
//         initial="hidden"
//         animate="show"
//     >
//         {text.split("").map(char => (
//             <motion.span variants={item} className="inline-block">
//                 {char === " " ? "\u00A0" : char}
//             </motion.span>
//         ))}

//     </motion.h1>
// )