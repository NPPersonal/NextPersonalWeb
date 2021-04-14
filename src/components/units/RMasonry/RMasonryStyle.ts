import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
    theme:Theme,
    gutter:number,
}

export default createStyles({
    masonryGrid:(props:StyleProps)=>({
        display: 'flex',
        marginLeft: props.theme.spacing(-props.gutter)
    }),
    masonryColumn:(props:StyleProps)=>({
        paddingLeft: props.theme.spacing(props.gutter),
        backgroundClip: 'padding-box',
    })
})