import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Masonry from 'react-masonry-css'
import style from './RMasonryStyle';

type RMasonryProps = React.HTMLAttributes<HTMLElement> & {
    xsCols?:number,
    smCols?:number,
    mdCols?:number,
    lgCols?:number,
    xlCols?:number,
    gutter?:number,
}

const RMasonry:React.FC<RMasonryProps> = (props:RMasonryProps) => {
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
        gutter
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
        <Masonry
        breakpointCols={breakpointCols}
        className={classes.masonryGrid}
        columnClassName={classes.masonryColumn}
        {...rest}
        >
            {children}
        </Masonry>
    );
};

export default RMasonry;