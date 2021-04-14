import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    width:string|number,
}
export default createStyles({
    root:(props:StyleProps)=>({
        width: props.width,
    }),
    image:{
        display:'block',
    }
})