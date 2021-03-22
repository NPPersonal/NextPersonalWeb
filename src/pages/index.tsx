import Box from "@material-ui/core/Box/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { GetStaticProps } from "next/types/index";
import Brief from "../components/concrete/Brief/Brief";
import Counter from "../components/concrete/Counter/Counter";
import Header from "../components/concrete/OverlapHeader/OverlapHeader";
import PersonInfo from "../components/concrete/PersonInfo/PersonInfo";
import ColorButton from "../components/units/ColorButton/ColorButton";
import ParallaxHero from "../components/units/ParallaxHero/ParallaxHero";
import Section from "../components/units/Section/Section";
import AboutLayout from "../layout/AboutLayout";
import PageLayout from "../layout/PageLayout";
import { LaningPageProps } from "../pageUtils/LaningPage";
import SkillLayout from "../layout/SkillLayout";
import SkillSet from "../components/concrete/SkillSet/SkillSet";

export const getStaticProps: GetStaticProps<LaningPageProps> = async () => {
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
        `,
        experiences: [
          {
            number: 10,
            suffix: '+',
            title: 'Years Coding'
          },
          {
            number: 6,
            suffix: '+',
            title: 'Years IOS'
          },
          {
            number: 1,
            suffix: '+',
            title: 'Year React.JS'
          },
          {
            number: 7,
            suffix: '',
            title: 'Years Workout'
          }
        ]
      },
      skill:{
        group:[
          {
            title:'Web Development',
            skills:[
              {
                title: 'HTML/CSS',
                value: 78
              },
              {
                title: 'JavaScript',
                value: 78
              },
              {
                title: 'React.JS',
                value: 83
              },
              {
                title: 'Next.JS',
                value: 88
              }
            ]
          },
          {
            title:'IOS Development',
            skills:[
              {
                title: 'Objective-C',
                value: 80
              },
              {
                title: 'Swift',
                value: 77
              },
              {
                title: 'IOS Framework',
                value: 86
              },
            ]
          },
          {
            title:'Machine Learning',
            skills:[
              {
                title: 'Python',
                value: 55
              },
              {
                title: 'Scikit-Learn',
                value: 50
              },
            ]
          },
          {
            title:'DevOps',
            skills:[
              {
                title: 'Git',
                value: 89
              },
              {
                title: 'Travis-CI',
                value: 50
              },
              {
                title: 'Circle.CI',
                value: 38
              },
              {
                title: 'CocoaPods',
                value: 79
              },
              {
                title: 'NPM',
                value: 79
              },
              {
                title: 'Miniconda',
                value: 62
              },
            ]
          }
        ]
      }
    }
  }
}

/**
 * Landing Page
 * 
 * @param {LaningPageProps} props 
 * @returns 
 */
const LandingPage = (props:LaningPageProps) => {
  const theme = useTheme();
  const {
    hero:{ heroBgImageURL},
    about:{
      personName,
      occupation,
      age,
      location,
      email,
      brief,
      experiences,
    },
    skill:{
      group,
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
      <Section id='about-me' bgcolor={theme.palette.secondary.dark} 
      color={theme.palette.secondary.contrastText}>
        <AboutLayout
        py={10}
        header={
          <Header
          mb={4} 
          text='About me'
          textColor={theme.palette.secondary.light} 
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
          <PersonInfo
          personName={personName}
          age={age}
          location={location}
          email={email}
          emailColor={theme.palette.info.main}
          dividerColor={theme.palette.secondary.light}
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
        experiences={experiences.map(exp=>(
          <Box p={2}>
            <Counter start={0} end={exp.number} suffix={exp.suffix} caption={
              <Typography variant='h6' align='center'>{exp.title}</Typography>
            } />
          </Box>
        ))}
        />
      </Section>
      <Section id='skills' bgcolor={theme.palette.secondary.main}
      color={theme.palette.secondary.contrastText}
      >
        <SkillLayout
        py={10} 
        header={
          <Header
          mb={4} 
          text='Summary'
          textColor={theme.palette.secondary.light} 
          caption='I Have Learned'
          captionColor={theme.palette.secondary.contrastText}
          lineColor={theme.palette.info.main}
          />
        }
        skillGroup={group.map((g)=>(
          <SkillSet
          mb={8}
          barColor={theme.palette.info.main}
          barMaskColor={theme.palette.secondary.dark}
          key={g.title} 
          header={
            <Typography variant='h3' align='center'>{g.title}</Typography>
          }
          skills={g.skills.map(s=>{
            return {
              title:<Typography variant='h5'>{s.title}</Typography>,
              value:s.value
            }
          })}
          />
        ))}
        />
      </Section>
      <div style={{width:'100%', height:'1700px'}} />
    </PageLayout>
  );
};

export default LandingPage;
