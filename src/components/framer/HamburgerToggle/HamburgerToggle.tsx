import { motion, Transition } from 'framer-motion';
import React from 'react';
import { springTransition } from '../Transition';

type ButtonWithoutStyle = Omit<React.HTMLAttributes<HTMLButtonElement>, 'style'>;
export type HamburgerToggleProps = ButtonWithoutStyle & {
    size?:number | string,
    color?:string,
    strokeWidth?: number | string,
    StrokeLinecap?: "inherit" | "butt" | "round" | "square",
    toggle?:boolean,
    zIndex?:any,
    openTransition?: Transition,
    closedTransition?: Transition,
};    

const HamburgerToggle:React.FC<HamburgerToggleProps> = (props:HamburgerToggleProps) => {
    const {
        size = 44,
        color = 'black',
        strokeWidth = 3,
        StrokeLinecap = 'round',
        toggle = false,
        zIndex = 'auto',
        openTransition = springTransition(20, 2),
        closedTransition = springTransition(400, 40, 0.5),
        ...rest
    } = props;

    const variants = {
        open: {
            transition: openTransition
        },
        closed: {
          transition: closedTransition
        }
      };

    return (
        <button 
        {...rest}
        style={{
            position:'relative',
            outline:'none',
            border: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            padding:0,
            width: size,
            height: size,
            zIndex: zIndex,
        }}>
            <motion.svg 
            initial={false}
            animate={toggle?'open':'closed'}
            variants={variants}
            viewBox="0 0 22 19"
            >
                <motion.g transform='translate(0,0)'>
                    <motion.path
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeLinecap={StrokeLinecap}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                    />
                    <motion.path
                    d="M 2 9.423 L 20 9.423"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeLinecap={StrokeLinecap} 
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{duration: 0.1}}
                    />
                    <motion.path
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeLinecap={StrokeLinecap} 
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                    />
                </motion.g>
            </motion.svg>
        </button>
    );
};

export default HamburgerToggle;