import React from 'react';
import SizeAvatar from './SizeAvatar';


export default {
    title: 'Size Avatar',
}

const imageSrc = 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

export const Default = ()=>{
    return (
        <SizeAvatar src={imageSrc} />
    )
}

export const Size = ()=>{
    return (
        <SizeAvatar src={imageSrc} size={100} />
    )
}

export const Ring = ()=>{
    return (
        <SizeAvatar src={imageSrc} size={100} ringColor='blue' ringWidth={3} />
    )
}

export const Caption = ()=>{
    return (
        <SizeAvatar 
        src={imageSrc} 
        size={100} 
        ringColor='blue' 
        ringWidth={3} 
        caption={
            <span>Mr. Handsome</span>
        }
        />
    )
}