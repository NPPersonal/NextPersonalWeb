import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { OverlayCaption, UpperCaseText } from "./OverlapHeaderStyle";

type HeaderProps = React.ComponentProps<typeof Box> & {
  text: string;
  textColor?: string;
  textFontWeight?: number;
  caption: string;
  captionColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  lineColor?: string;
  noWrap?: boolean;
};

/**
 * Component Header
 *
 * Caption is on top of main text
 *
 * Caption with bottom line
 *
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/#box
 *
 * @param {HeaderProps} props
 * @returns
 */
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    text,
    textColor = "#c7c4c3",
    textFontWeight = 800,
    caption,
    captionColor = "#808080",
    lineWidth = "80px",
    lineHeight = "4px",
    lineColor = "#0443ff",
    noWrap = false,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      <Box position="relative" textAlign="center">
        <UpperCaseText
          variant="h2"
          noWrap={noWrap}
          sx={{ color: textColor, fontWeight: textFontWeight }}
        >
          {text}
        </UpperCaseText>
        <OverlayCaption>
          <Typography variant="h4" noWrap={noWrap}>
            {caption}
            <Box
              mt={1}
              width={lineWidth}
              height={lineHeight}
              bgcolor={lineColor}
              marginLeft="auto"
              marginRight="auto"
              borderRadius="4px"
            />
          </Typography>
        </OverlayCaption>
      </Box>
    </Box>
  );
};

export default Header;
