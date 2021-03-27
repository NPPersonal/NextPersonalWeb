import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    color:string,
}

export default createStyles({
    paper:(props:StyleProps)=>({
        backgroundColor: props.color,
    })
})