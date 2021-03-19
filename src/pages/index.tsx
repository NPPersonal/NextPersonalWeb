import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import { GetStaticProps } from "next/types/index";
import React from "react";
import ParallaxHero from "../components/units/ParallaxHero/ParallaxHero";
import Section from "../components/units/Section/Section";
import PageLayout from "../layout/PageLayout";

type IPageProps = {
  heroBgImageURL: string,
}

export const getStaticProps: GetStaticProps<IPageProps> = async () => {
  return {
    props:{
      heroBgImageURL: 'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg',
    }
  }
}

const LandingPage = (props:IPageProps) => {
  const theme = useTheme();
  const {
    heroBgImageURL,
  } = props;

  return (
    <PageLayout maxWidth='xl' disableGutters>
      <Section id='home'>
        <ParallaxHero
        py={30}
        bgImage={heroBgImageURL}
        maskColor={theme.palette.primary.dark}
        maskOpacity={0.7}
        color={theme.palette.primary.contrastText}
        >
          <React.Fragment>
            <Typography variant='h6' align='center' paragraph>Welcome</Typography>
            <Typography variant='h3' align='center' paragraph>I am Ming-Chung Hung</Typography>
            <Typography variant='h6' align='center' paragraph>Los Angeles, California.</Typography>
          </React.Fragment>
        </ParallaxHero> 
      </Section>
      <div style={{width:'100%', height:'1700px'}} />
    </PageLayout>
  );
};

export default LandingPage;
