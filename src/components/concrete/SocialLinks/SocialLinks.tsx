import Box from '@material-ui/core/Box/Box';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import React from 'react';
import style from './SocialLinksStyle';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GithubIcon from '../../../assets/icons/github-brands.inline.svg';
import LinkedInIcon from '../../../assets/icons/linkedin-brands.inline.svg';
import MediumIcon from '../../../assets/icons/medium-brands.inline.svg';
import FacebookIcon from '../../../assets/icons/facebook-brands.inline.svg';
import useTheme from '@material-ui/core/styles/useTheme';

type SocialProps = {
    link: string,
    toolTip: string
}
type SocialLinksProps = React.ComponentProps<typeof Box> & {
    github?: SocialProps,
    linkedin?: SocialProps,
    medium?: SocialProps,
    facebook?: SocialProps,
    iconSize?: "small" | "inherit" | "default" | "large"
    iconColor?: string,
    toolTipPlacement?: "top" | "right" | "bottom" | "left" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start",
    toolTipColor?: string,
}

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
const SocialLinks:React.FC<SocialLinksProps> = (props:SocialLinksProps) => {
    const {
        github,
        linkedin,
        medium,
        facebook,
        iconSize = 'default',
        iconColor = 'grey',
        toolTipPlacement = 'top',
        toolTipColor = 'black',
        ...rest
    } = props;

    const theme = useTheme();
    const classes = makeStyles(style)({
        iconColor,
        toolTipColor,
        theme
    });

    const svgClasses = {
        root: classes.svgIcon
    }

    const toolTipClasses = {
        tooltip: classes.tooltip,
        arrow: classes.tooltipArrow,
    }

    return (
        <Box {...rest}>
            <Box display='flex' flexDirection='center'>
                {!github? null :
                    <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
                    title={github.toolTip}>
                        <a href={github.link} target='_blank'>
                            <SvgIcon classes={svgClasses} fontSize={iconSize}>
                                <GithubIcon />
                            </SvgIcon>
                        </a>
                    </Tooltip>
                }
                {!linkedin? null :
                    <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
                    title={linkedin.toolTip}>
                        <a href={linkedin.link} target='_blank'>
                            <SvgIcon classes={svgClasses} fontSize={iconSize}>
                                <LinkedInIcon />
                            </SvgIcon>
                        </a>
                    </Tooltip>
                }
                {!medium? null :
                    <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
                    title={medium.toolTip}>
                        <a href={medium.link} target='_blank'>
                            <SvgIcon classes={svgClasses} fontSize={iconSize}>
                                <MediumIcon />
                            </SvgIcon>
                        </a>
                    </Tooltip>
                }
                {!facebook? null :
                    <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
                    title={facebook.toolTip}>
                        <a href={facebook.link} target='_blank'>
                            <SvgIcon classes={svgClasses} fontSize={iconSize}>
                                <FacebookIcon />
                            </SvgIcon>
                        </a>
                    </Tooltip>
                }
            </Box>
        </Box>
    );
};

export default SocialLinks;