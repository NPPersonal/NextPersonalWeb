import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    size: number | string,
    ringColor: string,
    ringWidth: number,
}
export default createStyles({
    root:(props:StyleProps)=>({
        width: props.size,
        height: props.size,
        border: `${props.ringWidth}px solid ${props.ringColor}`
    })
})