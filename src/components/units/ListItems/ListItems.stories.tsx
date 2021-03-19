import { ThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../../../themes/defaultTheme';
import React from 'react';
import ListItems from './ListItems';

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
        <ThemeProvider theme={defaultTheme}>
            <ListItems items={items} />
        </ThemeProvider>
    )
}