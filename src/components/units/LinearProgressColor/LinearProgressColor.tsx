import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import style from './LinearProgressColorStyle';

type ProgressWithoutColorProps = Omit<LinearProgressProps, 'color'>;

type LinearProgressColorProps = ProgressWithoutColorProps & {
    barColor?:string,
    barMaskColor?:string,
    barRadius?: string|number,

    /** not suitable for `buffer` style */
    barWidth?: string|number,

    /** not suitable for `buffer` style */
    barHeight?: string|number,

}

/**
 * Component LinearProgressColor
 * 
 * Linear progress bar
 * 
 * Customizable color, border radius, width and height
 * 
 * Wrapped Material-UI LinearProgress 
 * https://material-ui.com/components/progress/#progress
 * 
 * @param {LinearProgressColorProps} props 
 * @returns 
 */
const LinearProgressColor:React.FC<LinearProgressColorProps> = (props:LinearProgressColorProps) => {
    const {
        barColor = 'lightgrey',
        barMaskColor = 'grey',
        barRadius = '4px',
        barWidth = 'auto',
        barHeight = '4px',
        ...rest        
    }= props;

    const classes = makeStyles(style)({
        barColor,
        barMaskColor,
        barRadius,
        barWidth,
        barHeight,
    });

    return (
        <LinearProgress 
        {...rest} 
        classes={{
            root: classes.root,
            indeterminate: classes.indeterminate,
            bar1Indeterminate: classes.bar1Indeterminate,
            bar2Indeterminate: classes.bar2Indeterminate,
            determinate: classes.determinate,
            bar1Determinate: classes.bar1Determinate,
            dashed: classes.dashed,
            bar1Buffer: classes.bar1Buffer,
            bar2Buffer: classes.bar2Buffer,
        }}
        />
    );
};

export default LinearProgressColor;