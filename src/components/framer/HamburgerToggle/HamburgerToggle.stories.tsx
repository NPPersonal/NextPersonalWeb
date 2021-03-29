import React from 'react';
import HamburgerToggle from './HamburgerToggle';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Hamburger Toggle',
}

export const Default = ()=>{
    return (
        <HamburgerToggle />
    )
}

export const Color = ()=>{
    return (
        <HamburgerToggle color='red' />
    )
}

export const LineWidth = ()=>{
    return (
        <HamburgerToggle color='blue' strokeWidth={2} />
    )
}

export const Size = ()=>{
    return (
        <HamburgerToggle size={70} />
    )
}

export const Event = ()=>{
    const handleClick = (open:boolean)=>{
        action('event')(open);
    }
    return (
        <HamburgerToggle onClick={handleClick} />
    )
}