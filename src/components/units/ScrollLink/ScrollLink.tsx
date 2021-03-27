import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import Link, {ReactScrollLinkProps} from 'react-scroll/modules/components/Link';
import style from './ScrollLinkStyle';

type ScrollLinkWithoutProps = Omit<ReactScrollLinkProps, 'activeClass'|'className'>;
type ScrollLinkProps = ScrollLinkWithoutProps & {
    children: React.ReactNode,
    color?:string,
    activeColor?:string,
    underlineHeight?: string | number,
}

/**
 * Component ScrollLink
 * 
 * Link is using `hash`
 * 
 * Specify `to` value as same as value of `id` in element
 * will scroll to the element when link is clikced.
 * 
 * This componenet is good to work with `ScrollSection`
 * 
 * e.g give string `home` to `id` property for `ScrollSection` and `to` for this `ScrollLink`,
 * will scroll to the `ScrollSection` component when this `ScrollLink` is clicked or when
 * page scroll to the `ScrollSection`, this `ScrollLink` become active(set `spy` to true)
 * 
 * Customizable text color for link
 *  
 * Customizable text color when link is active(when scroll to element link become active),
 * you need to set `spy` to true
 * 
 * Customizable underline height
 * 
 * MouseOver present underline
 * 
 * Wrapped react-scroll `Link`
 * https://www.npmjs.com/package/react-scroll
 * @param props 
 * @returns 
 */
const ScrollLink:React.FC<ScrollLinkProps> = (props:ScrollLinkProps) => {
    const {
        children,
        color = 'black',
        activeColor = 'red',
        underlineHeight = '4px',
        ...rest
    } = props;

    const [active, setActive] = React.useState<boolean>(false);
    const [underline, setUnderline] = React.useState<boolean>(false);

    const toggleLinkActive = ()=>{
        setActive(state=>!state);
    }

    const toggleUnderline = ()=>{
        setUnderline(state=>!state);
    }

    const classes = makeStyles(style)({
        color: active? activeColor : color,
        activeColor,
        isActive: active,
        underlineHeight,
        isUnderline: underline,
    })

    return (
        <Link 
        {...rest} 
        className={classes.link}
        onSetActive={toggleLinkActive}
        onSetInactive={toggleLinkActive}
        onMouseOver={toggleUnderline}
        onMouseOut={toggleUnderline}
        >
        {children}
        </Link>
    );
};

export default ScrollLink;