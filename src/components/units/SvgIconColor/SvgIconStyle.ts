import createStyles from '@mui/styles/createStyles';

type StyleProps = {
    iconColor:string,
}
export default createStyles({
    svgIcon:(props:StyleProps)=>({
        color: props.iconColor,
    })
})