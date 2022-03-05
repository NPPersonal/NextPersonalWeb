import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { SxProps, Theme } from "@mui/material/styles";

type ProgressBarProps = React.ComponentProps<typeof LinearProgress> & {
  barColor: string;
  barMaskColor: string;
  barRadius: string | number;
  barWidth: string | number;
  barHeight: string | number;
  sx?: SxProps<Theme>;
};

export const ProgressBar = ({
  sx = [],
  barColor,
  barMaskColor,
  barRadius,
  barWidth,
  barHeight,
  ...rest
}: ProgressBarProps) => (
  <LinearProgress
    sx={[
      {
        borderRadius: barRadius,
        width: barWidth,
        height: barHeight,
        "&.MuiLinearProgress-determinate": {
          backgroundColor: barMaskColor,
        },
        "& > .MuiLinearProgress-bar1Determinate": {
          backgroundColor: barColor,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);
