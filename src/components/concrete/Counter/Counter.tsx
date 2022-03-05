import React from "react";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type CounterProps = React.ComponentProps<typeof CountUp> &
  BoxProps & {
    caption?: React.ReactNode;
  };

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const { caption, ...rest } = props;

  return (
    <CountUp {...rest}>
      {({ countUpRef, start }) => (
        <InView
          triggerOnce
          onChange={(inView) => {
            if (inView) start();
          }}
        >
          <Box display="flex" flexDirection="column" justifyItems="center">
            <Typography ref={countUpRef} variant="h2" align="center" />
            {caption}
          </Box>
        </InView>
      )}
    </CountUp>
  );
};

export default Counter;
