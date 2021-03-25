import React from 'react';
import CrossMotion from './CrossMotion';

export default {
    title: 'Cross Motion',
}

export const Default = ()=>{
    return (
        <div style={{width:200, height:200}}>
        <CrossMotion />
        </div>
    )
}

export const Color = ()=>{
    return (
        <div style={{width:400, height:400}}>
        <CrossMotion color='red' />
        </div>
    )
}