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
import Section from "../components/units/ScrollSection/ScrollSection";
import AboutLayout from "../layout/AboutLayout";
import PageLayout from "../layout/PageLayout";
import { LaningPageProps } from "../pageUtils/LaningPage";
import SkillLayout from "../layout/SkillLayout";
import SkillSet from "../components/concrete/SkillSet/SkillSet";
import ContactLayout from "../layout/ContactLayout";
import ListItems from "../components/units/ListItems/ListItems";
import PhoneIcon from '../assets/icons/phone-solid.inline.svg';
import MobileIcon from '../assets/icons/mobile-alt-solid.inline.svg';
import EmailIcon from '../assets/icons/envelope-solid.inline.svg';
import SvgIconColor from "../components/units/SvgIconColor/SvgIconColor";
import SocialLinks from "../components/concrete/SocialLinks/SocialLinks";
import ContactForm from "../components/concrete/ContactForm/ContactForm";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import DrawerColor from "../components/units/DrawerColor/DrawerColor";
import ScrollLink from "../components/units/ScrollLink/ScrollLink";
import SizeAvatar from "../components/units/SizeAvatar/SizeAvatar";
import avatarURL from '../assets/profile/profile-avatar.png';

export const getStaticProps: GetStaticProps<LaningPageProps> = async () => {
  return {
    props:{
      common:{
        contact:{
          location: 'No. 46, Dongcheng 1st St., North Dist., Taichung City 404001, Taiwan (R.O.C.)',
          phone: '(04) 2231-6495',
          mobile: '(09) 52669-909',
          email: 'tomneo2004@gmail.com'
        },
        socialLinks:{
          github:'https://github.com/tomneo2004/',
          linkedIn: 'https://www.linkedin.com/in/ming-chung-hung-38125a117/',
          medium: 'https://tomneo2004.medium.com/',
          facebook: 'https://www.facebook.com/punch.nelson'
        }
      },
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
    common:{
      contact,
      socialLinks,
    },
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
    <PageLayout 
    maxWidth='xl' 
    disableGutters
    drawer={
      <DrawerColor 
        variant='permanent' 
        anchor='left' 
        color={theme.palette.primary.main}
        >
          <Box 
          display='flex' 
          flexDirection='column' 
          justifyContent='space-between' 
          alignItems='center'
          height='100%'
          py={2}
          >
            <SizeAvatar
            src={avatarURL}
            size={200}
            ringColor={theme.palette.primary.light}
            ringWidth={theme.spacing(1)}
            caption={
              <Box color={theme.palette.primary.contrastText} pt={1}>
                <Typography variant='h6' align='center'>{personName}</Typography>
              </Box>
            }
            />
            <Typography variant='h6'>
              <List>
                <ListItem dense>
                  <ScrollLink 
                  to='home' 
                  spy={true} 
                  smooth={true}
                  color={theme.palette.primary.contrastText}
                  activeColor={theme.palette.info.main}
                  >
                    Home
                  </ScrollLink>
                </ListItem>
                <ListItem dense>
                  <ScrollLink 
                  to='about-me' 
                  spy={true} 
                  smooth={true}
                  color={theme.palette.primary.contrastText}
                  activeColor={theme.palette.info.main}
                  >
                    About Me
                  </ScrollLink>
                </ListItem>
                <ListItem dense>
                  <ScrollLink 
                  to='skills' 
                  spy={true} 
                  smooth={true}
                  color={theme.palette.primary.contrastText}
                  activeColor={theme.palette.info.main}
                  >
                    Skills
                  </ScrollLink>
                </ListItem>
                <ListItem dense>
                  <ScrollLink 
                  to='contact' 
                  spy={true} 
                  smooth={true}
                  color={theme.palette.primary.contrastText}
                  activeColor={theme.palette.info.main}
                  >
                    Contact
                  </ScrollLink>
                </ListItem>
              </List>
            </Typography>
            <SocialLinks 
            iconSize='small'
            github={{
                link:socialLinks.github,
                toolTip:'Github'
            }}
            linkedin={{
                link:socialLinks.linkedIn,
                toolTip:'Linked In'
            }}
            medium={{
                link:socialLinks.medium,
                toolTip:'Medium'
            }}
            facebook={{
                link:socialLinks.facebook,
                toolTip:'Facebook'
            }}
            />
          </Box>
        </DrawerColor>
    }
    >
      {/* Home section */}
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
      {/* About Me section */}
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
      {/* Skills section */}
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
      {/* Contact section */}
      <Section id='contact' bgcolor={theme.palette.secondary.dark}
      color={theme.palette.secondary.contrastText}
      >
        <ContactLayout
        py={10} 
        header={
          <Header
          mb={4} 
          text='Contact'
          textColor={theme.palette.secondary.light} 
          caption='Get In Touch'
          captionColor={theme.palette.secondary.contrastText}
          lineColor={theme.palette.info.main}
          />
        } 
        location={
          <Box>
            <Typography variant='h4'>Location</Typography>
            <Typography variant='h6'>{contact.location}</Typography>
          </Box>
        }
        contact={
          <ListItems
          items={[
            {
              label: (
                <SvgIconColor color={theme.palette.info.main}>
                  <PhoneIcon />
                </SvgIconColor>
              ),
              value: (
                <Box ml={1}>
                  <Typography variant='h6'>{contact.phone}</Typography>
                </Box>
              )
            },
            {
              label: (
                <SvgIconColor color={theme.palette.info.main}>
                  <MobileIcon />
                </SvgIconColor>
              ),
              value: (
                <Box ml={1}>
                  <Typography variant='h6'>{contact.mobile}</Typography>
                </Box>
              )
            },
            {
              label: (
                <SvgIconColor color={theme.palette.info.main}>
                  <EmailIcon />
                </SvgIconColor>
              ),
              value: (
                <Box ml={1}>
                  <Typography variant='h6'>{contact.email}</Typography>
                </Box>
              )
            }
          ]}
          />
        }
        socialLinks={
          <SocialLinks 
          github={{
              link:socialLinks.github,
              toolTip:'Github'
          }}
          linkedin={{
              link:socialLinks.linkedIn,
              toolTip:'Linked In'
          }}
          medium={{
              link:socialLinks.medium,
              toolTip:'Medium'
          }}
          facebook={{
              link:socialLinks.facebook,
              toolTip:'Facebook'
          }}
          />
        }
        contactForm={
          <ContactForm 
          px={2} 
          textColor={theme.palette.secondary.contrastText}
          fieldBorderColor={theme.palette.secondary.main}
          fieldBgColor={theme.palette.secondary.main}
          fieldFocusColor={theme.palette.info.main}
          />
        }
        />
      </Section>
      {/* Footer */}
      <Section id='footer' bgcolor={theme.palette.secondary.main}>
          <Box
          py={8}
          textAlign='center'
          color={theme.palette.secondary.contrastText}
          >
            <Typography variant='h6' component='span'>Powered by </Typography>
            <Box component='span' color={theme.palette.info.main}>
              <Typography variant='h6' component='span'>Next.JS</Typography>
            </Box>
            <Typography variant='h6' component='span'>. Created by </Typography>
            <Box component='span' color={theme.palette.info.main}>
              <Typography variant='h6' component='span'>{personName}</Typography>
            </Box>
          </Box>
      </Section>
    </PageLayout>
  );
};

export default LandingPage;
