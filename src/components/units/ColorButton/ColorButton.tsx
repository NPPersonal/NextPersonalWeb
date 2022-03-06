import useTheme from "@mui/styles/useTheme";
import React from "react";
import { InteractiveButton, InteractiveButtonProps } from "./ColorButtonStyle";

// type ButtonWithoutColorProps = Omit<ButtonProps, "color">;

type ColorButtonProps = InteractiveButtonProps & {
  // borderRadius?: string;
  // bgColor?: string;
  // activeColor?: string;
  // hoverColor?: string;
  // titleColor?: string;
  // shadow?: boolean;
};

/**
 * Component ColorButton
 *
 * Customized border radius
 *
 * Customized color, color for active and hover
 *
 * Padding horizontal and vertical
 *
 * Wrapped Material-UI `Button`
 * https://material-ui.com/components/buttons/#button
 *
 * @param {ColorButtonProps} props
 * @returns
 */
const ColorButton: React.FC<ColorButtonProps> = (props: ColorButtonProps) => {
  const {
    children,
    borderRadius = "35px",
    bgColor = "grey",
    activeColor = "grey",
    hoverColor = "lightgrey",
    titleColor = "black",
    shadow = true,
    ...rest
  } = props;

  const theme = useTheme();
  return (
    <InteractiveButton
      theme={theme}
      borderRadius={borderRadius}
      activeColor={activeColor}
      hoverColor={hoverColor}
      titleColor={titleColor}
      bgColor={bgColor}
      shadow={shadow}
      {...rest}
    >
      {children}
    </InteractiveButton>
  );
};

export default ColorButton;
