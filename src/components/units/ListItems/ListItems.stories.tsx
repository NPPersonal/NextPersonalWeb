import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import defaultTheme from '../../../themes/defaultTheme';
import React from 'react';
import ListItems from './ListItems';



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default {
    title: 'ListItems',
}

const items = [
    {
        label: 'Name: ',
        value: 'Nelson'
    },
    {
        label: 'Age: ',
        value: '33'
    },
    {
        label: 'From: ',
        value: 'USA'
    },
    {
        label: 'E-mail: ',
        value: <a href='#'>nelson@gmail.com</a>
    }
]

export const Default = ()=>{
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={defaultTheme}>
                <ListItems items={items} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}