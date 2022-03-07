import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { SxProps, Theme } from "@mui/material/styles";

type ProgressBarProps = React.ComponentProps<typeof LinearProgress> & {
  progressColor: string;
  barColor: string;
  barRadius: string | number;
  barWidth: string | number;
  barHeight: string | number;
  sx?: SxProps<Theme>;
};

export const ProgressBar = ({
  sx = [],
  barColor,
  progressColor,
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
        "&.MuiLinearProgress-root": {
          backgroundColor: progressColor,
        },
        "& > .MuiLinearProgress-bar": {
          backgroundColor: barColor,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);
