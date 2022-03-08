import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/styles/useTheme";
import Typography from "@mui/material/Typography";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BlogCard from "../../components/concrete/BlogCard/BlogCard";
import Header from "../../components/concrete/OverlapHeader/OverlapHeader";
import ColorButton from "../../components/units/ColorButton/ColorButton";
import Section from "../../components/units/ScrollSection/ScrollSection";
import BlogLayout from "../../layout/BlogLayout";
import LeftArrow from "@mui/icons-material/ArrowLeftRounded";
import RightArrow from "@mui/icons-material/ArrowRightRounded";
import { formatDateTime } from "../../utils/formater/TimeFormater";
import { BlogProps } from "../../props-def/PropDef";
import LinkTo from "../../components/units/LinkTo/LinkTo";

type BlogsViewProps = React.ComponentProps<typeof Section> & {
  blog: BlogProps;
};

const BlogsView: React.FC<BlogsViewProps> = (props: BlogsViewProps) => {
  const { blog, ...rest } = props;
  const theme = useTheme();
  return (
    <Section
      {...rest}
      bgcolor={theme.palette.secondary.main}
      color={theme.palette.secondary.contrastText}
    >
      <BlogLayout
        py={10}
        header={
          <Header
            mb={4}
            text="Stories"
            textColor={theme.palette.secondary.light}
            caption="Blogs"
            captionColor={theme.palette.secondary.contrastText}
            lineColor={theme.palette.info.main}
          />
        }
        blogPreview={
          <Carousel
            autoPlay={false} //this has bug but use interval for work around
            interval={3000000}
            emulateTouch
            swipeable={false}
            infiniteLoop
            autoFocus={false}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(clickHandler, hasPre, label) =>
              hasPre && (
                <IconButton
                  onClick={clickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: 40,
                    height: 40,
                    left: 0,
                    cursor: "pointer",
                    color: theme.palette.secondary.contrastText,
                  }}
                  size="large"
                >
                  <LeftArrow fontSize="large" />
                </IconButton>
              )
            }
            renderArrowNext={(clickHandler, hasPre, label) =>
              hasPre && (
                <IconButton
                  onClick={clickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: 40,
                    height: 40,
                    right: 0,
                    cursor: "pointer",
                    color: theme.palette.secondary.contrastText,
                  }}
                  size="large"
                >
                  <RightArrow fontSize="large" />
                </IconButton>
              )
            }
          >
            {blog.data.items.map((item) => {
              return (
                <Box
                  key={item.guid}
                  display="flex"
                  justifyContent="center"
                  mb={4}
                  textAlign="left"
                >
                  <BlogCard
                    raised
                    width="80%"
                    header={item.title}
                    publishDate={formatDateTime(item.pubDate)}
                    publisher={`By ${item.author}`}
                    thumbnailSrc={item.thumbnail}
                    content={
                      <ReactMarkdown
                        remarkPlugins={[gfm]}
                        rehypePlugins={[rehypeRaw]}
                        children={item.content}
                      />
                    }
                    blogSrc={item.link}
                    actions={[
                      <LinkTo
                        linkTo={item.link}
                        text={
                          <ColorButton
                            bgColor={theme.palette.info.main}
                            hoverColor={theme.palette.info.dark}
                            titleColor={theme.palette.secondary.contrastText}
                          >
                            <Typography
                              variant="h6"
                              color={theme.palette.secondary.contrastText}
                            >
                              See on Medium
                            </Typography>
                          </ColorButton>
                        }
                      />,
                    ]}
                  />
                </Box>
              );
            })}
          </Carousel>
        }
        blogLink={
          <LinkTo
            linkTo={blog.data.feed.link}
            text={
              <ColorButton
                bgColor={theme.palette.info.main}
                hoverColor={theme.palette.info.dark}
                titleColor={theme.palette.secondary.contrastText}
              >
                <Typography
                  variant="h6"
                  color={theme.palette.secondary.contrastText}
                >
                  Blog On Medium
                </Typography>
              </ColorButton>
            }
          />
        }
      />
    </Section>
  );
};

export default BlogsView;
