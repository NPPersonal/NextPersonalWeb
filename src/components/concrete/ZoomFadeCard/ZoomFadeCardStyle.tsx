import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { alpha, SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";

type ZFCardProps = React.ComponentProps<typeof Card> & {
  children?: React.ReactNode;
  cardWidth: string | number;
  sx?: SxProps<Theme>;
};

export const ZFCard = ({
  sx = [],
  children,
  cardWidth,
  ...rest
}: ZFCardProps) => (
  <Card
    sx={[
      {
        width: cardWidth,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Card>
);

type ZFCardActionAreaProps = React.ComponentProps<typeof CardActionArea> & {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};
export const ZFCardActionArea = ({
  sx = [],
  children,
  ...rest
}: ZFCardActionAreaProps) => (
  <CardActionArea
    sx={[{ position: "relative" }, ...(Array.isArray(sx) ? sx : [sx])]}
    {...rest}
  >
    {children}
  </CardActionArea>
);

type ZFCardMaskProps = React.ComponentProps<typeof Box> & {
  children?: React.ReactNode;
  maskColor: string;
  maskOpacity: number;
  sx?: SxProps<Theme>;
  theme?: Theme;
};
export const ZFCardMask = React.forwardRef(
  (
    {
      sx = [],
      children,
      theme,
      maskColor,
      maskOpacity,
      ...rest
    }: ZFCardMaskProps,
    ref
  ) => (
    <Box
      ref={ref}
      sx={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: alpha(maskColor, maskOpacity),
          color: theme ? theme.palette.getContrastText(maskColor) : "#fff",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {children}
    </Box>
  )
);

type ZoomImageProps = React.ComponentProps<typeof Box> & {
  imageScale: number;
  zoomTime: number;
  src: string;
  width: string | number;
  sx?: SxProps<Theme>;
};
export const ZoomImage = ({
  sx = [],
  src,
  imageScale,
  zoomTime,
  width,
  ...rest
}: ZoomImageProps) => (
  <Box
    component="img"
    src={src}
    sx={[
      {
        display: "block",
        transform: `scale(${imageScale})`,
        transition: `all ${zoomTime}ms ease-in-out !important`,
        width: width,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);
