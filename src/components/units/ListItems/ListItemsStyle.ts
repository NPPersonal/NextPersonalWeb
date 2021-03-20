import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    dividerColor:string,
}
export default createStyles({
    divider:(props:StyleProps)=>({
        borderColor: props.dividerColor,
    })
})