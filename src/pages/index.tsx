import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { GetStaticProps } from "next/types/index";
import PageLayout from "../layout/PageLayout";
import { BlogProps, ViewProps } from "../props-def/PropDef";
import SocialLinks from "../components/concrete/SocialLinks/SocialLinks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DrawerColor from "../components/units/DrawerColor/DrawerColor";
import ScrollLink from "../components/units/ScrollLink/ScrollLink";
import SizeAvatar from "../components/units/SizeAvatar/SizeAvatar";
import StickyNav from "../components/concrete/StickyNav/StickyNav";
import LinkTo from "../components/units/LinkTo/LinkTo";
import RippleMenu from "../components/concrete/RippleMenu/RippleMenu";
import HomeView from "../views/home/Home.view";
import { getMediumBlogFeed } from "../utils/medium-blog-feed/MediumBlogFeed";
import AboutMeView from "../views/about-me/AboutMe.view";
import SkillsView from "../views/skills/Skills.view";
import BlogsView from "../views/blog/Blogs.view";
import ContactView from "../views/contact/Contact.view";
import FooterView from "../views/footer/Footer.view";
import PortfoliosView from "../views/portolio/Portfolios.view";
import { getStaticPageData } from "../page-data/pageData";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

export const getStaticProps: GetStaticProps<ViewProps> = async () => {
  let blog: BlogProps = { data: null, error: null };
  try {
    const feed = await getMediumBlogFeed("tomneo2004");
    blog = { data: feed, error: null };
  } catch (error) {
    blog = { data: null, error };
  }

  const staticPageData = getStaticPageData();

  return {
    revalidate: 60,
    props: {
      ...staticPageData,
      blog,
    },
  };
};

/**
 * Landing Page
 *
 * @param {LaningPageProps} props
 * @returns
 */
const LandingPage = (props: ViewProps) => {
  const {
    common: { name, contact, socialLinks, cvURL },
    menu: { links },
    home: { greeting, city, country },
    hero: { heroBgImageURL },
    about: { personName, occupation, age, location, email, brief, experiences },
    skill: { group, certificates },
    portfolios,
    blog,
  } = props;

  const theme = useTheme();
  const upLG = useMediaQuery(theme.breakpoints.up("lg"));
  const upMD = useMediaQuery(theme.breakpoints.up("md"));

  //Tuning for avatar and drawer size
  let avaterSize = 64;
  let drawerWidth = "5%";
  if (upLG) {
    avaterSize = 120;
    drawerWidth = "12%";
  } else if (upMD) {
    avaterSize = 90;
    drawerWidth = "12%";
  } else {
    // any screen below md
    avaterSize = 64;
    drawerWidth = "5%";
  }

  // toggle menu at top
  const [toggle, setToggle] = React.useState<boolean>(false);

  const closeRippleMenu = () => setToggle((state) => !state);

  return (
    <PageLayout
      maxWidth="xl"
      disableGutters
      drawerWidth={drawerWidth}
      drawer={
        <DrawerColor
          variant="permanent"
          anchor="left"
          color={theme.palette.primary.main}
          drawerWidth={drawerWidth}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            py={2}
          >
            <SizeAvatar
              src="/profile/profile-avatar.png"
              placeholderSrc="/profile/profile-placeholder.png"
              size={avaterSize}
              ringColor={theme.palette.primary.light}
              ringWidth={5}
              caption={
                <Typography
                  variant="h6"
                  align="center"
                  style={{ whiteSpace: "pre-line" }}
                >
                  <Box
                    color={theme.palette.primary.contrastText}
                    whiteSpace="normal"
                  >
                    {personName}
                  </Box>
                </Typography>
              }
            />
            <Typography variant="h6">
              <List>
                {links.map((link) => {
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
                  );
                })}
              </List>
            </Typography>
            <SocialLinks
              iconSize="small"
              socialIcons={[
                {
                  kind: "Github",
                  link: socialLinks.github,
                  toolTip: "Github",
                },
                {
                  kind: "LinkedIn",
                  link: socialLinks.linkedIn,
                  toolTip: "LinkedIn",
                },
                {
                  kind: "Medium",
                  link: socialLinks.medium,
                  toolTip: "Medium",
                },
                {
                  kind: "Facebook",
                  link: socialLinks.facebook,
                  toolTip: "Facebook",
                },
              ]}
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
              linkTo="/"
              text={<Typography variant="h6">{name.first}</Typography>}
            />
          }
        >
          <SocialLinks
            contentLayout="space-evenly"
            socialIcons={[
              {
                kind: "Github",
                link: socialLinks.github,
                toolTip: "Github",
              },
              {
                kind: "LinkedIn",
                link: socialLinks.linkedIn,
                toolTip: "LinkedIn",
              },
              {
                kind: "Medium",
                link: socialLinks.medium,
                toolTip: "Medium",
              },
              {
                kind: "Facebook",
                link: socialLinks.facebook,
                toolTip: "Facebook",
              },
            ]}
          />
          <Typography variant="h6">
            <RippleMenu
              ml={2}
              toggleColor={theme.palette.primary.contrastText}
              menuColor={theme.palette.primary.main}
              open={toggle}
              items={links.map((link) => {
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
                );
              })}
              onClick={() => setToggle((state) => !state)}
            />
          </Typography>
        </StickyNav>
      }
    >
      <HomeView
        id="home"
        bgImageURL={heroBgImageURL}
        greeting={greeting}
        country={country}
        city={city}
        fullName={name}
      />
      <AboutMeView
        id="about-me"
        occupation={occupation}
        brief={brief}
        personName={personName}
        age={age}
        location={location}
        email={email}
        experiences={experiences}
        cvURL={cvURL}
      />
      <SkillsView id="skills" group={group} certificates={certificates} />
      <PortfoliosView id="portfolios" portfolios={portfolios} />
      <BlogsView id="blog" blog={blog} />
      <ContactView id="contact" contact={contact} socialLinks={socialLinks} />
      <FooterView id="footer" personName={personName} />
    </PageLayout>
  );
};

export default LandingPage;
