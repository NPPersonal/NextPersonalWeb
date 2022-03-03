import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import Slide, { SlideProps } from "@material-ui/core/Slide/Slide";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Header from "../../components/concrete/OverlapHeader/OverlapHeader";
import PortfolioDialog from "../../components/concrete/PortfolioDialog/PortfolioDialog";
import SocialLinks from "../../components/concrete/SocialLinks/SocialLinks";
import ZoomFadeCard from "../../components/concrete/ZoomFadeCard/ZoomFadeCard";
import LinkTo from "../../components/units/LinkTo/LinkTo";
import ListItems from "../../components/units/ListItems/ListItems";
import RMasonry from "../../components/units/RMasonry/RMasonry";
import Section from "../../components/units/ScrollSection/ScrollSection";
import PortfolioLayout from "../../layout/PortfolioLayout";
import { ViewProps, PortfolioProps } from "../../props-def/PropDef";

type PortfoliosViewProps = React.ComponentProps<typeof Section> & {
  portfolios: ViewProps["portfolios"];
};

const PortfoliosView: React.FC<PortfoliosViewProps> = (
  props: PortfoliosViewProps
) => {
  const { portfolios, ...rest } = props;
  const [openPortfolio, setOpenPortfolio] = React.useState<{
    open: boolean;
    index: number;
  }>({ open: false, index: 0 });

  const portfolio = React.useMemo<PortfolioProps>(() => {
    return portfolios[openPortfolio.index];
  }, [openPortfolio.index]);

  const theme = useTheme();
  const dialogTransition = React.useMemo(
    () =>
      React.forwardRef<any, SlideProps>((props, ref) => {
        return <Slide direction="up" ref={ref} {...props} />;
      }),
    []
  );

  const handlePortfolioClick = (i: number) => {
    setOpenPortfolio({ open: true, index: i });
  };

  const dismissPortfolio = () => {
    setOpenPortfolio((state) => {
      return { ...state, open: false };
    });
  };

  return (
    <React.Fragment>
      <Section
        {...rest}
        bgcolor={theme.palette.secondary.dark}
        color={theme.palette.secondary.contrastText}
      >
        <PortfolioLayout
          py={10}
          header={
            <Header
              mb={4}
              text="Portfolios"
              textColor={theme.palette.secondary.light}
              caption="Works"
              captionColor={theme.palette.secondary.contrastText}
              lineColor={theme.palette.info.main}
            />
          }
          portfolios={
            <Box p={4}>
              <RMasonry>
                {portfolios.map((p, i) => {
                  return (
                    <Box
                      key={p.title}
                      pb={4}
                      display="flex"
                      justifyContent="center"
                    >
                      <ZoomFadeCard
                        thumbnailSrc={p.image}
                        width="100%"
                        maskTitle={
                          <Typography variant="h4">{p.title}</Typography>
                        }
                        maskCategory={
                          <Container>
                            {p.categories.map((cat, i) => (
                              <Typography key={i} variant="h6" align="center">
                                {cat}
                              </Typography>
                            ))}
                          </Container>
                        }
                        onClick={() => handlePortfolioClick(i)}
                      />
                    </Box>
                  );
                })}
              </RMasonry>
            </Box>
          }
        />
      </Section>
      <PortfolioDialog
        TransitionComponent={dialogTransition}
        open={openPortfolio.open}
        projectTitle={
          !portfolio ? (
            ""
          ) : (
            <Typography variant="h4">{portfolio.title}</Typography>
          )
        }
        imageSlides={!portfolio ? [] : portfolio.imageSlides}
        slideInterval={4000}
        desc={
          !portfolio ? (
            ""
          ) : (
            <Box display="flex" flexDirection="column" mb={2}>
              <Typography variant="h6">{`Info:`}</Typography>
              <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
                {portfolio.description}
              </Typography>
            </Box>
          )
        }
        detail={
          !portfolio ? (
            ""
          ) : (
            <Box display="flex" flexDirection="column">
              <Typography variant="h6">{`Details:`}</Typography>
              <ListItems
                dense
                divider
                disablePadding
                dividerColor={theme.palette.secondary.light}
                items={[
                  {
                    label: (
                      <Typography variant="body1">{`Platform: `}</Typography>
                    ),
                    value: (
                      <Box ml={1}>
                        <Typography variant="body1">
                          {portfolio.platform}
                        </Typography>
                      </Box>
                    ),
                  },
                  {
                    label: (
                      <Typography variant="body1">{`Technologies: `}</Typography>
                    ),
                    value: (
                      <Box ml={1}>
                        <Typography variant="body1">
                          {portfolio.technologies}
                        </Typography>
                      </Box>
                    ),
                  },
                  {
                    label: <Typography variant="body1">{`URL: `}</Typography>,
                    value: (
                      <Box ml={1}>
                        <Typography variant="body1">
                          <LinkTo
                            linkTo={portfolio.url ? portfolio.url : ""}
                            text={portfolio.url ? portfolio.url : ""}
                            color={theme.palette.info.main}
                          />
                        </Typography>
                      </Box>
                    ),
                  },
                ]}
              />
              {Object.keys(portfolio.links).length === 0 ? null : (
                <React.Fragment>
                  <Typography variant="h6">{`Links:`}</Typography>
                  <SocialLinks
                    iconSize="large"
                    socialIcons={Object.keys(portfolio.links).map((key) => {
                      return {
                        kind: key,
                        link: portfolio.links[key],
                        toolTip: key,
                      };
                    })}
                  />
                </React.Fragment>
              )}
            </Box>
          )
        }
        onClose={dismissPortfolio}
        onBackdropClick={dismissPortfolio}
        fullWidth
        maxWidth="sm"
        scroll="body"
        color={theme.palette.primary.main}
      />
    </React.Fragment>
  );
};

export default PortfoliosView;
