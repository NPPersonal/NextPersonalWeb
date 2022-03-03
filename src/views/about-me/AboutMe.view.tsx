import Box from "@material-ui/core/Box/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Brief from "../../components/concrete/Brief/Brief";
import Counter from "../../components/concrete/Counter/Counter";
import Header from "../../components/concrete/OverlapHeader/OverlapHeader";
import PersonInfo from "../../components/concrete/PersonInfo/PersonInfo";
import ColorButton from "../../components/units/ColorButton/ColorButton";
import LinkTo from "../../components/units/LinkTo/LinkTo";
import Section from "../../components/units/ScrollSection/ScrollSection";
import AboutLayout from "../../layout/AboutLayout";
import { AboutProps, CommonProps } from "../../pageUtils/PropDef";

type AboutMeProps = React.ComponentProps<typeof Section> & {
  occupation: AboutProps["occupation"];
  brief: AboutProps["brief"];
  personName: AboutProps["personName"];
  age: AboutProps["age"];
  location: AboutProps["location"];
  email: AboutProps["email"];
  experiences: AboutProps["experiences"];
  cvURL: CommonProps["cvURL"];
};

const AboutMeView: React.FC<AboutMeProps> = (props: AboutMeProps) => {
  const {
    occupation,
    brief,
    personName,
    age,
    location,
    email,
    experiences,
    cvURL,
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <Section
      {...rest}
      bgcolor={theme.palette.secondary.dark}
      color={theme.palette.secondary.contrastText}
    >
      <AboutLayout
        py={10}
        header={
          <Header
            mb={4}
            text="About me"
            textColor={theme.palette.secondary.light}
            caption="Know Me More"
            captionColor={theme.palette.secondary.contrastText}
            lineColor={theme.palette.info.main}
          />
        }
        brief={
          <Brief
            color={theme.palette.secondary.contrastText}
            personName="Ming-Chun Hung, "
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
                <Typography variant="h6">Resume</Typography>
              </ColorButton>
            }
          />
        }
        experiences={experiences.map((exp) => (
          <Box p={2}>
            <Counter
              start={0}
              end={exp.number}
              suffix={exp.suffix}
              caption={
                <Typography variant="h6" align="center">
                  {exp.title}
                </Typography>
              }
            />
          </Box>
        ))}
      />
    </Section>
  );
};

export default AboutMeView;
