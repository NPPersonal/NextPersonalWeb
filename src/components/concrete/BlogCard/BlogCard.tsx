import Box from '@material-ui/core/Box/Box';
import Card, { CardProps } from '@material-ui/core/Card/Card';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import style from './BlogCardStyle';

type CardWithoutStyle = Omit<CardProps, 'style'>;
type BlogCardProps = CardWithoutStyle & {
    header:React.ReactNode,
    publishDate:React.ReactNode,
    publisher:React.ReactNode,
    thumbnailSrc?:string,
    content:React.ReactNode,
    contentHeight?:string|number,
    blogSrc:string,
    width?:string|number,
    actions?:React.ReactNode[]
};

const BlogCard:React.FC<BlogCardProps> = (props:BlogCardProps) => {
    const {
        header,
        publishDate,
        publisher,
        thumbnailSrc = '',
        content,
        contentHeight = 380,
        blogSrc,
        width = 320,
        actions,
        ...rest
    } = props;

    const classes = makeStyles(style)({
        width,
        contentHeight
    })

    return (
        <Card {...rest} className={classes.card}>
            <CardHeader
            classes={{
                content:classes.headerContent,
                title:classes.headerTitle
            }}
            title={header}
            subheader={
                <Box display='flex' flexDirection='column'>
                    <span>{publishDate}</span>
                    <span>{publisher}</span>
                </Box>
            }
            titleTypographyProps={{noWrap:true}}
            />
            {!thumbnailSrc?null:
                <LazyLoadComponent>
                    <CardMedia
                    className={classes.media}
                    image={thumbnailSrc}
                    />
                </LazyLoadComponent>
            }
            <CardContent className={classes.content}>
                {content}
            </CardContent>
            {!actions||!actions.length?null:
                <CardActions className={classes.actions}>
                    {actions.map((action, i)=>{
                        return (
                            <React.Fragment key={i}>
                                {action}
                            </React.Fragment>
                        )
                    })}
                </CardActions>
            }
        </Card>
    );
};

export default BlogCard;