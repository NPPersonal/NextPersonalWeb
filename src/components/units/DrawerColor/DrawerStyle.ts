import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    drawerWidth: number,
    color:string,
}

export default createStyles({

    root:(props:StyleProps)=>({
        width: props.drawerWidth,
    }),
    paper:(props:StyleProps)=>({
        width: props.drawerWidth,
        backgroundColor: props.color,
    }),
    container:{
        height:'100%',
    }
})