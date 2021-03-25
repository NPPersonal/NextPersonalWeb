import React from 'react';
import {motion, Transition, Variants} from 'framer-motion';
import { springTransition } from '../Transition';

type TickMotionProps = {
    color?:string,
    delay?:number,
    strokeWidth?:string|number,
    strokeLinecap?:"inherit" | "round" | "butt" | "square",
    strokeLinejoin?:"inherit" | "round" | "bevel" | "miter",
    transform?:string,
    transition?: Transition,
}

const TickMotion:React.FC<TickMotionProps> = (props:TickMotionProps) => {
    const {
        color = '#7700FF',
        delay = 0.2,
        strokeWidth = 50,
        strokeLinecap = 'round',
        strokeLinejoin = 'round',
        transform = 'translate(50, 50)',
        transition = springTransition(350, 50, delay)
    } = props;

    const variant:Variants = {
        init:{pathLength: 0},
        enter:{pathLength: 1, transition: transition}
    }
    return (
        <motion.svg
        initial='init'
        animate='enter'
        viewBox='0 0  430 400'
        >
            <motion.g
            transform={transform}
            >
                <motion.path
                d="M 0 128.666 L 128.658 257.373 L 341.808 0"
                fill="transparent"
                strokeWidth={strokeWidth}
                stroke={color}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
                variants={variant}
                />
            </motion.g>
        </motion.svg>
    );
};

export default TickMotion;