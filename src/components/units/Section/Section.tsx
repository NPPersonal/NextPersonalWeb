import Box from '@material-ui/core/Box/Box';
import React from 'react';

type SectionProps = React.ComponentProps<typeof Box>;

/**
 * Component Section
 * 
 * Take ReactNode as child content
 * 
 * Wrapped Material-UI Box
 * https://material-ui.com/components/box/
 * 
 * @param {SectionProps} props 
 * @returns 
 */
const Section:React.FC<SectionProps> = (props:SectionProps) => {
    const {
        children,
        ...rest
    } = props;

    return (
        <Box {...rest}>{children}</Box>
    );
};

export default Section;