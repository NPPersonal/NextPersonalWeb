import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Hidden from '@material-ui/core/Hidden/Hidden';
import React from 'react';

type PageLayoutProps = React.ComponentProps<typeof Container> & {
    drawerWidth:number,
    drawer?:React.ReactNode,
    navigation?:React.ReactNode,
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
const PageLayout:React.FC<PageLayoutProps> = (props:PageLayoutProps) => {
    const {
        children,
        drawerWidth,
        drawer,
        navigation,
        ...rest
    } = props;

    const theme = useTheme()
    const matchSMDown = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = makeStyles({
        container:{
            width:matchSMDown?'100%':`calc(100% - ${drawerWidth}px)`
        }
    })();   

    return (
        <React.Fragment>
            <Hidden mdUp>
            {navigation}
            </Hidden>
            <Box display='flex'>
                <Hidden smDown>
                    <Box width={drawerWidth}>{drawer}</Box>
                </Hidden>
                <Container {...rest} className={classes.container}>{children}</Container>
            </Box>
        </React.Fragment>
    );
};

export default PageLayout;