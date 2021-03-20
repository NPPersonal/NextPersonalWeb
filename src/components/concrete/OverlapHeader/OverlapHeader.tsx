import Typography from '@material-ui/core/Typography/Typography';
import Box from '@material-ui/core/Box/Box';
import React from 'react';
import UpperCaseText from '../../units/UpperCaseText/UpperCaseText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import style from './OverlapHeaderStyle';

type HeaderProps = React.ComponentProps<typeof Box> & {
    text: string,
    textColor?: string,
    caption: string,
    captionColor?: string,
    lineWidth?: string,
    lineHeight?: string,
    lineColor?: string,
    noWrap?: boolean,
}

/**
 * Component Header
 * 
 * Caption is on top of main text
 * 
 * Caption with bottom line
 * 
 * Wrapped Material-UI `Box` 
 * https://material-ui.com/components/box/#box
 * 
 * @param {HeaderProps} props 
 * @returns 
 */
const Header:React.FC<HeaderProps> = (props:HeaderProps) => {
    const {
        text,
        textColor = '#c7c4c3',
        caption,
        captionColor = '#808080',
        lineWidth = '80px',
        lineHeight = '4px',
        lineColor = '#0443ff',
        noWrap = false,
        ...rest
    } = props;

    const classes = makeStyles(style)();

    return (
        <Box {...rest}>
            <Box position='relative' textAlign='center'>
                <UpperCaseText variant='h1' noWrap={noWrap}>
                    <Box fontWeight='800' color={textColor}>{text}</Box>
                </UpperCaseText>
                <Box className={classes.caption} color={captionColor}>
                    <Typography variant='h3' noWrap={noWrap}>
                        {caption}
                        <Box width={lineWidth} height={lineHeight} bgcolor={lineColor} 
                        marginLeft='auto' marginRight='auto' borderRadius='4px' />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;