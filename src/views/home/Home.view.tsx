import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import ParallaxHero from "../../components/units/ParallaxHero/ParallaxHero";
import Section from "../../components/units/ScrollSection/ScrollSection";
import { HomeProps, CommonProps } from "../../props-def/PropDef";

type HomeViewProps = React.ComponentProps<typeof Section> & {
  bgImageURL: string;
  greeting: HomeProps["greeting"];
  country: HomeProps["country"];
  city: HomeProps["city"];
  fullName: CommonProps["name"];
};

const HomeView: React.FC<HomeViewProps> = (props: HomeViewProps) => {
  const {
    bgImageURL,
    greeting,
    country,
    city,
    fullName: { first, last },
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <Section {...rest} color={theme.palette.primary.contrastText}>
      <ParallaxHero
        py={30}
        bgImage={bgImageURL}
        maskColor={theme.palette.primary.dark}
        maskOpacity={0.8}
      >
        <React.Fragment>
          <Typography variant="h6" align="center" paragraph>
            {greeting}
          </Typography>
          <Typography variant="h3" align="center" paragraph>
            {`I am ${first} ${last}`}
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            {`${city}, ${country}.`}
          </Typography>
        </React.Fragment>
      </ParallaxHero>
    </Section>
  );
};

export default HomeView;
