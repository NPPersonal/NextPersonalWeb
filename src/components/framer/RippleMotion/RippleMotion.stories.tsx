import React from 'react';
import RippleMotion from './RippleMotion';

export default {
    title: 'Ripple Motion',
}

export const Default = ()=>{
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <button onClick={()=>setOpen(state=>!state)}>open</button>
            <RippleMotion 
            open={open}
            >
                <div style={{width:'100px', height:'100px'}}></div>
            </RippleMotion>
        </React.Fragment>
    )
}