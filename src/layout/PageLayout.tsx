import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/styles/useTheme";
import React from "react";

type PageLayoutProps = React.ComponentProps<typeof Container> & {
  drawerWidth: number;
  drawer?: React.ReactNode;
  navigation?: React.ReactNode;
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
  const { children, drawerWidth, drawer, navigation, ...rest } = props;

  // const theme = useTheme();
  // const matchSMDown = useMediaQuery(theme.breakpoints.down("md"));

  // const container = {
  //   width: matchSMDown ? "100%" : `calc(100% - ${drawerWidth}px)`,
  // };

  return (
    <React.Fragment>
      <Hidden mdUp>{navigation}</Hidden>
      <Box display="flex">
        <Hidden mdDown>
          <Box width={drawerWidth}>{drawer}</Box>
        </Hidden>
        <Container {...rest} maxWidth={false}>
          {children}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default PageLayout;
