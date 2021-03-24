
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    iconColor: string,
    toolTipColor: string,
    theme:Theme,
}
export default createStyles({
    svgIcon:(props:StyleProps)=>({
        color: props.iconColor,
        paddingLeft: props.theme.spacing(1),
        paddingRight: props.theme.spacing(1)
    }),
    tooltip:(props:StyleProps)=>({
        backgroundColor: props.toolTipColor
    }),
    tooltipArrow:(props:StyleProps)=>({
        color: props.toolTipColor
    })
})