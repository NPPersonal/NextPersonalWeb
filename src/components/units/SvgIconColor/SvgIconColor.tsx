import makeStyles from "@mui/styles/makeStyles";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";
import style from "./SvgIconStyle";

type SvgIconWithoutColorProps = Omit<SvgIconProps, "color">;

type SvgIconColorProps = SvgIconWithoutColorProps & {
  color?: string;
};
const SvgIconColor: React.FC<SvgIconColorProps> = (
  props: SvgIconColorProps
) => {
  const { children, color = "gery", ...rest } = props;

  const classes = makeStyles(style)({
    iconColor: color,
  });

  const svgIconClasses = {
    root: classes.svgIcon,
  };

  return (
    <SvgIcon {...rest} classes={svgIconClasses}>
      {children}
    </SvgIcon>
  );
};

export default SvgIconColor;
