import Box from "@mui/material/Box";
import React from "react";
import { SLSvgIcon, SLWapper } from "./SocialLinksStyle";
import GithubIcon from "../../../assets/icons/github-brands.inline.svg";
import LinkedInIcon from "../../../assets/icons/linkedin-brands.inline.svg";
import MediumIcon from "../../../assets/icons/medium-brands.inline.svg";
import FacebookIcon from "../../../assets/icons/facebook-brands.inline.svg";
import AppStoreIcon from "../../../assets/icons/appstore-brands.inline.svg";
import { Tooltip, TooltipProps } from "@mui/material";

type SocialProps = {
  kind: string;
  link: string;
  toolTip: string;
};
type SocialLinksProps = React.ComponentProps<typeof Box> & {
  socialIcons: SocialProps[];
  iconSize?: "small" | "inherit" | "large" | "medium";
  iconColor?: string;
  toolTipPlacement?: TooltipProps["placement"];
  toolTipColor?: string;
  contentLayout?: "space-between" | "space-evenly";
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
    iconColor = "#474B4F",
    toolTipPlacement = "top",
    toolTipColor = "#000",
    contentLayout = "space-evenly",
    ...rest
  } = props;

  return (
    <SLWapper
      width="100%"
      display="flex"
      justifyContent={contentLayout}
      {...rest}
    >
      {socialIcons.map((social) => {
        const icon = Icons[social.kind];

        return (
          <a key={social.link} href={social.link} target="_blank">
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              arrow
              placement={toolTipPlacement}
              title={social.toolTip}
              componentsProps={{
                arrow: { sx: { color: toolTipColor } },
                tooltip: { sx: { backgroundColor: toolTipColor } },
              }}
            >
              <SLSvgIcon fontSize={iconSize} iconColor={iconColor}>
                {icon}
              </SLSvgIcon>
            </Tooltip>
          </a>
        );
      })}
    </SLWapper>
  );
};

export default SocialLinks;
