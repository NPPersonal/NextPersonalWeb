import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

type SkillLayoutProps = React.ComponentProps<typeof Box> & {
  header: React.ReactNode;
  skillGroup: React.ReactNode[];
  certificates: React.ReactNode;
};

const SkillLayout: React.FC<SkillLayoutProps> = (props: SkillLayoutProps) => {
  const { header, skillGroup, certificates, ...rest } = props;

  return (
    <Box {...rest}>
      <Container>
        {header}
        {skillGroup.map((group, i) => (
          <React.Fragment key={i}>{group}</React.Fragment>
        ))}
      </Container>
      <Container>{certificates}</Container>
    </Box>
  );
};

export default SkillLayout;
