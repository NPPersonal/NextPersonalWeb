import Dialog, { DialogProps } from '@material-ui/core/Dialog/Dialog';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CloseIcon from '@material-ui/icons/CloseSharp';
import style from './PortfolioDialogStyle';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

type DialogWithoutProps = Omit<DialogProps, 'onClose'>
type PortfolioDialogProps = DialogWithoutProps & {
    projectTitle:React.ReactNode,
    color?:string,
    imageSlides:string[],
    slideInterval?:number,
    desc:React.ReactNode,
    detail:React.ReactNode,
    onClose?:()=>void,
}

const PortfolioDialog:React.FC<PortfolioDialogProps> = (props:PortfolioDialogProps) => {
    const {
        projectTitle,
        color = '#fff',
        imageSlides,
        slideInterval = 3000,
        desc,
        detail,
        onClose,
        ...rest
    } = props;

    const theme = useTheme();
    const paperContrastColor = theme.palette.getContrastText(color);

    const classes = makeStyles(style)({
        paperColor: color,
        closeBtnColor: paperContrastColor,
    });

    const dialogClasses = {
        paper: classes.paper,
    }

    return (
        <Dialog {...rest} classes={dialogClasses}>
            <DialogTitle disableTypography>
                <Box display='flex' width='100%' color={paperContrastColor}>
                    <Box flex='1 1' textAlign='left'>{projectTitle}</Box>
                    <Box flex='1 1' textAlign='right'>
                        <IconButton onClick={onClose} className={classes.button}>
                            <CloseIcon />
                        </IconButton>
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
                        width='100%'
                        >
                            {imageSlides.map((slide, i)=>(
                                <img key={i} src={slide} />
                            ))}    
                        </Carousel>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box display='flex' flexDirection='column' m={1} color={paperContrastColor}>
                            <Box mb={1}>{desc}</Box>
                            <Box>{detail}</Box>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default PortfolioDialog;