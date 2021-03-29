import AppBar, { AppBarProps } from '@material-ui/core/AppBar/AppBar';
import Box from '@material-ui/core/Box/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React from 'react';
import style from './StickyNavStyle';

type AppBarWithoutProps = Omit<AppBarProps, 'color' | 'position'>;
type StickyNavProps = AppBarWithoutProps & {
    children?: React.ReactNode,
    color?: string,
    brand?: React.ReactNode,
}

const StickyNav:React.FC<StickyNavProps> = (props:StickyNavProps) => {
    const {
        color = 'lightblue',
        brand,
        children,
        ...rest
    } = props;

    const classes = makeStyles(style)({
        color,
    })

    const appBarClasses = {
        root: classes.root,
    }

    return (
        <AppBar {...rest} classes={appBarClasses} position='sticky'>
            <Toolbar>
            <Box flexGrow={1}>{brand}</Box>
            <Box flexGrow={1} display='flex' justifyContent='flex-end' alignItems='center'>{children}</Box>
            </Toolbar>
        </AppBar>
    );
};

export default StickyNav;