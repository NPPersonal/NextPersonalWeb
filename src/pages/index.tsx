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
import { Blog, LaningPageProps, mediumFeed, Portfolio } from "../pageUtils/LaningPage";
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
import avatarPlaceholder from '../assets/profile/profile-placeholder.svg'
import StickyNav from "../components/concrete/StickyNav/StickyNav";
import LinkTo from "../components/units/LinkTo/LinkTo";
import RippleMenu from "../components/concrete/RippleMenu/RippleMenu";
import BlogLayout from "../layout/BlogLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BlogCard from "../components/concrete/BlogCard/BlogCard";
import Link from "next/dist/client/link";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import LeftArrow from '@material-ui/icons/ArrowLeftRounded';
import RightArrow from '@material-ui/icons/ArrowRightRounded';
import IconButton from "@material-ui/core/IconButton/IconButton";
import { formatDateTime } from "../utils/formater/TimeFormater";
import PortfolioLayout from "../layout/PortfolioLayout";
import RMasonry from "../components/units/RMasonry/RMasonry";
import PortfolioCard from "../components/concrete/PortfolioCard/PortfolioCard";
import Container from "@material-ui/core/Container/Container";
import PortfolioDialog from "../components/concrete/PortfolioDialog/PortfolioDialog";
import Slide, { SlideProps } from "@material-ui/core/Slide/Slide";


export const getStaticProps: GetStaticProps<LaningPageProps> = async () => {

  let blog:Blog = {data:null, error:null};
  try{
    const feed = await mediumFeed('tomneo2004');
    blog={data:feed, error:null};
  }
  catch(error){
    blog={data:null, error};
  }

  return {
    revalidate: 60,
    props:{
      common:{
        name:{
          first: 'Ming-Chun',
          last: 'Hung',
        },
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
        },
        cvURL:'https://www.dropbox.com/s/k5ui6ovd4xku905/Resume.pdf?dl=0'
      },
      menu:{
        links:[
          {title:'Home', id:'home'},
          {title:'About Me', id:'about-me'},
          {title:'Skills', id:'skills'},
          {title:'Portfolios', id:'portfolios'},
          {title:'Blogs', id:'blog'},
          {title:'Contact', id:'contact'},
        ]
      },
      hero:{
        heroBgImageURL: 'https://images.unsplash.com/photo-1617264262155-235ae4cb078d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
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
      },
      portfolios:[
        {
          title:'Mobile Disk', 
          image:'https://i.imgur.com/ssc7ZAo.png', 
          categories:['IOS'],
          imageSlides:[
            'https://i.imgur.com/ssc7ZAo.png',
            'https://i.imgur.com/o0vHxBz.png',
            'https://i.imgur.com/O4LNgvw.png',
            'https://i.imgur.com/U8ZmTS6.png',
            'https://i.imgur.com/PqOj7hn.png',
          ],
          platform: 'IOS',
          technologies: 'IOS SDK, GIMP',
          description: `Turn your mobile device into a storage disk. Store any kind of files and carry them to anywhere with you.

          Preview supported fils such as video, image and document. Transfer files between your mobile device and personal computer with cable or local wifi.`
        },
        {
          title:'Finder e-Book', 
          image:'https://i.imgur.com/1osInWc.png', 
          categories:['IOS'],
          imageSlides:[
            'https://i.imgur.com/1osInWc.png',
            'https://i.imgur.com/I1r4muo.png',
            'https://i.imgur.com/P80qM4t.png',
          ],
          platform: 'IOS',
          technologies: 'IOS SDK',
          description: `An IOS app that is designed for registered member to find and read
          electronic book or catalog. Book and catalog that can be created by member.

          The app is able to read any kind of media that are embeded in book or catalog such as link,
          image, video, music, map and shoping cart.`
        },
        {
          title:'Explore Movies', 
          image:'https://i.imgur.com/zwrDW50.png', 
          categories:['Web'],
          imageSlides:[
            'https://i.imgur.com/zwrDW50.png',
            'https://i.imgur.com/Yqc5Cip.png',
            'https://i.imgur.com/6XVXUQg.png',
            'https://i.imgur.com/AS7Dzj5.png',
            'https://i.imgur.com/gaDQJoI.png',
          ],
          platform: 'Web',
          technologies: 'Next.JS, Material-UI, JSS',
          description: `Explore all kind of movies and see movie information. Find out what
          movies are popular, trending playing in cinema or search movie you already know by
          title. 
          
          In addition, you can find all reviews, media or trailers for the movie. Explore
          Movies also find available streaming service for you at your location.`
        },
        {
          title:'Shop', 
          image:'https://i.imgur.com/mD2vMoi.png', 
          categories:['Web'],
          imageSlides:[
            'https://i.imgur.com/mD2vMoi.png',
            'https://i.imgur.com/pxmoW4P.png',
            'https://i.imgur.com/ATQoMx8.png',
            'https://i.imgur.com/SBgmd07.png',
          ],
          platform: 'Web',
          technologies: 'React.JS, Express.JS, Firebase, Styled-Components, SASS', 
          description: `A website that was made while learning React.JS and it is to mimic
          an online shop. 
          
          An online shop where you can purchase hats, jackets, sneakers and clothes. Add your favourite items to your shopping cart and purchase online.`
        },
        {
          title:'Visual Music', 
          image:'https://i.imgur.com/8u6Yjc0.png', 
          categories:['Web'],
          imageSlides:[
            'https://i.imgur.com/8u6Yjc0.png',
            'https://i.imgur.com/kXPzB1s.png',
            'https://i.imgur.com/SZ7Uk7L.png',
          ],
          platform: 'Web',
          technologies: 'React.JS, Firebase, SASS', 
          description: `An open-source that I participated and workd with other students from
          worldwide. 
          
          Visual Music is a collaboration project managed by a group of dedicated students. 
          Aimed at all music and arts lovers, it provides the users with a real time visual transcription of a streamed music piece`
        }
      ],
      blog
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
      name,
      contact,
      socialLinks,
      cvURL,
    },
    menu:{
      links,
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
    },
    portfolios,
    blog,
  } = props;

  const [toggle, setToggle] = React.useState<boolean>(false);

  const [openPortfolio, setOpenPortfolio] = React.useState<{
    open:boolean, index:number
  }>({open:false, index:0});

  const portfolio = React.useMemo<Portfolio>(()=>{
    return portfolios[openPortfolio.index];
  }, [openPortfolio.index])

  const dialogTransition = React.useMemo(
    ()=>React.forwardRef<any, SlideProps>((props, ref)=>{
      return <Slide direction='up' ref={ref} {...props}/>;
    }), 
  [])
  const closeRippleMenu = ()=>setToggle(state=>!state);

  const handlePortfolioClick = (i:number)=>{
    setOpenPortfolio({open:true, index:i});
  }

  const dismissPortfolio = ()=>{
    setOpenPortfolio(state=>{
      return {...state, open:false}
    })
  }


  return (
    <React.Fragment>
      <PageLayout 
      maxWidth='xl' 
      disableGutters
      drawerWidth={240}
      drawer={
        <DrawerColor 
          drawerWidth={240}
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
              placeholderSrc={avatarPlaceholder}
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
                {links.map(link=>{
                  return (
                    <ListItem key={link.id} dense>
                      <ScrollLink 
                      to={link.id} 
                      spy={true} 
                      smooth={true}
                      delay={500}
                      isDynamic={true}
                      color={theme.palette.primary.contrastText}
                      activeColor={theme.palette.info.main}
                      >
                        {link.title}
                      </ScrollLink>
                    </ListItem>
                  )
                })}
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
      navigation={
        <StickyNav
        color={theme.palette.primary.main}
        brand={
          <LinkTo 
          color={theme.palette.primary.contrastText}
          linkTo='/'
          text={
            <Typography variant='h6'>{name.first}</Typography>
          } />
        }
        >
            <SocialLinks
            width='fit-content'
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
            <Typography variant='h6'>
              <RippleMenu
              ml={2}
              toggleColor={theme.palette.primary.contrastText} 
              menuColor={theme.palette.primary.main}
              open={toggle}
              items={links.map(link=>{
                return (
                  <ScrollLink 
                  to={link.id} 
                  spy={true} 
                  smooth={true}
                  delay={500}
                  isDynamic={true}
                  color={theme.palette.primary.contrastText}
                  activeColor={theme.palette.info.main}
                  onClick={closeRippleMenu}
                  >
                    {link.title}
                  </ScrollLink>
                )
              })}
              onClick={()=>setToggle(state=>!state)}
              />
            </Typography>
        </StickyNav>
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
            <LinkTo
            linkTo={cvURL}
            text={
              <ColorButton 
              disableRipple 
              color={theme.palette.info.main} 
              hoverColor={theme.palette.info.dark}
              titleColor={theme.palette.secondary.contrastText}
              >
                <Typography variant='h6'>Resume</Typography>
              </ColorButton>
            } 
            />
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
        {/* portfolios */}
        <Section id='portfolios' bgcolor={theme.palette.secondary.dark}
        color={theme.palette.secondary.contrastText}
        >
          <PortfolioLayout 
          py={10} 
          header={
            <Header
            mb={4} 
            text='Portfolios'
            textColor={theme.palette.secondary.light} 
            caption='Works'
            captionColor={theme.palette.secondary.contrastText}
            lineColor={theme.palette.info.main}
            />
          }
          portfolios={
            <Box p={4}> 
            <RMasonry>
              {portfolios.map((p, i)=>{
                return (
                  <Box key={p.title} pb={4} display='flex' justifyContent='center'>
                    <PortfolioCard 
                    thumbnailSrc={p.image}
                    width='100%'
                    projectTitle={
                      <Typography variant='h4'>{p.title}</Typography>
                    }
                    projectCategory={
                      <Container>
                        {p.categories.map((cat, i)=>(
                          <Typography key={i} variant='h6' align='center'>{cat}</Typography>
                        ))}
                      </Container>
                    }
                    onClick={()=>handlePortfolioClick(i)}
                    />
                  </Box>
                )
              })}
            </RMasonry> 
            </Box>
          }
          />
        </Section>
        {/* Blog */}
        <Section id='blog' bgcolor={theme.palette.secondary.main}
        color={theme.palette.secondary.contrastText}
        >
          <BlogLayout
          py={10}
          header={
            <Header
            mb={4} 
            text='Stories'
            textColor={theme.palette.secondary.light} 
            caption='Blogs'
            captionColor={theme.palette.secondary.contrastText}
            lineColor={theme.palette.info.main}
            />
          } 
          blogPreview={
            <Carousel
            autoPlay={false}//this has bug but use interval for work around
            interval={3000000} 
            emulateTouch
            swipeable={false}
            infiniteLoop
            autoFocus={false}
            showArrows={true} 
            showStatus={false} 
            showThumbs={false}
            renderArrowPrev={(clickHandler, hasPre, label)=>hasPre && (
              <IconButton onClick={clickHandler} title={label} style={{
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 15px)',
                width: 40,
                height: 40,
                left: 0,
                cursor: 'pointer',
                color: theme.palette.secondary.contrastText
              }}>
                <LeftArrow fontSize='large' />
              </IconButton>
            )}
            renderArrowNext={(clickHandler, hasPre, label)=>hasPre && (
              <IconButton onClick={clickHandler} title={label} style={{
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 15px)',
                width: 40,
                height: 40,
                right: 0,
                cursor: 'pointer',
                color: theme.palette.secondary.contrastText
              }}>
                <RightArrow fontSize='large' />
              </IconButton>
            )}
            >
              {blog.data.items.map(item=>{
                return (
                  <Box key={item.guid} display='flex' justifyContent='center' mb={4} textAlign='left'>
                  <BlogCard
                  raised
                  width='80%'
                  header={item.title}
                  publishDate={formatDateTime(item.pubDate)}
                  publisher={`By ${item.author}`}
                  thumbnailSrc={item.thumbnail}
                  content={
                    <ReactMarkdown
                      plugins={[gfm]}
                      children={item.content}
                      allowDangerousHtml
                    />
                  }
                  blogSrc={item.link}
                  actions={[
                    <Link href={item.link}>
                      <ColorButton 
                      disableRipple 
                      color={theme.palette.info.main} 
                      hoverColor={theme.palette.info.dark}
                      titleColor={theme.palette.secondary.contrastText}
                      >
                        <Typography variant='h6'>See on Medium</Typography>
                      </ColorButton>
                    </Link>
                  ]}
                  />
                  </Box>
                )
              })}
            </Carousel>
          }
          blogLink={
            <Link href={blog.data.feed.link}>
              <ColorButton 
              disableRipple 
              color={theme.palette.info.main} 
              hoverColor={theme.palette.info.dark}
              titleColor={theme.palette.secondary.contrastText}
              >
                <Typography variant='h6'>Blog On Medium</Typography>
              </ColorButton>
            </Link>
          }
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
            px={1} 
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
            py={10}
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
      {/* Portfolio Dialog */}
      <PortfolioDialog
      TransitionComponent={dialogTransition}
      open={openPortfolio.open}
      projectTitle={!portfolio?'':
        <Typography variant='h4'>{portfolio.title}</Typography>
      }
      imageSlides={!portfolio?[]:portfolio.imageSlides}
      slideInterval={4000}
      desc={!portfolio?'':
        <Box display='flex' flexDirection='column' mb={2}>
          <Typography variant='h6'>{`Info:`}</Typography>    
          <Typography variant='body1' style={{whiteSpace:'pre-line'}}>{portfolio.description}</Typography>    
        </Box>
      }
      detail={!portfolio?'':
        <Box display='flex' flexDirection='column'>
          <Typography variant='h6'>{`Details:`}</Typography>
          <ListItems
          dense
          divider
          disablePadding
          dividerColor={theme.palette.secondary.light}
          items={[
            {
              label:(<Typography variant='body1'>{`Platform: `}</Typography>), 
              value:(
                <Box ml={1}>
                  <Typography variant='body1'>{portfolio.platform}</Typography>
                </Box>)
            },
            {
              label:(<Typography variant='body1'>{`Technologies: `}</Typography>), 
              value:(
                <Box ml={1}>
                  <Typography variant='body1'>{portfolio.technologies}</Typography>
                </Box>)
            }
          ]} 
          />
        </Box>
      }
      onClose={dismissPortfolio} 
      onBackdropClick={dismissPortfolio}   
      fullWidth
      maxWidth='sm'
      scroll='body'
      color={theme.palette.primary.main} 
      />
    </React.Fragment>
  );
};

export default LandingPage;
