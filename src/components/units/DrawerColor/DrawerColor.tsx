import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { SideDrawer } from "./DrawerStyle";

type DrawerColorPorps = React.ComponentProps<typeof Drawer> & {
  drawerWidth: string | number;
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

  return (
    <SideDrawer drawerWidth={drawerWidth} color={color} {...rest}>
      <Container sx={[{ height: "100%" }]} maxWidth={false}>
        {children}
      </Container>
    </SideDrawer>
  );
};

export default DrawerColor;
