import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    paperColor:string,
    closeBtnColor:string,
}
export default createStyles({
    paper:(props:StyleProps)=>({
        backgroundColor: props.paperColor,
    }),
    button:(props:StyleProps)=>({
        color: props.closeBtnColor,
    })
})