import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    barColor: string,
    barMaskColor: string,
    progressRadius: string,
}
export default createStyles({
    determinate:(props:StyleProps)=>({
        backgroundColor: props.barMaskColor,
        borderRadius: props.progressRadius,
    }),
    bar1Determinate:(props:StyleProps)=>({
        backgroundColor: props.barColor,
        borderRadius: props.progressRadius,
    })
})