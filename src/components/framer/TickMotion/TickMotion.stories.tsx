import React from 'react';
import TickMotion from './TickMotion';

export default {
    title: 'Tick Motion',
}

export const Default = ()=>{
    return (
        <div style={{width:200, height:200}}>
        <TickMotion />
        </div>
    )
}

export const Color = ()=>{
    return (
        <div style={{width:200, height:200}}>
        <TickMotion color='green' />
        </div>
    )
}