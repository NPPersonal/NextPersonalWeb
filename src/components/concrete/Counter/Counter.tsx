import React from 'react';
import { InView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Box, { BoxProps } from '@material-ui/core/Box/Box';
import RootRef from '@material-ui/core/RootRef/RootRef';
import Typography from '@material-ui/core/Typography/Typography';

type CounterProps = React.ComponentProps<typeof CountUp> & BoxProps & {
    caption?: React.ReactNode,
}

const Counter:React.FC<CounterProps> = (props:CounterProps) => {
    const {
        caption,
        ...rest
    } = props;

    return (
        <CountUp {...rest}>
        {({countUpRef, start})=>(
            <InView
            triggerOnce 
            onChange={(inView)=>{
                if(inView) start();
            }}>
                <Box display='flex' flexDirection='column' justifyItems='center'>
                    <RootRef rootRef={countUpRef}>
                        <Typography variant='h2' align='center' />
                    </RootRef>
                    {caption}
                </Box>
            </InView>
        )}
        </CountUp>
    );
};

export default Counter;