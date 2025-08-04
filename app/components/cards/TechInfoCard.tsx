import React from 'react'
import * as Icons from '~/assets/icons'

type Props = {
    name: string,
}

export default function TechInfoCard({ name }: Props) {
    const Logo = Icons[name];

    return (
        <div className="w-75 aspect-[3/3] rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-md flex flex-col overflow-hidden
        cursor-pointer hover:shadow-[0px_0px_50px_10px_rgba(0,0,255,0.5)]">
            {/* Logo Area — ~60% */}
            <div className="flex items-center justify-center p-6 h-3/5">
                <Logo className="w-20 h-20 object-contain" />
            </div>

            {/* Info Area — ~40% */}
            <div className="flex flex-col items-center justify-center h-2/5 bg-white/10 text-white/90">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-xs text-gray-400">Full Stack</p>
            </div>
        </div>
    );
}

