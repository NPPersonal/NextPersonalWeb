
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    iconColor: string,
    toolTipColor: string,
    theme:Theme,
}
export default createStyles({
    link:(props:StyleProps)=>({
        marginLeft: props.theme.spacing(1),
        marginRight: props.theme.spacing(1)
    }),
    svgIcon:(props:StyleProps)=>({
        color: props.iconColor,
    }),
    tooltip:(props:StyleProps)=>({
        backgroundColor: props.toolTipColor
    }),
    tooltipArrow:(props:StyleProps)=>({
        color: props.toolTipColor
    })
})