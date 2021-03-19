import Container from '@material-ui/core/Container/Container';
import React from 'react';

type PageLayoutProps = React.ComponentProps<typeof Container>;

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
        ...rest
    } = props;
    return (
        <Container {...rest}>{children}</Container>
    );
};

export default PageLayout;