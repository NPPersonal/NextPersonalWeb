import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import ParallaxHero from "../../components/units/ParallaxHero/ParallaxHero";
import Section from "../../components/units/ScrollSection/ScrollSection";

type HomeViewProps = React.ComponentProps<typeof Section> & {
  bgImageURL: string;
};

const HomeView: React.FC<HomeViewProps> = (props: HomeViewProps) => {
  const { bgImageURL, ...rest } = props;
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
            Welcome
          </Typography>
          <Typography variant="h3" align="center" paragraph>
            I am Ming-Chung Hung
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Los Angeles, California.
          </Typography>
        </React.Fragment>
      </ParallaxHero>
    </Section>
  );
};

export default HomeView;
