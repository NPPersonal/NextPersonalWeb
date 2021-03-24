import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';

type ContactLayoutProps = React.ComponentProps<typeof Box> & {
    header: React.ReactNode,
    location: React.ReactNode,
    contact: React.ReactNode,
    socialLinks: React.ReactNode,
    contactForm: React.ReactNode,
}

const ContactLayout:React.FC<ContactLayoutProps> = (props:ContactLayoutProps) => {
    const {
        header,
        location,
        contact,
        socialLinks,
        contactForm,
        ...rest
    } = props;

    return (
        <Box {...rest}>
            <Container>
                {header}
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={4}>
                        <Box display='flex' flexDirection='column'>
                            {location}
                            {contact}
                            {socialLinks}
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                    {contactForm}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactLayout;