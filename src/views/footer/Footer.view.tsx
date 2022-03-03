import Box from "@material-ui/core/Box/Box";
import useTheme from "@material-ui/core/styles/useTheme";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Section from "../../components/units/ScrollSection/ScrollSection";
import { AboutProps } from "../../props-def/PropDef";

type FooterViewProps = React.ComponentProps<typeof Section> & {
  personName: AboutProps["personName"];
};
const FooterView: React.FC<FooterViewProps> = (props: FooterViewProps) => {
  const { personName, ...rest } = props;
  const theme = useTheme();
  return (
    <Section {...rest} bgcolor={theme.palette.secondary.main}>
      <Box
        py={10}
        textAlign="center"
        color={theme.palette.secondary.contrastText}
      >
        <Typography variant="h6" component="span">
          Powered by{" "}
        </Typography>
        <Box component="span" color={theme.palette.info.main}>
          <Typography variant="h6" component="span">
            Next.JS
          </Typography>
        </Box>
        <Typography variant="h6" component="span">
          . Created by{" "}
        </Typography>
        <Box component="span" color={theme.palette.info.main}>
          <Typography variant="h6" component="span">
            {personName}
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};

export default FooterView;
