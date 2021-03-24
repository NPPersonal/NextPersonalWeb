import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    iconColor:string,
}
export default createStyles({
    svgIcon:(props:StyleProps)=>({
        color: props.iconColor,
    })
})