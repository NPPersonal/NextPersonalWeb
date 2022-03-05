import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

type BlogLayoutProps = React.ComponentProps<typeof Box> & {
  header: React.ReactNode;
  blogPreview: React.ReactNode;
  blogLink: React.ReactNode;
};
const BlogLayout: React.FC<BlogLayoutProps> = (props: BlogLayoutProps) => {
  const { header, blogPreview, blogLink, ...rest } = props;
  return (
    <Box {...rest}>
      <Container>
        {header}
        <Box textAlign="center">{blogPreview}</Box>
        <Box textAlign="center" p={2}>
          {blogLink}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogLayout;
