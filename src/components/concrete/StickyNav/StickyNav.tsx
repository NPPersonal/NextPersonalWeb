import { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { NavigationBar } from "./StickyNavStyle";

type AppBarWithoutProps = Omit<AppBarProps, "color" | "position">;
type StickyNavProps = AppBarWithoutProps & {
  children?: React.ReactNode;
  color?: string;
  brand?: React.ReactNode;
};

const StickyNav: React.FC<StickyNavProps> = (props: StickyNavProps) => {
  const { color = "lightblue", brand, children, ...rest } = props;

  return (
    <NavigationBar position="fixed" color={color} {...rest}>
      <Toolbar>
        <Box flexGrow={1}>{brand}</Box>
        <Box
          flexGrow={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          {children}
        </Box>
      </Toolbar>
    </NavigationBar>
  );
};

export default StickyNav;
