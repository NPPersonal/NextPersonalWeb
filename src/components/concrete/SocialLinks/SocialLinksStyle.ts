
import { Theme } from '@mui/material/styles';

import createStyles from '@mui/styles/createStyles';

type StyleProps = {
    iconColor: string,
    toolTipColor: string,
    theme:Theme,
}
export default createStyles({
    wrapper:{
        '& a:last-of-type':{
            marginRight: 0,
        },
        '& a:first-of-type':{
            marginLeft: 0,
        }
    },
    link:(props:StyleProps)=>({
        marginRight: props.theme.spacing(2)
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