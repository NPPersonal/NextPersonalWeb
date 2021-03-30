import { HTMLMotionProps, motion, Transition } from 'framer-motion';
import React from 'react';
import { springTransition } from '../Transition';

type MotionDivWithId = Pick<HTMLMotionProps<'div'>, 'id'>;
type RippleMotionProps = MotionDivWithId & {
    children?:React.ReactNode,
    open: boolean,
    color?: string,
    openTransition?: Transition,
    closedTransition?: Transition,
}

const RippleMotion:React.FC<RippleMotionProps> = React.forwardRef<HTMLDivElement, RippleMotionProps>((props, ref) => {
    const {
        children,
        open,
        color = 'grey',
        openTransition = springTransition(400, 40),
        closedTransition = springTransition(400, 40),
        ...rest
    } = props;

    const variants = {
        open:{
            clipPath: 'circle(100%)',
            opacity: 1,
            transition: openTransition,
        },
        closed:{
            clipPath: "circle(4%)",
            opacity: 0,
            transition: closedTransition,
        }
    }

    return (
        <motion.div 
        {...rest} 
        ref={ref}
        variants={variants}
        initial={open?'closed':'open'}
        animate={open?'open':'closed'}
        style={{
            width:'100%',
            height:'100%',
            backgroundColor:color,
            overflow:'scroll',
        }}
        >
            {children}
        </motion.div>
    );
});

export default RippleMotion;