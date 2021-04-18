import React from 'react';
import PortfolioCard from './PortfolioCard';


export default {
    title: 'Portfolio Card',
}

export const Default = ()=>{
    return (
       <PortfolioCard
       thumbnail='https://i.imgur.com/SZ7Uk7L.png'
       width={320}
       projectTitle='Project Title'
       projectCategory='Project Category'
       />
    )
}