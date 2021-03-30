import React from 'react';
import RippleMenu from './RippleMenu';

export default {
    title: 'Dropdown',
}

export const Default = ()=>{
    const [toggle, setToggle] = React.useState<boolean>(false);

    return (
        <RippleMenu 
        open={toggle}
        items={[
            'Item 1',
            'Item 1',
            'Item 1',
            'Item 1',
            'Item 1',
            'Item 1',
            'Item 1',
        ]}
        onClick={()=>setToggle(state=>!state)}
        />
    )
}