import Box from "@material-ui/core/Box/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { GetStaticProps } from "next/types/index";
import PageLayout from "../layout/PageLayout";
import { BlogProps, ViewProps } from "../props-def/PropDef";
import SocialLinks from "../components/concrete/SocialLinks/SocialLinks";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import DrawerColor from "../components/units/DrawerColor/DrawerColor";
import ScrollLink from "../components/units/ScrollLink/ScrollLink";
import SizeAvatar from "../components/units/SizeAvatar/SizeAvatar";
import avatarURL from "../assets/profile/profile-avatar.png";
import avatarPlaceholder from "../assets/profile/profile-placeholder.svg";
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
  const theme = useTheme();
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

  const [toggle, setToggle] = React.useState<boolean>(false);

  const closeRippleMenu = () => setToggle((state) => !state);

  return (
    <React.Fragment>
      <PageLayout
        maxWidth="xl"
        disableGutters
        drawerWidth={240}
        drawer={
          <DrawerColor
            drawerWidth={240}
            variant="permanent"
            anchor="left"
            color={theme.palette.primary.main}
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
                src={avatarURL}
                placeholderSrc={avatarPlaceholder}
                size={200}
                ringColor={theme.palette.primary.light}
                ringWidth={theme.spacing(1)}
                caption={
                  <Box color={theme.palette.primary.contrastText} pt={1}>
                    <Typography variant="h6" align="center">
                      {personName}
                    </Typography>
                  </Box>
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
              width="fit-content"
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
        {/* Home section */}
        <HomeView
          id="home"
          bgImageURL={heroBgImageURL}
          greeting={greeting}
          country={country}
          city={city}
          fullName={name}
        />
        {/* About Me section */}
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
        {/* Skills section */}
        <SkillsView id="skills" group={group} certificates={certificates} />
        {/* portfolios */}
        <PortfoliosView id="portfolios" portfolios={portfolios} />
        {/* Blog */}
        <BlogsView id="blog" blog={blog} />
        {/* Contact section */}
        <ContactView id="contact" contact={contact} socialLinks={socialLinks} />
        {/* Footer */}
        <FooterView id="footer" personName={personName} />
      </PageLayout>
    </React.Fragment>
  );
};

export default LandingPage;
