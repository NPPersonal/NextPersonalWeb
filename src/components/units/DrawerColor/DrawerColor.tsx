import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import style from "./DrawerStyle";

type DrawerColorPorps = React.ComponentProps<typeof Drawer> & {
  drawerWidth?: number;
  color?: string;
};

/**
 * Component DrawerColor
 *
 * Customizable drawer color and width
 *
 * @param props
 * @returns
 */
const DrawerColor: React.FC<DrawerColorPorps> = (props: DrawerColorPorps) => {
  const { children, drawerWidth = 240, color = "grey", ...rest } = props;

  const classes = makeStyles(style)({
    drawerWidth,
    color,
  });

  const drawerClasses = {
    root: classes.root,
    paper: classes.paper,
  };

  return (
    <Drawer {...rest} classes={drawerClasses}>
      <Container className={classes.container}>{children}</Container>
    </Drawer>
  );
};

export default DrawerColor;
