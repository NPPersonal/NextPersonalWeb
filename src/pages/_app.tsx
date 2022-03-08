import React from "react";
import Head from "next/head";
import theme from "../themes/defaultTheme";
import { AppProps } from "next/app";
import ErrorBoundary from "../components/units/ErrorBoundary/ErrorBoundary";
import LinkTo from "../components/units/LinkTo/LinkTo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThemeProvider from "@mui/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function PersonalWebApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=1, user-scalable=0, width=device-width"
        />
      </Head>

      <ErrorBoundary
        fallback={
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2">
              Oooops ! Looks like somthing is not right
            </Typography>
            <LinkTo text="Back to home" linkTo="/" />
          </Box>
        }
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </ErrorBoundary>
    </CacheProvider>
  );
}
