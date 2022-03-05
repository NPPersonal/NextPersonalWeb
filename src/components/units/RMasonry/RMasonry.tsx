import useTheme from "@mui/styles/useTheme";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";
import Masonry from "react-masonry-css";
import style from "./RMasonryStyle";
import NoSsr from "@mui/material/NoSsr";

type RMasonryProps = React.HTMLAttributes<HTMLElement> & {
  xsCols?: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  xlCols?: number;
  gutter?: number;
};

const RMasonry: React.FC<RMasonryProps> = (props: RMasonryProps) => {
  const {
    children,
    xsCols = 1,
    smCols = 1,
    mdCols = 2,
    lgCols = 3,
    xlCols = 4,
    gutter = 4,
    ...rest
  } = props;

  const theme = useTheme();

  const classes = makeStyles(style)({
    theme,
    gutter,
  });

  const breakpointCols = {
    default: 4,
    [theme.breakpoints.values.xs]: xsCols,
    [theme.breakpoints.values.sm]: smCols,
    [theme.breakpoints.values.md]: mdCols,
    [theme.breakpoints.values.lg]: lgCols,
    [theme.breakpoints.values.xl]: xlCols,
  };

  return (
    <NoSsr>
      <Masonry
        breakpointCols={breakpointCols}
        className={classes.masonryGrid}
        columnClassName={classes.masonryColumn}
        {...rest}
      >
        {children}
      </Masonry>
    </NoSsr>
  );
};

export default RMasonry;
