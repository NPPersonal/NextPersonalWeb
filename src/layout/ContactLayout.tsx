import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";

type ContactLayoutProps = React.ComponentProps<typeof Box> & {
  header: React.ReactNode;
  location: React.ReactNode;
  contact: React.ReactNode;
  socialLinks: React.ReactNode;
  contactForm: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = (
  props: ContactLayoutProps
) => {
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
        <Box p={4}>
          <Grid container spacing={8}>
            <Grid item sm={12} md={4}>
              <Box display="flex" flexDirection="column">
                {location}
                {contact}
                {socialLinks}
              </Box>
            </Grid>
            <Grid item sm={12} md={8}>
              {contactForm}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactLayout;
