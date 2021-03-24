import React from 'react';
import SocialLinks from './SocialLinks';

export default {
    title: 'Social links',
}

export const Default = ()=>{
    return (
        <SocialLinks 
        github={{
            link:'https://github.com/',
            toolTip:'Github'
        }}
        linkedin={{
            link:'https://linkedin.com/',
            toolTip:'Linked In'
        }}
        medium={{
            link:'https://medium.com/',
            toolTip:'Medium'
        }}
        facebook={{
            link:'https://facebook.com/',
            toolTip:'Facebook'
        }}
        />
    )
}

export const Color = ()=>{
    return (
        <SocialLinks 
        github={{
            link:'https://github.com/',
            toolTip:'Github'
        }}
        linkedin={{
            link:'https://linkedin.com/',
            toolTip:'Linked In'
        }}
        medium={{
            link:'https://medium.com/',
            toolTip:'Medium'
        }}
        facebook={{
            link:'https://facebook.com/',
            toolTip:'Facebook'
        }}
        iconColor='red'
        />
    )
}

export const Large = ()=>{
    return (
        <SocialLinks 
        github={{
            link:'https://github.com/',
            toolTip:'Github'
        }}
        linkedin={{
            link:'https://linkedin.com/',
            toolTip:'Linked In'
        }}
        medium={{
            link:'https://medium.com/',
            toolTip:'Medium'
        }}
        facebook={{
            link:'https://facebook.com/',
            toolTip:'Facebook'
        }}
        iconColor='black'
        iconSize='large'
        />
    )
}

export const Small = ()=>{
    return (
        <SocialLinks 
        github={{
            link:'https://github.com/',
            toolTip:'Github'
        }}
        linkedin={{
            link:'https://linkedin.com/',
            toolTip:'Linked In'
        }}
        medium={{
            link:'https://medium.com/',
            toolTip:'Medium'
        }}
        facebook={{
            link:'https://facebook.com/',
            toolTip:'Facebook'
        }}
        iconColor='black'
        iconSize='small'
        />
    )
}

export const TooltipRight = ()=>{
    return (
        <SocialLinks 
        github={{
            link:'https://github.com/',
            toolTip:'Github'
        }}
        linkedin={{
            link:'https://linkedin.com/',
            toolTip:'Linked In'
        }}
        medium={{
            link:'https://medium.com/',
            toolTip:'Medium'
        }}
        facebook={{
            link:'https://facebook.com/',
            toolTip:'Facebook'
        }}
        toolTipPlacement = 'right'
        />
    )
}

export const TooltipColor = ()=>{
    return (
        <SocialLinks 
        github={{
            link:'https://github.com/',
            toolTip:'Github'
        }}
        linkedin={{
            link:'https://linkedin.com/',
            toolTip:'Linked In'
        }}
        medium={{
            link:'https://medium.com/',
            toolTip:'Medium'
        }}
        facebook={{
            link:'https://facebook.com/',
            toolTip:'Facebook'
        }}
        toolTipColor = 'lightblue'
        />
    )
}