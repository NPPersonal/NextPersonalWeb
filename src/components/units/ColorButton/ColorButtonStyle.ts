import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    borderRadius:string,
    color:string,
    activeColor:string,
    hoverColor:string,
    titleColor:string,
    px:string | number,
    py:string | number,
    shadow:boolean,
}

export default createStyles({
    root:(props:StyleProps)=>({
        borderRadius: props.borderRadius,
        backgroundColor: props.color,
        borderColor: props.color,
        paddingLeft: props.px,
        paddingRight: props.px,
        paddingTop: props.py,
        paddingBottom: props.py,
        boxShadow: props.shadow? `
        0px 3px 1px -2px rgba(0,0,0,0.2), 
        0px 2px 2px 0px rgba(0,0,0,0.14), 
        0px 1px 5px 0px rgba(0,0,0,0.12)
        ` : 'none',
        '&:active':{
            backgroundColor: props.activeColor,
            borderColor: props.activeColor,
        },
        '&:hover':{
            backgroundColor: props.hoverColor,
            borderColor: props.hoverColor,
            boxShadow: props.shadow? `
            0px 2px 4px -1px rgba(0,0,0,0.2), 
            0px 4px 5px 0px rgba(0,0,0,0.14),
            0px 1px 10px 0px rgba(0,0,0,0.12)
            ` : 'none',
        },
    }),
    label:(props:StyleProps)=>({
        color:props.titleColor,
    })
})