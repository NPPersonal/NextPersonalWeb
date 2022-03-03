import Box from "@material-ui/core/Box/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Header from "../../components/concrete/OverlapHeader/OverlapHeader";
import ListItems from "../../components/units/ListItems/ListItems";
import Section from "../../components/units/ScrollSection/ScrollSection";
import SvgIconColor from "../../components/units/SvgIconColor/SvgIconColor";
import ContactLayout from "../../layout/ContactLayout";
import PhoneIcon from "../../assets/icons/phone-solid.inline.svg";
import MobileIcon from "../../assets/icons/mobile-alt-solid.inline.svg";
import EmailIcon from "../../assets/icons/envelope-solid.inline.svg";
import SocialLinks from "../../components/concrete/SocialLinks/SocialLinks";
import { CommonProps } from "../../pageUtils/PropDef";
import ContactForm from "../../components/concrete/ContactForm/ContactForm";

type ContactViewProps = React.ComponentProps<typeof Section> & {
  contact: CommonProps["contact"];
  socialLinks: CommonProps["socialLinks"];
};

const ContactView: React.FC<ContactViewProps> = (props: ContactViewProps) => {
  const { contact, socialLinks, ...rest } = props;
  const theme = useTheme();
  return (
    <Section
      {...rest}
      bgcolor={theme.palette.secondary.dark}
      color={theme.palette.secondary.contrastText}
    >
      <ContactLayout
        py={10}
        header={
          <Header
            mb={4}
            text="Contact"
            textColor={theme.palette.secondary.light}
            caption="Get In Touch"
            captionColor={theme.palette.secondary.contrastText}
            lineColor={theme.palette.info.main}
          />
        }
        location={
          <Box>
            <Typography variant="h4">Location</Typography>
            <Typography variant="h6">{contact.location}</Typography>
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
                    <Typography variant="h6">{contact.phone}</Typography>
                  </Box>
                ),
              },
              {
                label: (
                  <SvgIconColor color={theme.palette.info.main}>
                    <MobileIcon />
                  </SvgIconColor>
                ),
                value: (
                  <Box ml={1}>
                    <Typography variant="h6">{contact.mobile}</Typography>
                  </Box>
                ),
              },
              {
                label: (
                  <SvgIconColor color={theme.palette.info.main}>
                    <EmailIcon />
                  </SvgIconColor>
                ),
                value: (
                  <Box ml={1}>
                    <Typography variant="h6">{contact.email}</Typography>
                  </Box>
                ),
              },
            ]}
          />
        }
        socialLinks={
          <SocialLinks
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
  );
};

export default ContactView;
