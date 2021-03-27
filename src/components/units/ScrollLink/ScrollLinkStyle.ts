import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    color: string,
    activeColor: string,
    isActive: boolean,
    underlineHeight: string | number,
    isUnderline: boolean,
}
export default createStyles({
    active:(props:StyleProps)=>({
        color:props.activeColor,
    }),
    link:(props:StyleProps)=>({
        position:'relative',
        color:props.color,
        cursor:'pointer',
        '&:after':{
            content:'""',
            position:'absolute',
            bottom:0,
            left:props.isActive || props.isUnderline? 0 : '50%',
            right:props.isActive || props.isUnderline? 0 : '50%',
            height:props.underlineHeight,
            backgroundColor:props.activeColor,
            transition: 'all 0.5s ease-in-out',
            borderRadius:'4px',
        }
    })
})