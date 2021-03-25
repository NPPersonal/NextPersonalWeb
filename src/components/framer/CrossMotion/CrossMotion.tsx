import React from 'react';
import {motion, Transition, Variants} from 'framer-motion';
import { orchestrate, springTransition } from '../Transition';

type CrossMotionProps = {
    color?:string,
    delay?:number,
    strokeWidth?:string|number,
    strokeLinecap?:"inherit" | "round" | "butt" | "square",
    strokeLinejoin?:"inherit" | "round" | "bevel" | "miter",
    transform?:string,
    transition?: Transition,
}

const CrossMotion:React.FC<CrossMotionProps> = (props:CrossMotionProps) => {
    const {
        color = '#7700FF',
        delay = 0.2,
        strokeWidth = 50,
        strokeLinecap = 'round',
        strokeLinejoin = 'round',
        transform = 'translate(50, 50)',
        transition = springTransition(350, 50, 0, 1, 0, 0.8, orchestrate(delay, 0.2))
    } = props;

    const svgVariant:Variants = {
        init:{},
        enter:{
            transition
        }
    }

    const strikeVariant:Variants = {
        init:{pathLength: 0},
        enter:{pathLength: 1}
    }

    return (
        <motion.svg
        variants={svgVariant}
        initial='init'
        animate='enter'
        viewBox='0 0  430 400'
        >
            <motion.g
            transform={transform}
            >
                <motion.path
                d="M 0 0 L 257.373 257.373"
                fill="transparent"
                strokeWidth={strokeWidth}
                stroke={color}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
                variants={strikeVariant}
                />
            </motion.g>
            <motion.g
            transform={transform}
            >
                <motion.path
                d="M 257.373 0 L 0 257.373"
                fill="transparent"
                strokeWidth={strokeWidth}
                stroke={color}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
                variants={strikeVariant}
                />
            </motion.g>
        </motion.svg>
    );
};

export default CrossMotion;