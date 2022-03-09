import { Breakpoint, NoSsr, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import useTheme from "@mui/styles/useTheme";
import React from "react";

type PageLayoutProps = React.ComponentProps<typeof Container> & {
  drawer?: React.ReactNode;
  /** same as the width you set to drawer component */
  drawerWidth: string;
  /** when drawer is shown then navigation will be hidden */
  navigation?: React.ReactNode;
  /** start from screen size and up where drawer need to be shown */
  drawerStartBreakpoint?: number | Breakpoint;
};

/**
 * PageLayout use to layout each page
 *
 * Child content is always stay at center
 *
 * PageLayout wrapped Material-UI Container
 * https://material-ui.com/components/container/
 *
 * @param {PageLayoutProps} props
 * @returns
 */
const PageLayout: React.FC<PageLayoutProps> = (props: PageLayoutProps) => {
  const {
    children,
    drawer,
    drawerWidth,
    navigation,
    drawerStartBreakpoint = "lg",
  } = props;

  const theme = useTheme();
  const onDrawer = useMediaQuery(theme.breakpoints.up(drawerStartBreakpoint));

  return (
    <NoSsr>
      <Container
        disableGutters
        maxWidth={false}
        sx={[
          {
            display: "flex",
            flexDirection: onDrawer ? "row" : "column",
          },
        ]}
      >
        {onDrawer ? drawer : navigation}
        <Container
          sx={[
            //calculate content size from drawer
            { width: `${onDrawer ? `calc(100% - ${drawerWidth})` : "100%"}` },
          ]}
          disableGutters
          maxWidth={false}
        >
          {children}
        </Container>
      </Container>
    </NoSsr>
  );
};

export default PageLayout;
