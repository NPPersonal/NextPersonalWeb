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
import AppStoreIcon from '../../../assets/icons/appstore-brands.inline.svg';
import useTheme from '@material-ui/core/styles/useTheme';

type SocialProps = {
    kind:string,
    link: string,
    toolTip: string
}
type SocialLinksProps = React.ComponentProps<typeof Box> & {
    socialIcons: SocialProps[],
    iconSize?: "small" | "inherit" | "default" | "large",
    iconColor?: string,
    toolTipPlacement?: "top" | "right" | "bottom" | "left" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start",
    toolTipColor?: string,
}

const Icons:{[key:string]:React.ReactNode} = {
    Github: <GithubIcon />,
    LinkedIn: <LinkedInIcon />,
    Medium: <MediumIcon />,
    Facebook: <FacebookIcon />,
    AppStore: <AppStoreIcon />
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
        socialIcons,
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
        <Box className={classes.wrapper} {...rest}>
        {socialIcons.map(social=>{
            const icon = Icons[social.kind];

            return (
                <a className={classes.link} href={social.link} target='_blank'>
                    <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
                    title={social.toolTip}>
                        <SvgIcon classes={svgClasses} fontSize={iconSize}>
                            {icon}
                        </SvgIcon>
                    </Tooltip>
                </a>
            )
        })}
        </Box>
    )

    // return (
    //     <Box className={classes.wrapper} {...rest}>
    //         {!github? null :
    //             <a className={classes.link} href={github.link} target='_blank'>
    //                 <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
    //                 title={github.toolTip}>
    //                     <SvgIcon classes={svgClasses} fontSize={iconSize}>
    //                             <GithubIcon />
    //                     </SvgIcon>
    //                 </Tooltip>
    //             </a>
    //         }
    //         {!linkedin? null :
    //             <a className={classes.link} href={linkedin.link} target='_blank'>
    //                 <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
    //                 title={linkedin.toolTip}>
    //                     <SvgIcon classes={svgClasses} fontSize={iconSize}>
    //                         <LinkedInIcon />
    //                     </SvgIcon>
    //                 </Tooltip>
    //             </a>
    //         }
    //         {!medium? null :
    //             <a className={classes.link} href={medium.link} target='_blank'>
    //                 <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
    //                 title={medium.toolTip}>
    //                     <SvgIcon classes={svgClasses} fontSize={iconSize}>
    //                         <MediumIcon />
    //                     </SvgIcon>
    //                 </Tooltip>
    //             </a>
    //         }
    //         {!facebook? null :
    //             <a className={classes.link} href={facebook.link} target='_blank'>
    //                 <Tooltip classes={toolTipClasses} arrow placement={toolTipPlacement} 
    //                 title={facebook.toolTip}>
    //                     <SvgIcon classes={svgClasses} fontSize={iconSize}>
    //                         <FacebookIcon />
    //                     </SvgIcon>
    //                 </Tooltip>
    //             </a>
    //         }
    //     </Box>
    // );
};

export default SocialLinks;