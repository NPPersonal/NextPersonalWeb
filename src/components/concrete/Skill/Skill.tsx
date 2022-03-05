import Box from "@mui/material/Box";
import React from "react";
import LinearProgressColor, {
  LinearProgressColorProps,
} from "../../units/LinearProgressColor/LinearProgressColor";

export type SkillProps = React.ComponentProps<typeof Box> &
  LinearProgressColorProps & {
    header: React.ReactNode;
  };

/**
 * Component Skill
 *
 * Display skill with title
 *
 * Display skill with progress bar
 *
 * Customizable progress bar color
 *
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/
 *
 * Adopted `LinearProgressColor` component
 *
 * @param {SkillProps} props
 * @returns
 */
const Skill: React.FC<SkillProps> = (props: SkillProps) => {
  const {
    header,
    value,
    barColor,
    barMaskColor,
    barRadius,
    barWidth,
    barHeight,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      {header}
      <LinearProgressColor
        variant="determinate"
        value={value}
        barColor={barColor}
        barMaskColor={barMaskColor}
        barRadius={barRadius}
        barWidth={barWidth}
        barHeight={barHeight}
      />
    </Box>
  );
};

export default Skill;
