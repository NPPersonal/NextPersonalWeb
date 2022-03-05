import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import React from "react";
import Box from "@mui/material/Box";

type OverlayCaptionProps = React.ComponentProps<typeof Box> & {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export const OverlayCaption = ({
  sx = [],
  children,
  ...rest
}: OverlayCaptionProps) => (
  <Box
    sx={[
      {
        position: "absolute",
        left: 0,
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Box>
);

type UpperCaseTextProps = React.ComponentProps<typeof Typography> & {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export const UpperCaseText = ({
  sx = [],
  children,
  ...rest
}: UpperCaseTextProps) => (
  <Typography
    sx={[{ textTransform: "uppercase" }, ...(Array.isArray(sx) ? sx : [sx])]}
    {...rest}
  >
    {children}
  </Typography>
);
