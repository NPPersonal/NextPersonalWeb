import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

import SvgIcon from "@mui/material/SvgIcon";
import LinkTo from "../../units/LinkTo/LinkTo";

export type SLWapperProps = React.ComponentProps<typeof Box> & {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};
export const SLWapper = ({ sx = [], children, ...rest }: SLWapperProps) => (
  <Box
    sx={[
      {
        "& a:last-of-type": {
          marginRight: 0,
        },
        "& a:first-of-type": {
          marginLeft: 0,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Box>
);

type SLLinkProps = React.ComponentProps<typeof LinkTo> & {
  theme?: Theme;
};

export const SLLink = ({ children, theme, ...rest }: SLLinkProps) => (
  <LinkTo
    cssStyle={{
      marginRight: theme ? theme.spacing(2) : 0,
    }}
    {...rest}
  />
);

export type SLSvgIconProps = React.ComponentProps<typeof SvgIcon> & {
  children?: React.ReactNode;
  iconColor: string;
  sx?: SxProps<Theme>;
};
export const SLSvgIcon = React.forwardRef<any, SLSvgIconProps>(
  ({ sx = [], children, iconColor, ...rest }: SLSvgIconProps, ref) => (
    <SvgIcon
      ref={ref}
      sx={[
        {
          color: iconColor,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {children}
    </SvgIcon>
  )
);

// export type SLTooltipProps = React.ComponentProps<typeof Tooltip> & {
//   children?: React.ReactNode;
//   toolTipColor: string;
//   sx?: SxProps<Theme>;
// };
// export const SLTooltip = ({
//   sx = [],
//   children,
//   toolTipColor,
//   ...rest
// }: SLTooltipProps) => (
//   <Tooltip sx={[...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
//     {children}
//   </Tooltip>
// );
