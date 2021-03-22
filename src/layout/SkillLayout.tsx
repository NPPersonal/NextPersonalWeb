import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import React from 'react';

type SkillLayoutProps = React.ComponentProps<typeof Box> & {
    header: React.ReactNode,
    skillGroup: React.ReactNode[],
}

const SkillLayout:React.FC<SkillLayoutProps> = (props:SkillLayoutProps) => {
    const {
        header,
        skillGroup,
        ...rest
    } = props;

    return (
       <Box {...rest}>
           <Container>
               {header}
               {skillGroup.map((group, i)=>(
                   <React.Fragment key={i}>{group}</React.Fragment>
                ))}
           </Container>
       </Box>
    );
};

export default SkillLayout;