import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/CloseSharp";
import { CloseButton, PFDialog, PFDialogProps } from "./PortfolioDialogStyle";
import useTheme from "@mui/styles/useTheme";

type DialogWithoutProps = Omit<PFDialogProps, "onClose" | "paperColor">;
type PortfolioDialogProps = DialogWithoutProps & {
  projectTitle: React.ReactNode;
  color?: string;
  imageSlides: string[];

  /** Image slide change interval in ms */
  slideInterval?: number;
  desc: React.ReactNode;
  detail: React.ReactNode;
  onClose?: () => void;
};

const PortfolioDialog: React.FC<PortfolioDialogProps> = (
  props: PortfolioDialogProps
) => {
  const {
    projectTitle,
    color = "#fff",
    imageSlides,
    slideInterval = 3000,
    desc,
    detail,
    onClose,
    ...rest
  } = props;

  const theme = useTheme();
  const paperContrastColor = theme.palette.getContrastText(color);

  return (
    <PFDialog paperColor={color} {...rest}>
      <DialogTitle>
        <Box display="flex" width="100%" color={paperContrastColor}>
          <Box flex="1 1" textAlign="left">
            {projectTitle}
          </Box>
          <Box flex="1 1" textAlign="right">
            <CloseButton
              onClick={onClose}
              size="large"
              closeBtnColor={paperContrastColor}
            >
              <CloseIcon />
            </CloseButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box m={1}>
              <Carousel
                autoPlay={true}
                interval={slideInterval}
                emulateTouch
                swipeable={true}
                infiniteLoop
                autoFocus={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                width="100%"
              >
                {imageSlides.map((slide, i) => (
                  <img key={i} src={slide} />
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              m={1}
              color={paperContrastColor}
            >
              <Box mb={1}>{desc}</Box>
              <Box>{detail}</Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </PFDialog>
  );
};

export default PortfolioDialog;
