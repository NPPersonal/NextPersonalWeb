import React from 'react';
import ParallaxHero from './ParallaxHero';

export default {
    title: 'Hero',
}

export const Default = ()=>{
    return (
        <div>
            <ParallaxHero
            py={20} 
            bgImage='https://images.unsplash.com/photo-1614862876404-6866712b4a17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
            >
               <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                    <div>Welcome</div>
                    <div>I am Ming-Chung Hung</div>
                    <div>Los Angeles, California.</div>
               </div> 
            </ParallaxHero>
        <div style={{width:'100%', height:'700px'}} />
        </div>
    )
}