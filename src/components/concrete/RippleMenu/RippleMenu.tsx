import { Fade, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Modal from '@material-ui/core/Modal/Modal';
import React from 'react';
import HamburgerToggle, { HamburgerToggleProps } from '../../framer/HamburgerToggle/HamburgerToggle';
import RippleMotion from '../../framer/RippleMotion/RippleMotion';
import { springTransition } from '../../framer/Transition';

type HamburgerToggler = Pick<HamburgerToggleProps, 'onClick'>;
type RippleMenuProps = React.ComponentProps<typeof Box> & HamburgerToggler & {
    open:boolean,
    items:React.ReactNode[],
    toggleColor?:string,
    menuColor?:string,
    
}
const RippleMenu:React.FC<RippleMenuProps> = (props:RippleMenuProps) => {
    const {
        open,
        items,
        toggleColor,
        menuColor,
        onClick,
        ...rest
    } = props;


    const theme = useTheme()

    return (
        <Box {...rest}>
            <HamburgerToggle 
            toggle={open} 
            onClick={onClick} 
            zIndex={open?theme.zIndex.modal+1:0}
            size={28} 
            color={toggleColor}
            />
            <Modal
            hideBackdrop
            open={open} 
            disablePortal
            closeAfterTransition
            aria-labelledby="dropdown-modal"
            aria-describedby="dropdown-modal-description"
            >

                <Fade in={open} timeout={{
                    exit:800
                }}>
                    <RippleMotion 
                    open={open}
                    color={menuColor}
                    openTransition={springTransition(600, 100, 0.1)}
                    closedTransition={springTransition(undefined, undefined, 0, undefined, 2)}
                    >
                        <Box pt={5} display='flex' justifyContent='center'>
                            <List>
                                {items.map((item, i)=>{
                                    return (
                                        <ListItem key={i}>{item}</ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </RippleMotion>
                </Fade>
            </Modal>
        </Box>
    )
};

export default RippleMenu;