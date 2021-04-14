import Card, { CardProps } from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import style from './PortfolioCardStyle';

type CardWithoutStyle = Omit<CardProps, 'style'>;
type PortfolioCardProps = CardWithoutStyle & {
    thumbnail:string,
    width:string|number,
}
const PortfolioCard:React.FC<PortfolioCardProps> = (props:PortfolioCardProps) => {
    const {
        thumbnail,
        width,
        ...rest
    } = props;

    const [mouseOver, setMouseOver] = React.useState<boolean>(false);

    const handleMouseOver = ()=>setMouseOver(true);
    const handleMouseLeave = ()=>setMouseOver(false);

    const classes = makeStyles(style)({
        width,
        imageScale:mouseOver?1.1:1,
    });

    return (
        <Card {...rest} className={classes.root} >
            <CardActionArea onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <img className={classes.image} src={thumbnail} width={width} />
            </CardActionArea>
        </Card>
    );
};

export default PortfolioCard;