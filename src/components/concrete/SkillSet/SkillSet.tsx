import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Skill, { SkillProps } from "../Skill/Skill";

type SkillPartialProps = Omit<SkillProps, "header" | "value">;

type SkillSetProps = React.ComponentProps<typeof Box> &
  SkillPartialProps & {
    header: React.ReactNode;
    skills: {
      title: React.ReactNode;

      /**
       * Value between 0 and 100.
       */
      value: number;
    }[];
  };

/**
 * Component SkillSet
 *
 * Display a set of skill in `Grid` layout
 *
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/
 *
 * Adopted `Skill` component
 *
 * @param {SkillProps} props
 * @returns
 */
const SkillSet: React.FC<SkillSetProps> = (props: SkillSetProps) => {
  const { header, skills, barColor, barMaskColor, ...rest } = props;

  return (
    <Box {...rest}>
      {header}
      <Grid container>
        {skills.map((skill, i) => (
          <Grid key={i} item xs={12} sm={6}>
            <Skill
              p={2}
              header={<Box pb={1}>{skill.title}</Box>}
              value={skill.value}
              barColor={barColor}
              barMaskColor={barMaskColor}
              barHeight="8px"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillSet;
