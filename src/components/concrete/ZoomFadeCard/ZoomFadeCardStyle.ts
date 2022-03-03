import { fade } from "@material-ui/core/styles/colorManipulator";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

type StyleProps = {
  theme: Theme;
  width: string | number;
  imageScale: number;
  maskColor: string;
  maskOpacity: number;
  zoomTime: number;
};
export default createStyles({
  root: (props: StyleProps) => ({
    width: props.width,
  }),
  img: (props: StyleProps) => ({
    display: "block",
    transform: `scale(${props.imageScale})`,
    transition: `all ${props.zoomTime}ms ease-in-out !important`,
  }),
  actionArea: {
    position: "relative",
  },
  mask: (props: StyleProps) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: fade(props.maskColor, props.maskOpacity),
    color: props.theme.palette.getContrastText(props.maskColor),
  }),
});
