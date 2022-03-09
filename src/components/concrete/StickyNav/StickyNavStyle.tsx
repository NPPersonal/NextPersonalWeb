import AppBar, { AppBarProps } from "@mui/material/AppBar";
import { SxProps, Theme } from "@mui/material/styles";

type AppBarWithoutColor = Omit<AppBarProps, "color">;
type NavigationBarProps = AppBarWithoutColor & {
  color: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};

export const NavigationBar = ({
  sx = [],
  children,
  color,
  ...rest
}: NavigationBarProps) => (
  <AppBar
    sx={[
      {
        backgroundColor: color,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </AppBar>
);
