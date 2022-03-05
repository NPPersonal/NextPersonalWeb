import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

type BriefProps = React.ComponentProps<typeof Box> & {
  personName: string;
  personNameColor?: string;
  occupation: string;
  brief: string;
  briefColor?: string;
};

/**
 * Component Brief
 *
 * Use for self introduction
 *
 * Customizable color for person name
 *
 * Customizable color for brief
 *
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/#box
 *
 * @param {BriefProps} props
 * @returns
 */
const Brief: React.FC<BriefProps> = (props: BriefProps) => {
  const {
    personName,
    personNameColor = "blue",
    occupation,
    brief,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      <Typography variant="h4" component="div">
        <Box component="span">I'm </Box>
        <Box component="span" color={personNameColor}>
          {personName}
        </Box>
        <Box component="span">{occupation}</Box>
      </Typography>
      <Box pt={2}>
        <Typography variant="h6" paragraph style={{ whiteSpace: "pre-line" }}>
          {brief}
        </Typography>
      </Box>
    </Box>
  );
};

export default Brief;
