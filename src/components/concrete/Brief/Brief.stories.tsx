import { ThemeProvider, Theme, StyledEngineProvider, useTheme } from '@mui/material/styles';
import defaultTheme from '../../../themes/defaultTheme';
import React from 'react';
import Brief from './Brief';
import { Box } from '@mui/material';



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default {
    title: 'Brief',
}

const brief = `
I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.

Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
`;

export const Default = ()=>{
    const theme = useTheme();
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={defaultTheme}>
                <Box bgcolor={theme.palette.primary.main}>
                <Brief 
                color={theme.palette.primary.contrastText} 
                personName='Nelson, ' 
                personNameColor={theme.palette.info.main}
                occupation='a web developer' 
                brief={brief}
                briefColor={theme.palette.primary.contrastText} 
                />
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}