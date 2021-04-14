import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import React from 'react';

type PortfolioLayout = React.ComponentProps<typeof Box> & {
    header: React.ReactNode,
    portfolios: React.ReactNode,
}

const PortfolioLayout:React.FC<PortfolioLayout> = (props:PortfolioLayout) => {
    const {
        header,
        portfolios,
        ...rest
    } = props;
    return (
        <Box {...rest}>
            <Container>
                {header}
                {portfolios}
            </Container>
        </Box>
    );
};

export default PortfolioLayout;