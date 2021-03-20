import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import { GetStaticProps } from "next/types/index";
import React from "react";
import Brief from "../components/concrete/Brief/Brief";
import Header from "../components/concrete/OverlapHeader/OverlapHeader";
import Personinfo from "../components/concrete/PersonInfo/Personinfo";
import ColorButton from "../components/units/ColorButton/ColorButton";
import ParallaxHero from "../components/units/ParallaxHero/ParallaxHero";
import Section from "../components/units/Section/Section";
import AboutLayout from "../layout/AboutLayout";
import PageLayout from "../layout/PageLayout";

type IPageProps = {
  hero:{
    heroBgImageURL: string,
  },
  about:{
    personName: string,
    occupation: string,
    brief: string,
    age: string,
    location: string,
    email: string,
  }
}

export const getStaticProps: GetStaticProps<IPageProps> = async () => {
  return {
    props:{
      hero:{
        heroBgImageURL: 'https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg',
      },
      about:{
        personName: 'Ming-Chun Hung',
        occupation: 'a Developer',
        age: '33',
        location: 'USA',
        email: 'tomneo2004@gmail.com',
        brief: `
        I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.

        Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
        `
      }
    }
  }
}

const LandingPage = (props:IPageProps) => {
  const theme = useTheme();
  const {
    hero:{ heroBgImageURL},
    about:{
      personName,
      occupation,
      age,
      location,
      email,
      brief
    }
  } = props;

  return (
    <PageLayout maxWidth='xl' disableGutters>
      <Section id='home' color={theme.palette.primary.contrastText}>
        <ParallaxHero
        py={30}
        bgImage={heroBgImageURL}
        maskColor={theme.palette.primary.dark}
        maskOpacity={0.8}
        >
          <React.Fragment>
            <Typography variant='h6' align='center' paragraph>Welcome</Typography>
            <Typography variant='h3' align='center' paragraph>I am Ming-Chung Hung</Typography>
            <Typography variant='h6' align='center' paragraph>Los Angeles, California.</Typography>
          </React.Fragment>
        </ParallaxHero> 
      </Section>
      <Section id='about' bgcolor={theme.palette.secondary.dark} 
      color={theme.palette.secondary.contrastText}>
        <AboutLayout
        pt={10}
        header={
          <Header 
          text='About me'
          textColor={theme.palette.secondary.main} 
          caption='Know Me More'
          captionColor={theme.palette.secondary.contrastText}
          lineColor={theme.palette.info.main}
          />
        }
        brief={
          <Brief
          color={theme.palette.secondary.contrastText} 
          personName='Ming-Chun Hung, '
          personNameColor={theme.palette.info.main}
          occupation={occupation}
          brief={brief}
          />
        }
        personInfo={
          <Personinfo
          personName={personName}
          age={age}
          location={location}
          email={email}
          emailColor={theme.palette.info.main}
          />
        }
        cvDownloadButton={
          <ColorButton 
          disableRipple 
          color={theme.palette.info.main} 
          hoverColor={theme.palette.info.dark}
          titleColor={theme.palette.secondary.contrastText}
          >
            <Typography variant='h6'>Download CV</Typography>
          </ColorButton>
        }
        />
      </Section>
      <div style={{width:'100%', height:'1700px'}} />
    </PageLayout>
  );
};

export default LandingPage;
