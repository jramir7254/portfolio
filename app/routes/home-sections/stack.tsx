import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import { useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import { useGLTF } from '@react-three/drei'

export function MyModel(props) {
    const { scene } = useGLTF('/Computer.glb')
    return <primitive object={scene} {...props} />
}

import { SvgIcon } from "~/components/Icon";
import * as Icons from '~/assets/icons';
export default function TechStack() {


    const DURATION = 30; // seconds


    return (
        <section className="w-full px-75 h-screen bg-black/50">
            <div className="flex h-fullitems-center justify-center w-full gap-5">


                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Python className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.React className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Node className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Tailwind className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Javascript className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Java className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Leetcode className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Canva className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Css className='size-full object-fill' />
                </div>
                <div className="w-25 h-25  p-5 border   rounded-xl">

                    <Icons.Html className='size-full object-fill' />
                </div>


            </div>

        </section>
    );
};
