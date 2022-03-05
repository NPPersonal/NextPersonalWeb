import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";

const createCSSShadow = () => `
  0px 3px 1px -2px rgba(0,0,0,0.2),
  0px 2px 2px 0px rgba(0,0,0,0.14),
  0px 1px 5px 0px rgba(0,0,0,0.12)
  `;

const createCSSHoverShadow = () => `
0px 2px 4px -1px rgba(0,0,0,0.2),
0px 4px 5px 0px rgba(0,0,0,0.14),
0px 1px 10px 0px rgba(0,0,0,0.12)
`;

type InteractiveButtonProps = React.ComponentProps<typeof Button> & {
  children?: React.ReactNode;
  borderRadius: string;
  bgColor: string;
  activeColor: string;
  hoverColor: string;
  titleColor: string;
  shadow?: boolean;
  sx?: SxProps<Theme>;
  theme?: Theme;
};

export const InteractiveButton = ({
  children,
  sx = [],
  borderRadius,
  bgColor,
  activeColor,
  hoverColor,
  titleColor,
  shadow,
  theme,
  ...rest
}: InteractiveButtonProps) => (
  <Button
    sx={[
      {
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        borderColor: bgColor,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        boxShadow: shadow ? createCSSShadow() : "none",
        "&:active": {
          backgroundColor: activeColor,
          borderColor: activeColor,
        },
        "&:hover": {
          backgroundColor: hoverColor,
          borderColor: hoverColor,
          boxShadow: shadow ? createCSSHoverShadow() : "none",
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Button>
);
