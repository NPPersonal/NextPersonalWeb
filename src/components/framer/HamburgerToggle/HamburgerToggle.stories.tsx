import React from 'react';
import HamburgerToggle from './HamburgerToggle';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Hamburger Toggle',
}

export const Default = ()=>{
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
        <HamburgerToggle toggle={toggle} onClick={()=>setToggle(state=>!state)} />
    )
}

export const Color = ()=>{
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
        <HamburgerToggle toggle={toggle} color='red' onClick={()=>setToggle(state=>!state)}/>
    )
}

export const LineWidth = ()=>{
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
        <HamburgerToggle toggle={toggle} color='blue' strokeWidth={2} onClick={()=>setToggle(state=>!state)} />
    )
}

export const Size = ()=>{
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
        <HamburgerToggle toggle={toggle} size={70} onClick={()=>setToggle(state=>!state)}/>
    )
}

export const Event = ()=>{
    const [toggle, setToggle] = React.useState<boolean>(false);

    const handleClick = ()=>{
        setToggle(state=>!state);
        action('event')(!toggle);
    }
    return (
        <HamburgerToggle toggle={toggle} onClick={handleClick} />
    )
}