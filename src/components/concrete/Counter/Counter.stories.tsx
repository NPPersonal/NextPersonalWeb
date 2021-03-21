import React from 'react';
import Counter from './Counter';

export default {
    title: 'Counter',
}

export const Default = ()=>{
    return (
        <Counter start={0} end={100} />
    )
}

export const Prefix = ()=>{
    return (
        <Counter prefix='+' start={0} end={100} />
    )
}

export const Suffix = ()=>{
    return (
        <Counter suffix='+' start={0} end={100} />
    )
}

export const Duration = ()=>{
    return (
        <Counter suffix='+' start={0} end={100} duration={3.3} />
    )
}