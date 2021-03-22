
import Box from '@material-ui/core/Box/Box';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import style from './SkillStyle';

export type SkillProps = React.ComponentProps<typeof Box> & {
    header: React.ReactNode,

    /**
     * Value between 0 and 100.
     */
    value: number,
    barColor?: string,
    barMaskColor?: string,
    progressRadius?: string,
}

/**
 * Component Skill
 * 
 * Display skill with title
 * 
 * Display skill with progress bar
 * 
 * Customizable progress bar color
 * 
 * Wrapped Material-UI `Box`
 * https://material-ui.com/components/box/
 * 
 * @param {SkillProps} props 
 * @returns 
 */
const Skill:React.FC<SkillProps> = (props:SkillProps) => {
    const {
        header,
        value,
        barColor = 'darkgrey',
        barMaskColor = 'lightgrey',
        progressRadius = '4px',
        ...rest
    } = props;

    const classes = makeStyles(style)({
        barColor,
        barMaskColor,
        progressRadius,
    });

    const progressClasses = {
        determinate: classes.determinate,
        bar1Determinate: classes.bar1Determinate,
    }
    return (
        <Box {...rest}>
            {header}
            <LinearProgress classes={progressClasses} variant='determinate' value={value} />
        </Box>
    );
};

export default Skill;