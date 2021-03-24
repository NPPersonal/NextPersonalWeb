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