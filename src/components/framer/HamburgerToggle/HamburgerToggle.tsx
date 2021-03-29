import { motion, useCycle } from 'framer-motion';
import React from 'react';

type ButtonWithoutStyle = Omit<React.HTMLAttributes<HTMLButtonElement>, 'style' | 'onClick'>;
type HamburgerToggleProps = ButtonWithoutStyle & {
    size?:number | string,
    color?:string,
    strokeWidth?: number | string,
    StrokeLinecap?: "inherit" | "butt" | "round" | "square",
    onClick?:(open:boolean)=>void,
};    

const HamburgerToggle:React.FC<HamburgerToggleProps> = (props:HamburgerToggleProps) => {
    const {
        size = 44,
        color = 'black',
        strokeWidth = 3,
        StrokeLinecap = 'round',
        onClick,
        ...rest
    } = props;

    const [isOpen, toggleOpen] = useCycle(false, true);

    const handleClick = ()=>{
        toggleOpen();
        if(onClick) onClick(!isOpen);
    }

    const variants = {
        open: {
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2
            }
        },
        closed: {
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

    return (
        <button 
        {...rest}
        onClick={handleClick} 
        style={{
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
        }}>
            <motion.svg 
            initial={false}
            animate={isOpen?'open':'closed'}
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