import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import style from "./StickyNavStyle";

type AppBarWithoutProps = Omit<AppBarProps, "color" | "position">;
type StickyNavProps = AppBarWithoutProps & {
  children?: React.ReactNode;
  color?: string;
  brand?: React.ReactNode;
};

const StickyNav: React.FC<StickyNavProps> = (props: StickyNavProps) => {
  const { color = "lightblue", brand, children, ...rest } = props;

  const classes = makeStyles(style)({
    color,
  });

  const appBarClasses = {
    root: classes.root,
  };

  return (
    <AppBar {...rest} classes={appBarClasses} position="sticky">
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
    </AppBar>
  );
};

export default StickyNav;
