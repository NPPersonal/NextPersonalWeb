import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    width:string|number,
    imageScale:number,
}
export default createStyles({
    root:(props:StyleProps)=>({
        width: props.width,
    }),
    image:(props:StyleProps)=>({
        display:'block',
        transform: `scale(${props.imageScale})`,
        transition: 'all 500ms ease-in-out'
    })
})