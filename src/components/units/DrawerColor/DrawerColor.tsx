import Container from '@material-ui/core/Container/Container';
import Drawer from '@material-ui/core/Drawer/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import style from './DrawerStyle';

type DrawerColorPorps = React.ComponentProps<typeof Drawer> & {
    color?:string,
}
const DrawerColor:React.FC<DrawerColorPorps> = (props:DrawerColorPorps) => {
    const {
        children,
        color = 'grey',
        ...rest
    } = props;

    const classes = makeStyles(style)({
        color,
    });

    const drawerClasses = {
        paper: classes.paper,
    }
    
    return (
        <Drawer 
        {...rest}
        classes={drawerClasses}
        >
            <Container>
                {children}
            </Container>
        </Drawer>
    );
};

export default DrawerColor;