import makeStyles from '@material-ui/core/styles/makeStyles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import React from 'react';
import style from './SvgIconStyle';

type SvgIconWithoutColorProps = Omit<SvgIconProps, 'color'>;

type SvgIconColorProps = SvgIconWithoutColorProps & {
    color?:string,
}
const SvgIconColor:React.FC<SvgIconColorProps> = (props:SvgIconColorProps) => {
    const {
        children,
        color = 'gery',
        ...rest
    } = props;

    const classes = makeStyles(style)({
        iconColor: color,
    });

    const svgIconClasses = {
        root: classes.svgIcon,
    }

    return (
        <SvgIcon {...rest} classes={svgIconClasses}>
            {children}
        </SvgIcon>
    );
};

export default SvgIconColor;