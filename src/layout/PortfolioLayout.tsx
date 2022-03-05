import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

type PortfolioLayout = React.ComponentProps<typeof Box> & {
  header: React.ReactNode;
  portfolios: React.ReactNode;
};

const PortfolioLayout: React.FC<PortfolioLayout> = (props: PortfolioLayout) => {
  const { header, portfolios, ...rest } = props;
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
