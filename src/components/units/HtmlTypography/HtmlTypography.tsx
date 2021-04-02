import Typography, { TypographyProps } from '@material-ui/core/Typography/Typography';
import React from 'react';

type TypographyWithoutChildren = Omit<TypographyProps, 'children'>;
type HtmlTypographyProps = TypographyWithoutChildren & {
    htmlContent:string,
};

/**
 * Component HtmlTypography
 * 
 * Only take string that contain html tags
 * 
 * @param {HtmlTypographyProps} props 
 * @returns 
 */
const HtmlTypography:React.FC<HtmlTypographyProps> = (props:HtmlTypographyProps) => {
    const {
        htmlContent,
        ...rest
    } = props;

    //if we are on server side
    if(typeof window === undefined){
        return(
            <Typography {...rest}>{htmlContent}</Typography>
        )
    }
    return (
        <Typography 
        dangerouslySetInnerHTML={{
            __html:htmlContent
        }}
        />
    );
};

export default HtmlTypography;