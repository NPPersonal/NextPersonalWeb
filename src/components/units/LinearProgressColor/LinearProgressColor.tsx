import { LinearProgressProps } from "@mui/material/LinearProgress";
// import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import { ProgressBar } from "./LinearProgressColorStyle";

type ProgressWithoutColorProps = Omit<LinearProgressProps, "color">;

export type LinearProgressColorProps = ProgressWithoutColorProps & {
  barColor?: string;
  progressColor?: string;
  barRadius?: string | number;

  /** not suitable for `buffer` style */
  barWidth?: string | number;

  /** not suitable for `buffer` style */
  barHeight?: string | number;
};

/**
 * Component LinearProgressColor
 *
 * Linear progress bar
 *
 * Customizable color, border radius, width and height
 *
 * Wrapped Material-UI LinearProgress
 * https://material-ui.com/components/progress/#progress
 *
 * @param {LinearProgressColorProps} props
 * @returns
 */
const LinearProgressColor: React.FC<LinearProgressColorProps> = (
  props: LinearProgressColorProps
) => {
  const {
    progressColor = "grey",
    barColor = "lightgrey",
    barRadius = "4px",
    barWidth = "auto",
    barHeight = "4px",
    ...rest
  } = props;

  return (
    <ProgressBar
      {...rest}
      barColor={barColor}
      progressColor={progressColor}
      barRadius={barRadius}
      barWidth={barWidth}
      barHeight={barHeight}
    />
  );
};

export default LinearProgressColor;
