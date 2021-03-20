import React from 'react';
import ColorButton from './ColorButton';

export default {
    title: 'ColorButton',
}

export const Default = ()=>{
    return (
        <ColorButton>Download CV</ColorButton>
    )
}

export const NoRipple = ()=>{
    return (
        <ColorButton disableRipple>Download CV</ColorButton>
    )
}

export const NoShadow = ()=>{
    return (
        <ColorButton disableRipple shadow={false}>Download CV</ColorButton>
    )
}

export const Color = ()=>{
    return (
        <ColorButton 
        disableRipple
        color='lightblue'
        hoverColor='cyan'
        >
            Download CV
        </ColorButton>
    )
}