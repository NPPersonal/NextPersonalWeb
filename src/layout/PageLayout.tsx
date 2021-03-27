import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Hidden from '@material-ui/core/Hidden/Hidden';
import React from 'react';

type PageLayoutProps = React.ComponentProps<typeof Container> & {
    drawer?:React.ReactNode
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
        drawer,
        ...rest
    } = props;
    return (
        <Box display='flex'>
            <Hidden smDown>
                {drawer}
            </Hidden>
            <Container {...rest}>{children}</Container>
        </Box>
    );
};

export default PageLayout;