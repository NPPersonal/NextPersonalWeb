import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    width:string|number,
    contentHeight:string|number,
}
export default createStyles({
    card:(props:StyleProps)=>({
        width:props.width,
    }),
    headerContent:{
        width:'100%',
    },
    headerTitle:{
        textOverflow:'ellipsis'
    },
    media:{
        height:0,
        paddingTop:'56.25%'
    },
    content:(props:StyleProps)=>({
        height:props.contentHeight,
        overflow:'scroll'
    }),
    actions:{
        display:'flex',
        justifyContent:'center'
    }
})