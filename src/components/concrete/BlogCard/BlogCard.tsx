import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import {
  BCard,
  BCardActions,
  BCardContent,
  BCardHeader,
  BCardMedia,
  BCardProps,
} from "./BlogCardStyle";
import { Typography } from "@mui/material";

type CardWithoutStyle = Omit<BCardProps, "style" | "width">;
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

  return (
    <BCard width={width} {...rest}>
      <BCardHeader
        title={
          <Typography variant="h4" style={{ whiteSpace: "pre-line" }}>
            {header}
          </Typography>
        }
        subheader={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{publishDate}</span>
            <span>{publisher}</span>
          </div>
        }
        titleTypographyProps={{ noWrap: true }}
      />
      {!thumbnailSrc ? null : (
        <LazyLoadComponent>
          <BCardMedia image={thumbnailSrc} />
        </LazyLoadComponent>
      )}
      <BCardContent contentHeight={contentHeight}>{content}</BCardContent>
      {!actions || !actions.length ? null : (
        <BCardActions>
          {actions.map((action, i) => {
            return <React.Fragment key={i}>{action}</React.Fragment>;
          })}
        </BCardActions>
      )}
    </BCard>
  );
};

export default BlogCard;
