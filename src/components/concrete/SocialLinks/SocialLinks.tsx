import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import style from "./SocialLinksStyle";
import makeStyles from "@mui/styles/makeStyles";
import GithubIcon from "../../../assets/icons/github-brands.inline.svg";
import LinkedInIcon from "../../../assets/icons/linkedin-brands.inline.svg";
import MediumIcon from "../../../assets/icons/medium-brands.inline.svg";
import FacebookIcon from "../../../assets/icons/facebook-brands.inline.svg";
import AppStoreIcon from "../../../assets/icons/appstore-brands.inline.svg";
import useTheme from "@mui/styles/useTheme";

type SocialProps = {
  kind: string;
  link: string;
  toolTip: string;
};
type SocialLinksProps = React.ComponentProps<typeof Box> & {
  socialIcons: SocialProps[];
  iconSize?: "small" | "inherit" | "large" | "medium";
  iconColor?: string;
  toolTipPlacement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
  toolTipColor?: string;
};

const Icons: { [key: string]: React.ReactNode } = {
  Github: <GithubIcon />,
  LinkedIn: <LinkedInIcon />,
  Medium: <MediumIcon />,
  Facebook: <FacebookIcon />,
  AppStore: <AppStoreIcon />,
};

/**
 * Component SocialLinks
 *
 * Display a list of social links horizontally
 *
 * Link with tooltip
 *
 * Customizable size and color for icon
 *
 * Customizable tooltip color and position
 *
 * Use icon from https://fontawesome.com/
 *
 * Only support `Github` `linkedin` `Medium` `Facebook`
 *
 * @param {SocialLinksProps} props
 * @returns
 */
const SocialLinks: React.FC<SocialLinksProps> = (props: SocialLinksProps) => {
  const {
    socialIcons,
    iconSize = "medium",
    iconColor = "grey",
    toolTipPlacement = "top",
    toolTipColor = "black",
    ...rest
  } = props;

  const theme = useTheme();
  const classes = makeStyles(style)({
    iconColor,
    toolTipColor,
    theme,
  });

  const svgClasses = {
    root: classes.svgIcon,
  };

  const toolTipClasses = {
    tooltip: classes.tooltip,
    arrow: classes.tooltipArrow,
  };

  return (
    <Box className={classes.wrapper} {...rest}>
      {socialIcons.map((social) => {
        const icon = Icons[social.kind];

        return (
          <a
            key={social.link}
            className={classes.link}
            href={social.link}
            target="_blank"
          >
            <Tooltip
              classes={toolTipClasses}
              arrow
              placement={toolTipPlacement}
              title={social.toolTip}
            >
              <SvgIcon className={svgClasses.root} fontSize={iconSize}>
                {icon}
              </SvgIcon>
            </Tooltip>
          </a>
        );
      })}
    </Box>
  );
};

export default SocialLinks;
