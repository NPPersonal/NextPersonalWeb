import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import ParallaxHero from "../components/units/ParallaxHero/ParallaxHero";
import Section from "../components/units/Section/Section";
import PageLayout from "../layout/PageLayout";


const LandingPage = () => {

  return (
    <PageLayout maxWidth='xl' disableGutters>
      <Section id='home'>
        <ParallaxHero
        py={30}
        bgImage='https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg'
        maskColor='#000'
        maskOpacity={0.6}
        color='#fff'
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
