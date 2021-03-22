import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';

type AboutLayoutProps = React.ComponentProps<typeof Box> & {
    header: React.ReactNode,
    brief: React.ReactNode,
    personInfo: React.ReactNode,
    cvDownloadButton: React.ReactNode,
    experiences: React.ReactNode[],
}
const AboutLayout:React.FC<AboutLayoutProps> = (props:AboutLayoutProps) => {
    const {
        header,
        brief,
        personInfo,
        cvDownloadButton,
        experiences,
        ...rest
    } = props;

    return (
        <Box {...rest}>
          <Container>
            {header}
            <Grid container justify='center'>
              <Grid item xs={12} sm={8}>
                {brief}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display='flex' flexDirection='column' alignItems='center'>  
                {personInfo}
                {cvDownloadButton}
                </Box>
              </Grid>
            </Grid>
            <Box mt={4}>
            <Grid container justify='center'>
              {experiences.map((exp, i)=>(
                <Grid key={i} item xs={6} sm={3}>
                  {exp}
                </Grid>
              ))}
            </Grid>
            </Box>
          </Container>
        </Box>
    );
};

export default AboutLayout;