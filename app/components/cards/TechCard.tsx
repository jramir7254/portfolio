import React from 'react';
import { cn } from '~/lib/utils'; // Optional utility if you're using class merging
import { motion } from 'motion/react';

export default function TechCard({ icon: Icon, href, label, tooltip }) {
    return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" className="group relative"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
            <div
                className={cn(
                    'w-24 h-24 p-5 rounded-xl border border-white/10',
                    'bg-white/5 backdrop-blur-md shadow-md',
                    'hover:scale-105 hover:shadow-xl transition-all duration-300',
                    'flex items-center justify-center'
                )}
            >
                <Icon className="size-full object-contain text-white group-hover:scale-110 transition-transform" />
            </div>

            {tooltip && (
                <div className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 bg-black/70 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {tooltip}
                </div>
            )}
        </motion.a>
    );
}
