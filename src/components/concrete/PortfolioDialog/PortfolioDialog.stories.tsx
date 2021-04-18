import React from 'react';
import PortfolioDialog from './PortfolioDialog';

export default {
    title: 'Portfolio Dialog',
}

const imageSlides1 = [
    'https://i.imgur.com/ssc7ZAo.png?1',
    'https://i.imgur.com/o0vHxBz.png?1',
    'https://i.imgur.com/O4LNgvw.png?1',
    'https://i.imgur.com/Fn1Gw4q.png?1',
    'https://i.imgur.com/U8ZmTS6.png?1',
    'https://i.imgur.com/PqOj7hn.png?1',
]

const imageSlides2 = [
    'https://i.imgur.com/AS7Dzj5.png',
    'https://i.imgur.com/gaDQJoI.png',
    'https://i.imgur.com/Yqc5Cip.png',
    'https://i.imgur.com/zwrDW50.png?1',
    'https://i.imgur.com/6XVXUQg.png',
]

export const Default = ()=>{
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <button onClick={()=>setOpen(true)}>open</button> 
            <PortfolioDialog 
                open={open}
                projectTitle='Project title'
                imageSlides={imageSlides1}
                projectDetail='This is project info'
                onClose={()=>setOpen(false)} 
                onBackdropClick={()=>setOpen(false)}   
                fullWidth   
            />
        </React.Fragment>
    )
}

export const ScrollBody = ()=>{
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <button onClick={()=>setOpen(true)}>open</button> 
            <PortfolioDialog 
                open={open}
                projectTitle='Project Title'
                imageSlides={imageSlides2}
                projectDetail='This is project info'
                onClose={()=>setOpen(false)} 
                onBackdropClick={()=>setOpen(false)}   
                fullWidth
                scroll='body'   
            />
        </React.Fragment>
    )
}

export const ColourdPaper = ()=>{
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <button onClick={()=>setOpen(true)}>open</button> 
            <PortfolioDialog 
                open={open}
                projectTitle='Project Title'
                imageSlides={imageSlides2}
                projectDetail='This is project info'
                onClose={()=>setOpen(false)} 
                onBackdropClick={()=>setOpen(false)}   
                fullWidth
                scroll='body' 
                color='#000'  
            />
        </React.Fragment>
    )
}
