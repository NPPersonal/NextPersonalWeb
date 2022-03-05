import Box from "@mui/material/Box";
import React from "react";

type ScrollSectionProps = React.ComponentProps<typeof Box>;

/**
 * Component ScrollSection
 *
 * Take ReactNode as child content
 *
 * Define `id` value to make section to be scrolled to, by incorporate with `ScrollLink`
 *
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/
 *
 * @param {ScrollSectionProps} props
 * @returns
 */
const ScrollSection: React.FC<ScrollSectionProps> = (
  props: ScrollSectionProps
) => {
  const { children, ...rest } = props;

  return <Box {...rest}>{children}</Box>;
};

export default ScrollSection;
