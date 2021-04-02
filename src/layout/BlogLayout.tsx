import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import React from 'react';

type BlogLayoutProps = React.ComponentProps<typeof Box> & {
    header: React.ReactNode,
    blogPreview: React.ReactNode,
    blogLink: React.ReactNode,
}
const BlogLayout:React.FC<BlogLayoutProps> = (props:BlogLayoutProps) => {
    const {
        header,
        blogPreview,
        blogLink,
        ...rest
    } = props;
    return (
        <Box {...rest}>
            <Container>
                {header}
                <Box py={4}>
                    <Box  textAlign='center'>
                        {blogPreview}   
                    </Box>
                    <Box textAlign='center' p={2}>
                        {blogLink}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BlogLayout;