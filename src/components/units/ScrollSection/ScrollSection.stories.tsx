import React from 'react';
import Section from './ScrollSection';

export default {
    title: 'Section',
}

export const Default = ()=>{
    return (
        <Section>Content</Section>
    )
}

export const BGColor = ()=>{
    return (
        <Section bgcolor='#ff1' textAlign='center' pt={2}>Content</Section>
    )
}