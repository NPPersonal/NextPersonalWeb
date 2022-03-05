import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Fade from "@mui/material/Fade";
import useTheme from "@mui/styles/useTheme";
import React from "react";
import {
  ZFCard,
  ZFCardActionArea,
  ZFCardMask,
  ZoomImage,
} from "./ZoomFadeCardStyle";

type ZoomFadeCardProps = {
  thumbnailSrc: string;
  width: string | number;
  maskTitle?: React.ReactNode;
  maskCategory?: React.ReactNode;
  fadeTimeout?: number;
  zoomTime?: number;
  zoomOnly?: boolean;
  onClick?: () => void;
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
    onClick,
    ...rest
  } = props;

  const theme = useTheme();
  const [mouseOver, setMouseOver] = React.useState<boolean>(false);

  const handleMouseOver = () => setMouseOver(true);
  const handleMouseLeave = () => setMouseOver(false);

  return (
    <ZFCard cardWidth={width} onClick={onClick} {...rest}>
      <ZFCardActionArea
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <LazyLoadComponent visibleByDefault={true}>
          <ZoomImage
            src={thumbnailSrc}
            width={width}
            imageScale={mouseOver ? 1.1 : 1}
            zoomTime={zoomTime}
          />
        </LazyLoadComponent>
        {!zoomOnly && (
          <Fade in={mouseOver} timeout={fadeTimeout}>
            <ZFCardMask
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maskColor={theme.palette.primary.dark}
              maskOpacity={0.5}
            >
              {maskTitle}
              {maskCategory}
            </ZFCardMask>
          </Fade>
        )}
      </ZFCardActionArea>
    </ZFCard>
  );
};

export default ZoomFadeCard;
