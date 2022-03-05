import createStyles from '@mui/styles/createStyles';

type StyleProps = {
    color: string,
}
export default createStyles({
    root:(props:StyleProps)=>({
        backgroundColor: props.color,
    })
})