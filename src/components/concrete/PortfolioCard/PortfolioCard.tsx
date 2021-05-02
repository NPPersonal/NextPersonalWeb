import Box from '@material-ui/core/Box/Box';
import Card, { CardProps } from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Fade from '@material-ui/core/Fade/Fade';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import style from './PortfolioCardStyle';

type CardWithoutStyle = Omit<CardProps, 'style'>;
type PortfolioCardProps = CardWithoutStyle & {
    thumbnailSrc:string,
    width:string|number,
    projectTitle:React.ReactNode,
    projectCategory:React.ReactNode,
}
const PortfolioCard:React.FC<PortfolioCardProps> = (props:PortfolioCardProps) => {
    const {
        thumbnailSrc,
        width,
        projectTitle,
        projectCategory,
        ...rest
    } = props;

    const theme = useTheme();
    const [mouseOver, setMouseOver] = React.useState<boolean>(false);

    const handleMouseOver = ()=>setMouseOver(true);
    const handleMouseLeave = ()=>setMouseOver(false);

    const classes = makeStyles(style)({
        theme,
        width,
        imageScale:mouseOver?1.1:1,
        maskColor:theme.palette.common.black,
        maskOpacity:0.7,
    });

    return (
        <Card {...rest} className={classes.root}>
            <CardActionArea 
            className={classes.actionArea}
            onMouseEnter={handleMouseOver} 
            onMouseLeave={handleMouseLeave}>
                <LazyLoadComponent
                visibleByDefault={true}
                >
                    <img src={thumbnailSrc} width={width} className={classes.img} />
                </LazyLoadComponent>
                <Fade in={mouseOver} timeout={1000}>
                    <Box 
                    className={classes.mask} 
                    display='flex' 
                    flexDirection='column' 
                    justifyContent='center' 
                    alignItems='center'>
                        {projectTitle}
                        {projectCategory}
                    </Box>
                </Fade>
            </CardActionArea>
        </Card>
    );
};

export default PortfolioCard;