// import Box from '@mui/material/Box/Box';
// import Card, { CardProps } from '@mui/material/Card/Card';
// import CardActions from '@mui/material/CardActions/CardActions';
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import style from "./BlogCardStyle";
import makeStyles from "@mui/styles/makeStyles";
import CardHeader from "@mui/material/CardHeader";
import Card, { CardProps } from "@mui/material/Card";
import Box from "@mui/material/Box/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

type CardWithoutStyle = Omit<CardProps, "style">;
type BlogCardProps = CardWithoutStyle & {
  header: React.ReactNode;
  publishDate: React.ReactNode;
  publisher: React.ReactNode;
  thumbnailSrc?: string;
  content: React.ReactNode;
  contentHeight?: string | number;
  blogSrc: string;
  width?: string | number;
  actions?: React.ReactNode[];
};

const BlogCard: React.FC<BlogCardProps> = (props: BlogCardProps) => {
  const {
    header,
    publishDate,
    publisher,
    thumbnailSrc = "",
    content,
    contentHeight = 380,
    blogSrc,
    width = 320,
    actions,
    ...rest
  } = props;

  const classes = makeStyles(style)({
    width,
    contentHeight,
  });

  return (
    <Card {...rest} className={classes.card}>
      <CardHeader
        classes={{
          content: classes.headerContent,
          title: classes.headerTitle,
        }}
        title={header}
        subheader={
          <Box display="flex" flexDirection="column">
            <span>{publishDate}</span>
            <span>{publisher}</span>
          </Box>
        }
        titleTypographyProps={{ noWrap: true }}
      />
      {!thumbnailSrc ? null : (
        <LazyLoadComponent>
          <CardMedia className={classes.media} image={thumbnailSrc} />
        </LazyLoadComponent>
      )}
      <CardContent className={classes.content}>{content}</CardContent>
      {!actions || !actions.length ? null : (
        <CardActions className={classes.actions}>
          {actions.map((action, i) => {
            return <React.Fragment key={i}>{action}</React.Fragment>;
          })}
        </CardActions>
      )}
    </Card>
  );
};

export default BlogCard;
