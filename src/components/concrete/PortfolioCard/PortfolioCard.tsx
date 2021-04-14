import Card, { CardProps } from '@material-ui/core/Card/Card';
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

    const classes = makeStyles(style)({
        width,
    });

    return (
        <Card {...rest} className={classes.root}>
            <img className={classes.image} src={thumbnail} width={width} />
        </Card>
    );
};

export default PortfolioCard;