import Box from "@material-ui/core/Box/Box";
import Card, { CardProps } from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Fade from "@material-ui/core/Fade/Fade";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";
import style from "./ZoomFadeCardStyle";

type CardWithoutStyle = Omit<CardProps, "style">;
type ZoomFadeCardProps = CardWithoutStyle & {
  thumbnailSrc: string;
  width: string | number;
  maskTitle?: React.ReactNode;
  maskCategory?: React.ReactNode;
  fadeTimeout?: number;
  zoomTime?: number;
  zoomOnly?: boolean;
};
const ZoomFadeCard: React.FC<ZoomFadeCardProps> = (
  props: ZoomFadeCardProps
) => {
  const {
    thumbnailSrc,
    width,
    maskTitle = "",
    maskCategory = "",
    fadeTimeout = 1000,
    zoomTime = 500,
    zoomOnly = false,
    ...rest
  } = props;

  const theme = useTheme();
  const [mouseOver, setMouseOver] = React.useState<boolean>(false);

  const handleMouseOver = () => setMouseOver(true);
  const handleMouseLeave = () => setMouseOver(false);

  const classes = makeStyles(style)({
    theme,
    width,
    imageScale: mouseOver ? 1.1 : 1,
    maskColor: theme.palette.common.black,
    maskOpacity: 0.7,
    zoomTime,
  });

  return (
    <Card {...rest} className={classes.root}>
      <CardActionArea
        className={classes.actionArea}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <LazyLoadComponent visibleByDefault={true}>
          <img src={thumbnailSrc} width={width} className={classes.img} />
        </LazyLoadComponent>
        {!zoomOnly && (
          <Fade in={mouseOver} timeout={fadeTimeout}>
            <Box
              className={classes.mask}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {maskTitle}
              {maskCategory}
            </Box>
          </Fade>
        )}
      </CardActionArea>
    </Card>
  );
};

export default ZoomFadeCard;
