import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    barColor:string,
    barMaskColor:string,
    barRadius:string|number,
    barWidth:string|number,
    barHeight:string|number,
}
export default createStyles({
    root:(props:StyleProps)=>({
        borderRadius:props.barRadius,
        width:props.barWidth,
        height:props.barHeight,
    }),
    indeterminate:(props:StyleProps)=>({
        backgroundColor:props.barMaskColor,
    }),
    bar1Indeterminate:(props:StyleProps)=>({
        backgroundColor:props.barColor,
    }),
    bar2Indeterminate:(props:StyleProps)=>({
        backgroundColor:props.barColor,
    }),
    determinate:(props:StyleProps)=>({
        backgroundColor:props.barMaskColor,
    }),
    bar1Determinate:(props:StyleProps)=>({
        backgroundColor:props.barColor,
    }),
    dashed:(props:StyleProps)=>({
        backgroundImage: `radial-gradient(${props.barMaskColor} 0%, ${props.barMaskColor} 16%, transparent 42%);`
    }),
    bar1Buffer:(props:StyleProps)=>({
        backgroundColor:props.barColor,
    }),
    bar2Buffer:(props:StyleProps)=>({
        backgroundColor:props.barMaskColor,
    }),

})