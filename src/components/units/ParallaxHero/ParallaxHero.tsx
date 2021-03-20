import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import { fade } from '@material-ui/core/styles/colorManipulator';
import React from 'react';
import { Parallax } from 'react-parallax';

type ParallaxHeroProps = React.ComponentProps<typeof Box> & {
    children?: React.ReactNode,
    maskColor?: string,
    maskOpacity?: number,
    bgImage: string,

    /**
     * parallax effect strength (in pixel). this will define the amount of pixels the background image is translated
     */
    strength?: number,
}

/**
 * Component ParallaxHero
 * 
 * A parallax background image with child content
 * 
 * Use `react-parallax`
 * https://github.com/rrutsche/react-parallax
 * 
 * 
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/
 * 
 * @param {HeroProps} props 
 * @returns 
 */
const ParallaxHero:React.FC<ParallaxHeroProps> = (props:ParallaxHeroProps) => {
    const {
        children,
        maskColor = '#000',
        maskOpacity = 0.5,
        bgImage,
        strength = 500,
        ...rest
    } = props; 
    return (
        <Parallax
        bgImage={bgImage}
        strength={strength}
        bgStyle={{'background-color':'#000'}}
        >
        <Box {...rest} position='relative' bgcolor={fade(maskColor, maskOpacity)}>
                <Container>
                {children}
                </Container>
        </Box>
        </Parallax>
    );
};

export default ParallaxHero;