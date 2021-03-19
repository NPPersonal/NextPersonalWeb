import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

/**
 * Color scheme reference https://visme.co/blog/website-color-schemes/
 * 
 * No. 27 Gorgeous Contrast
 * 
 * Dark & Light color generator https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/474B4F/71/75/79/white
 */

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222629',
    },
    secondary: {
      main: '#474B4F',
    },
    info:{
      main: '#86C232',
    },
    background: {
      default: "#222629",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: { height: "100vh" },
        body: { height: "100%"},
      },
    },
  },
});

export default responsiveFontSizes(theme);
