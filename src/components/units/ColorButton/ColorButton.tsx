import Button, { ButtonProps } from '@material-ui/core/Button/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import style from './ColorButtonStyle';

type ButtonWithoutColorProps = Omit<ButtonProps, 'color'>;

type ColorButtonProps = ButtonWithoutColorProps & {
    children: React.ReactNode,
    borderRadius?: string,
    color?: string,
    activeColor?: string,
    hoverColor?: string,
    titleColor?: string,
    px?: string | number,
    py?: string | number,
    shadow?: boolean,
};

/**
 * Component ColorButton
 * 
 * Customized border radius
 * 
 * Customized color, color for active and hover
 * 
 * Padding horizontal and vertical
 * 
 * @param {ColorButtonProps} props 
 * @returns 
 */
const ColorButton:React.FC<ColorButtonProps> = (props:ColorButtonProps) => {
    const {
        children,
        borderRadius = '35px',
        color = 'grey',
        activeColor = 'grey',
        hoverColor = 'lightgrey',
        titleColor = 'black',
        px = 20,
        py = 8,
        shadow = true,
        ...rest
    } = props;

    const classes = makeStyles(style)({
        borderRadius,
        color,
        activeColor,
        hoverColor,
        titleColor,
        px,
        py,
        shadow
    });

    const buttonClasses = {
        root:classes.root,
        label:classes.label,
    }

    return (
        <Button classes={buttonClasses} {...rest}>{children}</Button>
    );
};

export default ColorButton;