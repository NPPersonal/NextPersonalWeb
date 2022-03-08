import Drawer from "@mui/material/Drawer";
import { SxProps, Theme } from "@mui/material/styles";
// import createStyles from "@mui/styles/createStyles";

// type StyleProps = {
//   drawerWidth: number;
//   color: string;
// };

// export default createStyles({
//   root: (props: StyleProps) => ({
//     width: props.drawerWidth,
//   }),
//   paper: (props: StyleProps) => ({
//     width: props.drawerWidth,
//     backgroundColor: props.color,
//   }),
//   container: {
//     height: "100%",
//   },
// });

type SideDrawerProps = React.ComponentProps<typeof Drawer> & {
  children?: React.ReactNode;
  drawerWidth: string | number;
  color: string;
  sx?: SxProps<Theme>;
};
export const SideDrawer = ({
  sx = [],
  children,
  drawerWidth,
  color,
  ...rest
}: SideDrawerProps) => (
  <Drawer
    sx={[
      {
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: color,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  >
    {children}
  </Drawer>
);
