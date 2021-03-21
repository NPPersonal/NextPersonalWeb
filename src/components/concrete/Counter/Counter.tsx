import React from 'react';
import { InView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Box from '@material-ui/core/Box/Box';
import RootRef from '@material-ui/core/RootRef/RootRef';
import Typography from '@material-ui/core/Typography/Typography';

type CounterProps = React.ComponentProps<typeof CountUp>;

const Counter:React.FC<CounterProps> = (props:CounterProps) => {
    const {
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
                <Box>
                    <RootRef rootRef={countUpRef}>
                        <Typography variant='h3' />
                    </RootRef>
                </Box>
            </InView>
        )}
        </CountUp>
    );
};

export default Counter;