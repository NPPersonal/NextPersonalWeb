import React from 'react';
import SocialLinks from './SocialLinks';

export default {
    title: 'Social links',
}

const icons = [
    {
      kind: 'Github',
      link:'https://github.com/',
      toolTip:'Github'
    },
    {
      kind: 'LinkedIn',
      link:'https://www.linkedin.com/',
      toolTip:'LinkedIn'
    },
    {
      kind: 'Medium',
      link:'https://medium.com/',
      toolTip:'Medium'
    },
    {
      kind: 'Facebook',
      link:'https://www.facebook.com/',
      toolTip:'Facebook'
    }
  ]

export const Default = ()=>{
    return (
        <SocialLinks 
        socialIcons={icons}
        />
    )
}

export const Color = ()=>{
    return (
        <SocialLinks 
        socialIcons={icons}
        iconColor='red'
        />
    )
}

export const Large = ()=>{
    return (
        <SocialLinks 
        socialIcons={icons}
        iconColor='black'
        iconSize='large'
        />
    )
}

export const Small = ()=>{
    return (
        <SocialLinks 
        socialIcons={icons}
        iconColor='black'
        iconSize='small'
        />
    )
}

export const TooltipRight = ()=>{
    return (
        <SocialLinks 
        socialIcons={icons}
        toolTipPlacement = 'right'
        />
    )
}

export const TooltipColor = ()=>{
    return (
        <SocialLinks 
        socialIcons={icons}
        toolTipColor = 'lightblue'
        />
    )
}